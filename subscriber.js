const mqtt = require("mqtt");
const axios = require("axios");

const MQTT_BROKER = "mqtts://client2.consolutechcloud.com";
const FLASK_API = "http://127.0.0.1:5000/predict";

const client = mqtt.connect(MQTT_BROKER, {
  username: "admin",
  password: "tX4$WJ6m@E9K#Hq!a2P%",
  clientId: "node-sub-" + Math.random().toString(16).substr(2, 5)
});

client.on("message", async (topic, message) => {
  try {
    const p = JSON.parse(message.toString());

    const features = [
      p.tcp_len || 0,        
      p.qos || 0,            
      p.mqtt_msg || 0,       
      p.mqtt_hdrflags || 0,  
      p.tcp_flags || 24      
    ];


    const res = await axios.post(FLASK_API, { features });

    const label = res.data.label;
    const conf = (res.data.confidence * 100).toFixed(2);

    const color = label === "Flood Attack" ? "\x1b[31m" : "\x1b[32m";
    console.log(`Received: ${p.tcp_len} | ${color}AI Predict: ${label} (${conf}%)\x1b[0m`);

  } catch (err) {
    console.error(" Error:", err.message);
  }
});

client.on("connect", () => {
  console.log("✅ Subscriber Ready! Waiting for data...");
  client.subscribe("iot/sensor/data");
});
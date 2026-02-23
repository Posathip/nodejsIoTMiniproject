# 🛡️ MQTT Flood Attack Detection System
ระบบตรวจจับการโจมตีแบบ Flood Attack บนโปรโตคอล MQTT โดยใช้ Machine Learning (Random Forest)

---

## 🚀 ฟีเจอร์หลัก (Key Features)
* **Real-time Monitoring:** ตรวจสอบข้อมูลจาก MQTT Broker ตลอดเวลา
* **AI Classification:** แยกแยะระหว่าง Traffic ปกติ (Normal) และการโจมตี (Flood)
* **High Accuracy:** โมเดลได้รับการเทรนด้วย 5 Features หลักที่มีประสิทธิภาพสูง
* **Dashboard:** แสดงผลการตรวจจับผ่านหน้าจอ (Console/Web)

---

## 🛠️ การติดตั้ง (Installation)

### 1. ฝั่ง Node.js (Subscriber & Receiver)
ต้องติดตั้ง Node.js ก่อน จากนั้นเข้าไปที่โฟลเดอร์โปรเจกต์แล้วรัน:

```bash
# ติดตั้ง Library ที่จำเป็น (mqtt, axios, etc.)
npm install
#สั่งรันโปรแกรม
npm run dev 
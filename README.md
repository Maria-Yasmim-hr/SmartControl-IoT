<h1 align="center">🚀 SmartControl IoT</h1>

<p align="center">
Sistema de controle de dispositivos IoT com arquitetura de microserviços
</p>

---

## 📌 Sobre o Projeto
O **SmartControl IoT** é uma plataforma que permite controlar dispositivos inteligentes como lâmpadas e sensores em tempo real, utilizando web e aplicativo mobile.

---

## 🧠 Arquitetura
- 🔐 Java → autenticação (JWT)
- 📡 Python → controle dos dispositivos IoT
- 🔀 Node.js → API Gateway
- 🌐 Web e 📱 Mobile → interface do usuário

---

## ⚙️ Funcionalidades
- ✔️ Login e cadastro  
- ✔️ Controle de dispositivos  
- ✔️ Dashboard em tempo real  

---

## 📡 Rotas principais

### 🔐 Autenticação
POST /auth/login
POST /auth/register


### 📡 IoT
GET /iot/devices
POST /iot/devices/{id}/toggle



---

## ☁️ Estrutura do Projeto
SmartControl-IoT/
├── auth_service
├── iot-service
├── api-gateway
├── web-frontend
└── mobile-app

---

## 👩‍💻 Desenvolvido por
**Maria Yasmim Henrique Ribeiro**

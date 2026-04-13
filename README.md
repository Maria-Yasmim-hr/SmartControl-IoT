<h1 align="center">🚀 SmartControl IoT</h1>

<p align="center">
Sistema completo de controle e monitoramento de dispositivos IoT<br>
com arquitetura moderna baseada em microserviços.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-green"/>
  <img src="https://img.shields.io/badge/Backend-Java%20%7C%20Python-blue"/>
  <img src="https://img.shields.io/badge/Gateway-Node.js-yellow"/>
  <img src="https://img.shields.io/badge/Frontend-Web%20%7C%20Mobile-purple"/>
</p>

---

## 📌 Sobre o Projeto
O **SmartControl IoT** é uma plataforma que permite controlar dispositivos inteligentes como lâmpadas, sensores e fechaduras em tempo real, utilizando web e aplicativo mobile.

O sistema foi desenvolvido com foco em **arquitetura moderna**, separando responsabilidades em microserviços.

---

## 🧠 Arquitetura
- 🔐 **Java (Spring Boot)** → autenticação com JWT  
- 📡 **Python (FastAPI)** → controle dos dispositivos IoT  
- 🔀 **Node.js (Express)** → API Gateway  
- 🌐 **Web + 📱 Mobile** → interface do usuário  

---

## ⚙️ Funcionalidades
- ✔️ Login e cadastro de usuários  
- ✔️ Controle de dispositivos IoT  
- ✔️ Dashboard com dados em tempo real  
- ✔️ Comunicação via WebSockets  
- ✔️ Integração entre Web e Mobile  

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

## 📊 Arquitetura Visual
![Diagrama](https://github.com/Maria-Yasmim-hr/SmartControl-IoT/blob/main/diagrama.png)

---

## 🧪 Testes
Os testes da API foram realizados utilizando Postman, validando autenticação, controle de dispositivos e integração entre os serviços.

---

## 🔐 Segurança
- Autenticação via JWT  
- Separação de responsabilidades  
- API Gateway protegendo os serviços  

---

## 👩‍💻 Desenvolvido por
**Maria Yasmim Henrique Ribeiro**

<p align="center">💡 Projeto desenvolvido para fins educacionais e prática de arquitetura de sistemas.</p>

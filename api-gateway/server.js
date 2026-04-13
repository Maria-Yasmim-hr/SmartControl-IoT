const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

// 🔐 AUTH SERVICE (Java)
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:8080",
    changeOrigin: true
  })
);

// 📡 IOT SERVICE (Python)
app.use(
  "/iot",
  createProxyMiddleware({
    target: "http://localhost:8000",
    changeOrigin: true,
    pathRewrite: {
      "^/iot": ""
    }
  })
);

app.listen(3000, () => {
  console.log("API Gateway rodando na porta 3000");
});
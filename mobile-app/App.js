import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Alert } from "react-native";
import axios from "axios";

export default function App() {

  const [screen, setScreen] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [devices, setDevices] = useState([]);

  // 🔐 LOGIN
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        username,
        password
      });

      if (res.data) {
        setScreen("dashboard");
        loadDevices();
      }
    } catch (err) {
      Alert.alert("Erro", "Login inválido");
    }
  };

  // 📡 CARREGAR DISPOSITIVOS
  const loadDevices = async () => {
    const res = await axios.get("http://localhost:3000/iot/devices");
    setDevices(res.data);
  };

  // 🔁 TOGGLE
  const toggleDevice = async (id) => {
    await axios.post(`http://localhost:3000/iot/devices/${id}/toggle`);
    loadDevices();
    Alert.alert("Atualizado", "Dispositivo alterado!");
  };

  // 🔔 SIMULA NOTIFICAÇÃO
  useEffect(() => {
    if (screen === "dashboard") {
      const interval = setInterval(() => {
        Alert.alert("Notificação", "Novo dado recebido do IoT!");
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [screen]);

  // 🧾 TELA LOGIN
  if (screen === "login") {
    return (
      <View style={{ padding: 20 }}>
        <Text>🔐 Login IoT</Text>

        <TextInput placeholder="Usuário" onChangeText={setUsername} />
        <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />

        <Button title="Entrar" onPress={login} />
      </View>
    );
  }

  // 📊 DASHBOARD
  return (
    <View style={{ padding: 20 }}>
      <Text>📊 Dispositivos IoT</Text>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Text>{item.name} - {item.status}</Text>
            <Button title="Alternar" onPress={() => toggleDevice(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
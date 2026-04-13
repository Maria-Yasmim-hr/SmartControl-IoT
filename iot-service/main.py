from fastapi import FastAPI, WebSocket
import asyncio
import random

app = FastAPI()

devices = [
    {"id": 1, "name": "Lâmpada", "status": "off"},
    {"id": 2, "name": "Sensor", "status": "on"},
    {"id": 3, "name": "Fechadura", "status": "off"}
]

@app.get("/devices")
def get_devices():
    return devices

@app.post("/devices/{device_id}/toggle")
def toggle_device(device_id: int):
    for d in devices:
        if d["id"] == device_id:
            d["status"] = "on" if d["status"] == "off" else "off"
            return d

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = {
            "device": random.choice(devices)["name"],
            "value": random.randint(0, 100)
        }

        await websocket.send_json(data)
        await asyncio.sleep(2)
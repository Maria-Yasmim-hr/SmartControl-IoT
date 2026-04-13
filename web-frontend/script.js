async function login() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    });

    const token = await res.text();
    localStorage.setItem("token", token);

    window.location.href = "dashboard.html";
}

async function loadDevices() {
    const res = await fetch("http://localhost:3000/iot/devices");
    const devices = await res.json();

    const div = document.getElementById("devices");

    devices.forEach(d => {
        const btn = document.createElement("button");
        btn.innerText = `${d.name} (${d.status})`;

        btn.onclick = async () => {
            await fetch(`http://localhost:3000/iot/devices/${d.id}/toggle`, {
                method: "POST"
            });
            location.reload();
        };

        div.appendChild(btn);
    });
}

if (window.location.pathname.includes("dashboard")) {
    async function loadDevices() {
    const res = await fetch("http://localhost:3000/iot/devices");
    const devices = await res.json();

    const div = document.getElementById("devices");
    div.innerHTML = "";

    devices.forEach(d => {
        const card = document.createElement("div");
        card.style.margin = "10px";

        const btn = document.createElement("button");

        btn.innerText = `${d.name} - ${d.status === "on" ? "🟢 Ligado" : "🔴 Desligado"}`;

        btn.onclick = async () => {
            await fetch(`http://localhost:3000/iot/devices/${d.id}/toggle`, {
                method: "POST"
            });
            loadDevices();
        };

        card.appendChild(btn);
        div.appendChild(card);
    });
}

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        chart.data.labels.push("");
        chart.data.datasets[0].data.push(data.value);

        chart.update();
    };
}
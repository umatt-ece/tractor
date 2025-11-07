"use client";
import React from "react";
import GaugeComponent from "react-gauge-component";

export default function Dashboard() {
  // Values
  const [oilTemp, setOilTemp] = React.useState(80);
  const [engineTemp, setEngineTemp] = React.useState(65);
  const [oilPressure, setOilPressure] = React.useState(90);

  // Simulated sensor status
  const oilTempFault = false;
  const engineTempFault = false;
  const oilPressureFault = false;

  const labelStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "0.5rem",
    color: "#1f2937",
  };

  const warningStyle = {
    fontSize: "1.5rem",
    color: "#ef4444",
    marginTop: "0.5rem",
  };

  const failSafeStyle = {
    fontSize: "1.5rem",
    color: "#f59e0b",
    marginTop: "0.5rem",
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>UMATT Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* OIL TEMPERATURE */}
        <div>
          <GaugeComponent
            type="grafana"
            value={oilTemp}
            maxValue={220}
            arc={{
              subArcs: [
                { limit: 80, color: "#10b981" }, // safe
                { limit: 150, color: "#facc15" }, // warning
                { limit: 220, color: "#ef4444" }, // danger
              ],
            }}
            pointer={{
              color: "#ef4444",
              length: 0.8,
              width: 15,
              animationDuration: 1500,
            }}
            labels={{
              valueLabel: { formatTextValue: (v) => `${v} °C` },
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 0 },
                  { value: 40 },
                  { value: 80 },
                  { value: 120 },
                  { value: 160 },
                  { value: 200 },
                  { value: 220 },
                ],
              },
            }}
          />
          <div style={labelStyle}>Oil Temperature</div>
          {oilTemp > 150 && <div style={warningStyle}>⚠️ Out-of-range</div>}
          {oilTempFault && <div style={failSafeStyle}>⚠️ Sensor Fault</div>}

          {/* Slider */}
          <div style={{ marginTop: "1rem" }}>
            <input
              type="range"
              min="0"
              max="220"
              value={oilTemp}
              onChange={(e) => setOilTemp(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <div>{oilTemp} °C</div>
          </div>
        </div>

        {/* OIL PRESSURE */}
        <div>
          <GaugeComponent
            type="semicircle"
            value={oilPressure}
            maxValue={100}
            arc={{
              subArcs: [
                { limit: 30, color: "#ef4444" }, // danger
                { limit: 60, color: "#facc15" }, // warning
                { limit: 100, color: "#10b981" }, // safe
              ],
            }}
            labels={{
              valueLabel: { formatTextValue: (v) => `${v} bar` },
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 0 },
                  { value: 25 },
                  { value: 50 },
                  { value: 75 },
                  { value: 100 },
                ],
              },
            }}
            pointer={{
              color: "#374151",
              length: 0.75,
              width: 10,
            }}
          />
          <div style={labelStyle}>Oil Pressure</div>
          {(oilPressure < 30 || oilPressure > 100) && (
            <div style={warningStyle}>⚠️ Out-of-range</div>
          )}
          {oilPressureFault && <div style={failSafeStyle}>⚠️ Sensor Fault</div>}

          {/* Slider */}
          <div style={{ marginTop: "1rem" }}>
            <input
              type="range"
              min="0"
              max="100"
              value={oilPressure}
              onChange={(e) => setOilPressure(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <div>{oilPressure} bar</div>
          </div>
        </div>

        {/* ENGINE TEMPERATURE (Thermometer with dynamic color) */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              height: "250px",
              width: "50px",
              background: "#d1d5db",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: `${(engineTemp / 120) * 100}%`,
                background:
                  engineTemp <= 40
                    ? "#3b82f6" // blue
                    : engineTemp <= 80
                    ? "#facc15" // yellow
                    : "#ff0000", // red
                borderRadius: "25px",
                transition: "height 0.5s ease, background 0.5s ease",
              }}
            ></div>
          </div>
          <div style={labelStyle}>Engine Temperature</div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {engineTemp} °C
          </div>
          {(engineTemp < 30 || engineTemp > 120) && (
            <div style={warningStyle}>⚠️ Out-of-range</div>
          )}
          {engineTempFault && <div style={failSafeStyle}>⚠️ Sensor Fault</div>}

          {/* Slider */}
          <div style={{ marginTop: "1rem" }}>
            <input
              type="range"
              min="0"
              max="120"
              value={engineTemp}
              onChange={(e) => setEngineTemp(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <div>{engineTemp} °C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

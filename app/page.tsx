export default function Home() {
  const strategies = [
    ["HydraAqua", "$AQUA", "Water Sovereignty"],
    ["VeritasDeep", "$VERITAS", "Deepfake Provenance"],
    ["AeroBreathe", "$BREATHE", "Air Quality Intelligence"],
    ["SovereignSophia", "$SOPHIA", "EU AI Language Datasets"],
    ["EduPrompt", "$PROMPT", "AI Education Layer"],
    ["DarkSky", "$SKY", "Light Pollution Mapping"],
    ["AgroEthic", "$AGRO", "Food Traceability"],
    ["CivixVote", "$CIVIX", "Digital Democracy"],
    ["CyberSafe", "$SHIELD", "Cybersecurity Scoring"]
  ]

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #111 0%, #050505 45%, #000 100%)",
        color: "white",
        padding: "64px",
        fontFamily: "Inter, system-ui, sans-serif"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              marginBottom: "12px",
              letterSpacing: "-2px"
            }}
          >
            KALEIDOLAND OS
          </h1>

          <p
            style={{
              fontSize: "22px",
              opacity: 0.7,
              maxWidth: "760px",
              lineHeight: 1.5
            }}
          >
            Sovereign Infrastructure for Environmental,
            Civic and AI Systems.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px"
          }}
        >
          {strategies.map(([name, token, desc]) => (
            <div
              key={name}
              style={{
                background: "#0b0b0b",
                border: "1px solid #1f1f1f",
                borderRadius: "20px",
                padding: "24px",
                transition: "all .2s ease",
                boxShadow:
                  "0 0 40px rgba(255,255,255,0.03)"
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "8px"
                }}
              >
                {name}
              </div>

              <div
                style={{
                  color: "#6ee7ff",
                  fontWeight: 700,
                  marginBottom: "14px"
                }}
              >
                {token}
              </div>

              <div
                style={{
                  opacity: 0.72,
                  lineHeight: 1.5
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

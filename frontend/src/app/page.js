"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [result, setResult] = useState([]);

  const subjects = [
    "Math", "Physics", "Chemistry", "Biology", "Computer Science",
    "History", "Economics", "English", "Political Science", "Psychology"
  ];

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const getRecommendation = async () => {
    try {
      const res = await axios.post("https://career-ai-clean-7.onrender.com", {
        subjects: selectedSubjects,
      });
      setResult(res.data.recommendations);
    } catch (err) {
      console.error("Error fetching recommendation:", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f0c29, #302b63, #24243e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vw",
        fontFamily: "'Orbitron', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundImage: "url('https://i.gifer.com/YCZH.gif')",
          backgroundSize: "cover",
          opacity: 0.25,
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "rgba(20, 20, 40, 0.85)",
          borderRadius: "28px",
          padding: "6vw",
          boxShadow: "0 0 50px rgba(0, 255, 255, 0.2)",
          border: "1px solid #00ffcc",
          backdropFilter: "blur(10px)",
          animation: "pulse 6s infinite alternate",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(26px, 6vw, 42px)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "24px",
            color: "#00ffe5",
            textShadow: "0 0 20px #00ffe5, 0 0 30px #ff00ff",
          }}
        >
          🌠 AI Career Recommender
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#e0e0e0",
            textAlign: "center",
            marginBottom: "30px",
            textShadow: "0 0 10px #00ffd0",
          }}
        >
          Choose your passions to reveal your cosmic destiny:
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => toggleSubject(s)}
              style={{
                padding: "10px 20px",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                borderRadius: "30px",
                fontWeight: "bold",
                border: "2px solid #00ffc3",
                color: selectedSubjects.includes(s) ? "#0f0" : "#fff",
                backgroundColor: selectedSubjects.includes(s)
                  ? "#072"
                  : "transparent",
                boxShadow: selectedSubjects.includes(s)
                  ? "0 0 15px #0f0, 0 0 25px #00ffcc"
                  : "0 0 8px #ffffff33",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 0 20px #ff00ff, 0 0 30px #00ffd5")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = selectedSubjects.includes(s)
                  ? "0 0 15px #0f0, 0 0 25px #00ffcc"
                  : "0 0 8px #ffffff33")
              }
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={getRecommendation}
          style={{
            padding: "14px 30px",
            fontSize: "clamp(16px, 3vw, 20px)",
            fontWeight: "bold",
            border: "2px solid #00ffd5",
            borderRadius: "40px",
            background: "linear-gradient(90deg, #00ffc3, #ff00ff, #00bfff)",
            backgroundSize: "200% 200%",
            color: "#fff",
            textShadow: "0 0 8px #fff",
            boxShadow: "0 0 20px #00ffd5, 0 0 40px #ff00ff",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            animation: "pulseGlow 3s ease-in-out infinite",
            margin: "0 auto 30px",
            display: "block",
            maxWidth: "fit-content",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.08)";
            e.target.style.boxShadow = "0 0 30px #00ffd5, 0 0 60px #ff00ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 0 20px #00ffd5, 0 0 40px #ff00ff";
          }}
        >
          🚀 Get Career Recommendation
        </button>

        {result.length > 0 && (
          <div
            style={{
              backgroundColor: "#1a1a2e",
              padding: "20px",
              borderRadius: "16px",
              border: "2px solid #00ffcc",
              boxShadow: "0 0 25px #00ffcc88",
            }}
          >
            <h3
              style={{
                color: "#00ffcc",
                fontSize: "clamp(20px, 4vw, 24px)",
                textAlign: "center",
                marginBottom: "16px",
                textShadow: "0 0 15px #00ffcc",
              }}
            >
              💡 Recommended Careers
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#ffffff",
                textAlign: "center",
                fontSize: "clamp(14px, 3vw, 18px)",
              }}
            >
              {result.map((career, i) => (
                <li
                  key={i}
                  style={{ marginBottom: "10px", textShadow: "0 0 10px #fff" }}
                >
                  {career}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 🔥 Animation style */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 6px #00ffd5);
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 12px #ff00ff);
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 6px #00ffd5);
          }
        }
      `}</style>
    </div>
  );
}

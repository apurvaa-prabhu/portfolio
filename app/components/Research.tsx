"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (el: HTMLElement | null) => {
    if (!el) return;
    el.classList.add("reveal");
    refs.current.push(el);
  };
}

export default function Research() {
  const r = useReveal();

  return (
    <section
      id="research"
      style={{
        padding: "100px 52px",
        maxWidth: 1100, margin: "0 auto",
        borderTop: "1px solid var(--paper3)",
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start",
      }}
    >
      {/* Sidebar label */}
      <div style={{ position: "sticky", top: 80 }}>
        <div ref={r} style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: 11, color: "var(--warm-mid)",
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16,
        }}>
          Research
        </div>
        <p ref={r} style={{
          fontSize: 13, color: "var(--warm-mid)", lineHeight: 1.6,
          fontFamily: "var(--font-geist, sans-serif)",
        }}>
          Active independent research at UMass Boston, supervised by Prof. Beatrice Perez.
        </p>
      </div>

      {/* Content */}
      <div>
        <div ref={r} style={{
          padding: "36px 40px",
          background: "white",
          border: "1px solid var(--paper3)",
          borderRadius: 16,
        }}>
          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 20,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                fontSize: 11, color: "var(--accent)",
                letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
              }}>
                UMass Boston · Dept. of Computer Science
              </div>
              <h3 style={{
                fontFamily: "var(--font-fraunces, serif)",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 300, letterSpacing: "-0.02em",
                color: "var(--ink)", lineHeight: 1.2,
              }}>
                LLM-Based Network Intrusion Detection
              </h3>
            </div>
            <div style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: 11, color: "var(--warm-mid)",
              letterSpacing: "0.08em", whiteSpace: "nowrap",
            }}>
              June 2026 — Present
            </div>
          </div>

          {/* Description */}
          <div style={{
            fontSize: 15, color: "#5A5750", lineHeight: 1.75,
            fontFamily: "var(--font-geist, sans-serif)", marginBottom: 28,
          }}>
            <p>
              Developing a lightweight LLM pipeline fine-tuned via LoRA (PEFT) for multi-class network
              intrusion detection — achieving cross-environment generalization on 352,000+ network flow
              records across the CICIDS2017 and UNSW-NB15 datasets.
            </p>
            <p>
              The architecture separates classification from explanation generation, enabling
              analyst-readable plain English threat explanations without compromising model accuracy.
              LoRA-based adaptation uses only 8,000 labeled samples and 66 seconds of fine-tuning,
              updating just 1.31% of model parameters — benchmarked against a Scikit-learn Random
              Forest baseline on an HPC cluster via Slurm.
            </p>
          </div>

          {/* Stats row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 1, background: "var(--paper3)",
            border: "1px solid var(--paper3)", borderRadius: 10,
            overflow: "hidden", marginBottom: 28,
          }}>
            {[
              { val: "352K+", label: "Network flow records" },
              { val: "1.31%", label: "Parameters updated" },
              { val: "66s", label: "Fine-tuning time" },
              { val: "8,000", label: "Labeled samples" },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: "var(--paper2)",
                padding: "20px 24px",
              }}>
                <div style={{
                  fontFamily: "var(--font-fraunces, serif)",
                  fontSize: 28, fontWeight: 300,
                  color: "var(--accent)", letterSpacing: "-0.02em",
                  marginBottom: 4,
                }}>
                  {val}
                </div>
                <div style={{
                  fontFamily: "var(--font-geist-mono, monospace)",
                  fontSize: 10, color: "var(--warm-mid)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Python", "PyTorch", "HuggingFace Transformers", "PEFT (LoRA)", "Pandas", "NumPy", "Scikit-learn", "Slurm (HPC)"].map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

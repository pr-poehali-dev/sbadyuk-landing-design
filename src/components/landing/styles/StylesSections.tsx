export default function StylesSections() {
  return (
    <style>{`
      /* ── SECTIONS ── */
      .section-label {
        font-family: var(--font-head);
        font-size: 0.72rem;
        letter-spacing: 0.3em;
        color: var(--fire);
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .section-label.dark { color: var(--fire); }
      .section-title {
        font-family: var(--font-head);
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 32px;
        text-transform: uppercase;
      }
      .section-title.dark { color: #1a1208; }
      .text-fire { color: var(--fire); }
      .section-desc {
        font-size: 1.05rem;
        line-height: 1.8;
        margin-bottom: 48px;
        max-width: 620px;
        font-weight: 300;
      }
      .section-desc.dark { color: #3d3228; }
      .section-dark {
        background: var(--bg-mid);
        padding: 100px 0;
      }
      .section-darker {
        background: #070707;
        padding: 100px 0;
      }
      .section-light {
        background: var(--bg-light);
        padding: 100px 0;
      }
      .section-cta {
        background: var(--bg-dark);
        padding: 120px 0;
        border-top: 1px solid rgba(230,57,70,0.2);
      }

      /* ── PROBLEM ── */
      .problem-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2px;
      }
      .problem-card {
        background: #161616;
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: background 0.2s;
      }
      .problem-card:hover { background: #1e1e1e; }
      .problem-card--accent {
        background: rgba(230,57,70,0.08);
        border: 1px solid rgba(230,57,70,0.2);
      }
      .problem-icon {
        font-size: 2rem;
      }
      .problem-card p {
        font-size: 1rem;
        line-height: 1.75;
        color: #b0a89e;
        font-weight: 300;
      }
      .problem-card strong { color: var(--text-light); font-weight: 500; }

      /* ── STEPS ── */
      .steps-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;
      }
      .step-card {
        background: #ece6df;
        padding: 36px 28px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: background 0.2s;
      }
      .step-card:hover { background: #e2dbd2; }
      .step-num {
        font-family: var(--font-head);
        font-size: 3rem;
        font-weight: 700;
        color: var(--fire);
        line-height: 1;
      }
      .step-title {
        font-family: var(--font-head);
        font-size: 1.2rem;
        font-weight: 600;
        color: #1a1208;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .step-desc {
        font-size: 0.9rem;
        color: #5a4e44;
        line-height: 1.6;
        font-weight: 300;
      }

      /* ── RESULTS ── */
      .results-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .result-item {
        display: flex;
        align-items: center;
        gap: 20px;
        background: #161616;
        padding: 24px 32px;
        font-size: 1.1rem;
        color: var(--text-light);
        font-weight: 300;
        transition: background 0.2s, transform 0.2s;
      }
      .result-item:hover {
        background: #1e1e1e;
        transform: translateX(6px);
      }
      .result-emoji { font-size: 1.8rem; }
    `}</style>
  );
}

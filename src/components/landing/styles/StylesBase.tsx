export default function StylesBase() {
  return (
    <style>{`
      /* ── VARS ── */
      :root {
        --fire: #e63946;
        --fire-dark: #b5212d;
        --bg-dark: #0a0a0a;
        --bg-mid: #111111;
        --bg-light: #f5f0eb;
        --text-light: #f0ece6;
        --text-muted: #8a8078;
        --font-head: 'Oswald', sans-serif;
        --font-body: 'Roboto', sans-serif;
      }

      /* ── RESET ── */
      .landing-root {
        font-family: var(--font-body);
        background: var(--bg-dark);
        color: var(--text-light);
        overflow-x: hidden;
      }
      .landing-root *, .landing-root *::before, .landing-root *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      .landing-root a { text-decoration: none; color: inherit; }
      .container-inner {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* ── NAV ── */
      .landing-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;
        background: rgba(10,10,10,0.85);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(230,57,70,0.15);
      }
      .nav-logo {
        display: flex;
        align-items: center;
      }
      .nav-logo-img {
        height: 40px;
        width: auto;
        filter: brightness(0) saturate(100%) invert(20%) sepia(90%) saturate(600%) hue-rotate(330deg) brightness(95%);
      }
      .nav-links {
        list-style: none;
        display: flex;
        gap: 32px;
      }
      .nav-links a {
        font-family: var(--font-head);
        font-size: 0.85rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        transition: color 0.2s;
      }
      .nav-links a:hover { color: var(--fire); }
      .nav-burger {
        display: none;
        background: none;
        border: none;
        color: var(--text-light);
        cursor: pointer;
      }

      /* ── HERO ── */
      .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: flex-end;
        padding-bottom: 80px;
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        filter: grayscale(20%);
      }
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(10,10,10,0.65) 0%,
          rgba(10,10,10,0.35) 50%,
          rgba(10,10,10,0.08) 100%
        );
      }
      .hero-content {
        position: relative;
        z-index: 1;
        padding: 100px 24px 0;
        max-width: 780px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .hero-badge {
        display: inline-block;
        font-family: var(--font-head);
        font-size: 0.75rem;
        letter-spacing: 0.25em;
        color: var(--fire);
        border: 1px solid var(--fire);
        padding: 6px 16px;
        width: fit-content;
        text-transform: uppercase;
      }
      .hero-title {
        font-family: var(--font-head);
        line-height: 1;
      }
      .hero-name {
        font-size: clamp(1.4rem, 4vw, 2rem);
        font-weight: 400;
        color: var(--text-muted);
        letter-spacing: 0.2em;
        display: block;
        margin-bottom: 8px;
      }
      .hero-tagline {
        font-size: clamp(2.4rem, 7vw, 7rem);
        font-weight: 700;
        color: var(--text-light);
        letter-spacing: -0.02em;
        display: block;
        text-transform: uppercase;
        line-height: 0.92;
        white-space: nowrap;
      }
      .hero-sub {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #b0a89e;
        max-width: 560px;
        font-weight: 300;
      }
      .hero-cta {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        background: var(--fire);
        color: #fff;
        font-family: var(--font-head);
        font-size: 1.1rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 18px 40px;
        border: none;
        cursor: pointer;
        transition: background 0.2s, transform 0.15s;
        width: fit-content;
        font-weight: 600;
        position: relative;
        overflow: hidden;
      }
      .hero-cta::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255,255,255,0.35);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.45s ease, height 0.45s ease, opacity 0.45s ease;
        opacity: 0;
      }
      .hero-cta:active::after {
        width: 400px;
        height: 400px;
        opacity: 0;
        transition: 0s;
      }
      .hero-cta:hover::after {
        width: 300px;
        height: 300px;
        opacity: 1;
        animation: flash-pulse 0.6s ease-out forwards;
      }
      @keyframes flash-pulse {
        0%   { width: 0; height: 0; opacity: 0.6; }
        60%  { width: 320px; height: 320px; opacity: 0.25; }
        100% { width: 380px; height: 380px; opacity: 0; }
      }
      .hero-cta:hover {
        background: var(--fire-dark);
        transform: translateY(-2px);
      }
      .mobile-br { display: none; }

      /* ── COUNTDOWN ── */
      .hero-center {
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .urgent-banner {
        background: rgba(230,57,70,0.1);
        border: 1px solid rgba(230,57,70,0.35);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 24px;
        width: fit-content;
        flex-wrap: wrap;
      }
      .urgent-label {
        font-family: var(--font-head);
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        color: var(--fire);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .pulse-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--fire);
        display: inline-block;
        animation: pulse 1.2s infinite;
      }
      @keyframes pulse {
        0%,100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.4); }
      }
      .countdown-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .time-cell {
        display: flex;
        align-items: baseline;
        gap: 4px;
      }
      .time-num {
        font-family: var(--font-head);
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        line-height: 1;
        min-width: 2.2ch;
        text-align: center;
      }
      .time-unit {
        font-size: 0.65rem;
        color: var(--text-muted);
        letter-spacing: 0.05em;
      }
      .time-sep {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--fire);
        line-height: 1;
        margin-bottom: 4px;
      }

      /* ── SCROLL HINT ── */
      .scroll-hint {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--text-muted);
        animation: bounce 2s infinite;
        z-index: 1;
      }
      @keyframes bounce {
        0%,100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(8px); }
      }
    `}</style>
  );
}
export default function StylesVKFooter() {
  return (
    <style>{`
      /* ── VK CAROUSEL ── */
      .vk-carousel-wrap { width: 100%; }
      .vk-cards-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 24px;
      }
      .vk-card {
        background: #161616;
        border: 2px solid transparent;
        border-radius: 4px;
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        cursor: pointer;
        transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
        position: relative;
        overflow: hidden;
      }
      .vk-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: var(--card-accent, var(--fire));
      }
      .vk-card--active, .vk-card:hover {
        border-color: var(--card-accent, var(--fire));
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.4);
      }
      .vk-card::after {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 0; height: 0;
        background: rgba(255,255,255,0.12);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        pointer-events: none;
      }
      .vk-card:active::after {
        animation: flash-pulse 0.5s ease-out forwards;
      }
      .vk-card-tag {
        display: inline-block;
        font-family: var(--font-head);
        font-size: 0.65rem;
        letter-spacing: 0.25em;
        color: #fff;
        padding: 4px 12px;
        width: fit-content;
        border-radius: 2px;
      }
      .vk-card-icon { color: var(--card-accent, var(--fire)); }
      .vk-card-title {
        font-family: var(--font-head);
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.3;
        color: var(--text-light);
        text-transform: uppercase;
      }
      .vk-card-sub {
        font-size: 0.82rem;
        color: var(--text-muted);
        line-height: 1.6;
      }
      .vk-card-btn {
        margin-top: auto;
        padding: 12px 24px;
        color: #fff;
        font-family: var(--font-head);
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        transition: opacity 0.2s, transform 0.15s;
        position: relative;
        overflow: hidden;
      }
      .vk-card-btn::after {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 0; height: 0;
        background: rgba(255,255,255,0.35);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      .vk-card-btn:hover::after {
        animation: flash-pulse 0.6s ease-out forwards;
      }
      .vk-card-btn:hover { opacity: 0.9; transform: translateY(-1px); }
      .vk-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
      }
      .vk-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #333;
        border: none;
        cursor: pointer;
        transition: background 0.2s, transform 0.2s;
      }
      .vk-dot--active {
        background: var(--fire);
        transform: scale(1.3);
      }
      .vk-caption {
        text-align: center;
        margin-top: 32px;
        font-size: 0.9rem;
        color: var(--text-muted);
      }
      .fire-link {
        color: var(--fire);
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: color 0.2s;
      }
      .fire-link:hover { color: #ff6b7a; }

      /* ── CTA ── */
      .cta-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
      }
      .cta-title {
        font-family: var(--font-head);
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        font-weight: 700;
        line-height: 1.05;
        text-transform: uppercase;
      }
      .cta-desc {
        font-size: 1.05rem;
        color: var(--text-muted);
        font-weight: 300;
        max-width: 480px;
      }
      .cta-big {
        font-size: 1.2rem;
        padding: 22px 52px;
      }
      .cta-guarantee {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.85rem;
        color: var(--text-muted);
      }

      /* ── FOOTER ── */
      .landing-footer {
        background: #050505;
        padding: 40px 24px;
        border-top: 1px solid #1a1a1a;
      }
      .footer-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
      }
      .footer-logo {
        font-family: var(--font-head);
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--fire);
        letter-spacing: 0.15em;
      }
      .footer-copy {
        font-size: 0.8rem;
        color: var(--text-muted);
      }
      .footer-links {
        display: flex;
        gap: 24px;
      }
      .footer-links a {
        font-size: 0.8rem;
        color: var(--text-muted);
        transition: color 0.2s;
      }
      .footer-links a:hover { color: var(--fire); }

      /* ── MOBILE ── */
      @media (max-width: 768px) {
        .nav-links {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: rgba(10,10,10,0.97);
          flex-direction: column;
          padding: 32px;
          gap: 24px;
          border-top: 1px solid rgba(230,57,70,0.2);
        }
        .nav-links--open { display: flex; }
        .nav-burger { display: block; }
        .mobile-br { display: block; }
        .hero-tagline { font-size: clamp(2.8rem, 14vw, 5rem); }
        .problem-grid { grid-template-columns: 1fr; }
        .steps-row { grid-template-columns: 1fr 1fr; }
        .vk-cards-row {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .footer-inner { flex-direction: column; text-align: center; }
        .urgent-banner { flex-direction: column; gap: 12px; }
        .hero-content { padding-top: 80px; }
      }
      @media (max-width: 480px) {
        .steps-row { grid-template-columns: 1fr; }
        .section-dark, .section-light, .section-darker, .section-cta { padding: 64px 0; }
      }
    `}</style>
  );
}
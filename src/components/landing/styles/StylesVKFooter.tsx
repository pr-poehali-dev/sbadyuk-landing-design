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

      /* ── SIGNUP FORM ── */
      .signup-form-wrap {
        width: 100%;
        max-width: 520px;
        margin-top: 16px;
        background: #111;
        border: 1px solid rgba(230,57,70,0.25);
        border-radius: 6px;
        padding: 40px 36px;
      }
      .signup-form-title {
        font-family: var(--font-head);
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 28px;
        text-align: center;
      }
      .signup-fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 24px;
      }
      .signup-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: left;
      }
      .signup-label {
        font-family: var(--font-head);
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--text-muted);
      }
      .signup-input {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 3px;
        padding: 12px 16px;
        color: #fff;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.2s;
        width: 100%;
      }
      .signup-input::placeholder { color: #444; }
      .signup-input:focus { border-color: var(--fire); }
      .signup-submit {
        width: 100%;
        justify-content: center;
        font-size: 1rem;
        padding: 16px 24px;
      }
      .signup-privacy {
        font-size: 0.72rem;
        color: #444;
        text-align: center;
        margin-top: 12px;
      }
      .signup-success {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 8px 0;
        color: var(--fire);
      }
      .signup-success h3 {
        font-family: var(--font-head);
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.06em;
      }
      .signup-success p {
        color: var(--text-muted);
        font-size: 0.95rem;
      }

      /* ── FOOTER ── */
      .landing-footer {
        background: #050505;
        padding: 64px 24px 40px;
        border-top: 1px solid #1a1a1a;
      }
      .footer-cta-block {
        max-width: 1100px;
        margin: 0 auto 48px;
        background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
        border: 1px solid rgba(230,57,70,0.2);
        border-radius: 8px;
        padding: 48px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        flex-wrap: wrap;
      }
      .footer-cta-text h3 {
        font-family: var(--font-head);
        font-size: clamp(1.4rem, 3vw, 2rem);
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.04em;
        margin-bottom: 8px;
      }
      .footer-cta-text p {
        font-size: 0.95rem;
        color: var(--text-muted);
      }
      .footer-cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 16px 36px;
        background: var(--fire);
        color: #fff;
        font-family: var(--font-head);
        font-size: 0.9rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        border-radius: 3px;
        text-decoration: none;
        white-space: nowrap;
        transition: opacity 0.2s, transform 0.15s;
        position: relative;
        overflow: hidden;
      }
      .footer-cta-btn::after {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 0; height: 0;
        background: rgba(255,255,255,0.35);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      .footer-cta-btn:hover::after { animation: flash-pulse 0.6s ease-out forwards; }
      .footer-cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }
      .footer-socials-row {
        max-width: 1100px;
        margin: 0 auto 32px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .footer-socials-label {
        font-family: var(--font-head);
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-right: 8px;
      }
      .footer-social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px; height: 40px;
        border: 1px solid #222;
        border-radius: 4px;
        color: var(--text-muted);
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 700;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
      }
      .footer-social-link:hover {
        border-color: var(--fire);
        color: var(--fire);
        background: rgba(230,57,70,0.07);
      }
      .footer-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        padding-top: 24px;
        border-top: 1px solid #1a1a1a;
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

      /* ── SCROLL TO TOP ── */
      .scroll-top-btn {
        position: fixed;
        bottom: 32px;
        right: 32px;
        width: 48px; height: 48px;
        background: var(--fire);
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 0.3s, transform 0.3s;
        pointer-events: none;
        z-index: 999;
        box-shadow: 0 4px 20px rgba(230,57,70,0.4);
      }
      .scroll-top-btn--visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      .scroll-top-btn:hover { opacity: 0.85; transform: translateY(-2px); }

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
        .footer-cta-block { flex-direction: column; text-align: center; padding: 32px 24px; }
        .footer-inner { flex-direction: column; text-align: center; }
        .footer-socials-row { justify-content: center; }
        .scroll-top-btn { bottom: 20px; right: 20px; }
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
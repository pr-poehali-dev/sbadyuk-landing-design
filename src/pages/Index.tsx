import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/175589f0-83d7-4044-b118-3cc3dffd90c7/files/4e7aecd0-2d97-430e-a1c0-490a8f2a64c4.jpg";

function useCountdown(targetHours: number) {
  const [time, setTime] = useState({ h: targetHours, m: 0, s: 0 });
  useEffect(() => {
    const end = Date.now() + targetHours * 3600 * 1000;
    const tick = setInterval(() => {
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    }, 1000);
    return () => clearInterval(tick);
  }, [targetHours]);
  return time;
}

function CountdownBlock() {
  const { h, m, s } = useCountdown(14);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="urgent-banner">
      <div className="urgent-label">
        <span className="pulse-dot" />
        ЦЕНА ПОВЫШАЕТСЯ ЧЕРЕЗ
      </div>
      <div className="countdown-row">
        <div className="time-cell">
          <span className="time-num">{pad(h)}</span>
          <span className="time-unit">ч</span>
        </div>
        <span className="time-sep">:</span>
        <div className="time-cell">
          <span className="time-num">{pad(m)}</span>
          <span className="time-unit">мин</span>
        </div>
        <span className="time-sep">:</span>
        <div className="time-cell">
          <span className="time-num">{pad(s)}</span>
          <span className="time-unit">сек</span>
        </div>
      </div>
    </div>
  );
}

const vkCards = [
  {
    id: 1,
    tag: "БОЛЬ",
    title: "Спина болит каждый день — а вы всё ещё терпите?",
    accent: "#e63946",
    icon: "AlertTriangle",
  },
  {
    id: 2,
    tag: "ИСТОРИЯ",
    title: "6 грыж. Компрессионный перелом. Восстановился без операции.",
    subtitle: "без операций · без сложных упражнений · без дорогого оборудования",
    accent: "#f4a261",
    icon: "Shield",
  },
  {
    id: 3,
    tag: "РЕЗУЛЬТАТ",
    title: "21 день — и спина перестаёт мешать жить.",
    cta: "Хочу так же",
    accent: "#2a9d8f",
    icon: "Star",
  },
];

function VKCarousel() {
  const [active, setActive] = useState(0);
  return (
    <div className="vk-carousel-wrap">
      <div className="vk-cards-row">
        {vkCards.map((card, i) => (
          <div
            key={card.id}
            className={`vk-card ${i === active ? "vk-card--active" : ""}`}
            style={{ "--card-accent": card.accent } as React.CSSProperties}
            onClick={() => setActive(i)}
          >
            <div className="vk-card-tag" style={{ background: card.accent }}>{card.tag}</div>
            <div className="vk-card-icon">
              <Icon name={card.icon} fallback="Star" size={32} />
            </div>
            <h3 className="vk-card-title">{card.title}</h3>
            {card.subtitle && <p className="vk-card-sub">{card.subtitle}</p>}
            {card.cta && (
              <button className="vk-card-btn" style={{ background: card.accent }}>
                {card.cta}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="vk-dots">
        {vkCards.map((_, i) => (
          <button
            key={i}
            className={`vk-dot ${i === active ? "vk-dot--active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

const results = [
  { emoji: "🔥", text: "Возвращают энергию уже на 3–5 день" },
  { emoji: "💪", text: "Убирают хроническую усталость за 2 недели" },
  { emoji: "🧠", text: "Восстанавливают концентрацию и ясность мышления" },
  { emoji: "❤️", text: "Улучшают сон без таблеток" },
  { emoji: "🏃", text: "Дают силы на спорт, семью, работу" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-root">
      {/* NAV */}
      <nav className="landing-nav">
        <div className="nav-logo">БАДЮК</div>
        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
        <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          <li><a href="#problem" onClick={() => setMenuOpen(false)}>Проблема</a></li>
          <li><a href="#solution" onClick={() => setMenuOpen(false)}>Решение</a></li>
          <li><a href="#results" onClick={() => setMenuOpen(false)}>Результаты</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-bg">
          <img src={HERO_IMAGE} alt="Сергей Бадюк" className="hero-img" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">21-ДНЕВНЫЙ ПРАКТИКУМ</div>
          <h1 className="hero-title">
            <span className="hero-name">СЕРГЕЯ БАДЮКА</span>
            <br />
            <span className="hero-tagline">РЕЖИМ —<br className="mobile-br" /> ЭТО БАЗА.</span>
          </h1>
          <p className="hero-sub">
            Для тех, кто устал существовать от выходных до выходных. Кто не чувствует в себе сил восстановить здоровье, взяться за карьеру, наладить семейные отношения и наконец сделать то, что давно откладывали.
          </p>
          <CountdownBlock />
          <a href="#contact" className="hero-cta">
            Хочу большего
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
        <div className="scroll-hint">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-dark" id="problem">
        <div className="container-inner">
          <div className="section-label">ПРОБЛЕМА</div>
          <h2 className="section-title">
            Вы слышали, что усталость нужно лечить отдыхом?<br />
            <span className="text-fire">Это ложь.</span>
          </h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">😔</div>
              <p>Каждый день одно и то же: работа, диван, телефон. А где радость? Где энергия? <strong>Где вы?</strong></p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📱</div>
              <p>Вы замечали, как после работы просто «залипаете»? Телефон в руке, лента крутится, а вам даже не интересно. Просто потому, что нет сил на большее.</p>
            </div>
            <div className="problem-card problem-card--accent">
              <div className="problem-icon">⚡</div>
              <p><strong>Усталость — это не норма. Это сигнал.</strong><br />И его можно исправить. Без лекарств. Без годов терапии. За 21 день.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-light" id="solution">
        <div className="container-inner">
          <div className="section-label dark">РЕШЕНИЕ</div>
          <h2 className="section-title dark">
            Режим — это не про дисциплину.<br />
            <span className="text-fire">Это про свободу.</span>
          </h2>
          <p className="section-desc dark">
            Практикум Бадюка — это 21 день конкретных действий, которые перезапускают вашу систему. Не теория. Не мотивационные видео. Только то, что работает.
          </p>
          <div className="steps-row">
            {[
              { n: "01", t: "Диагностика", d: "Находим, где у вас утечка энергии" },
              { n: "02", t: "Режим", d: "Выстраиваем систему сна, питания и движения" },
              { n: "03", t: "Практика", d: "Ежедневные задания — просто и конкретно" },
              { n: "04", t: "Результат", d: "Через 21 день вы — другой человек" },
            ].map((s) => (
              <div className="step-card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3 className="step-title">{s.t}</h3>
                <p className="step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-dark" id="results">
        <div className="container-inner">
          <div className="section-label">РЕЗУЛЬТАТЫ</div>
          <h2 className="section-title">Участники практикума:</h2>
          <div className="results-list">
            {results.map((r, i) => (
              <div className="result-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="result-emoji">{r.emoji}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VK CAROUSEL */}
      <section className="section-darker">
        <div className="container-inner">
          <div className="section-label">ПРАКТИКУМ «ЗДОРОВАЯ СПИНА»</div>
          <h2 className="section-title">Специально для тех,<br />кому мешает спина</h2>
          <VKCarousel />
          <p className="vk-caption">
            Полный курс:{" "}
            <a href="https://school.sbadyuk.com/zdorovayaspina" target="_blank" rel="noopener noreferrer" className="fire-link">
              school.sbadyuk.com/zdorovayaspina
            </a>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-cta" id="contact">
        <div className="container-inner cta-center">
          <div className="section-label">НАЧАТЬ</div>
          <h2 className="cta-title">Готов начать<br /><span className="text-fire">жить по-настоящему?</span></h2>
          <p className="cta-desc">Присоединяйтесь к практикуму и измените жизнь за 21 день</p>
          <a href="#" className="hero-cta cta-big">
            Хочу большего
            <Icon name="ArrowRight" size={22} />
          </a>
          <div className="cta-guarantee">
            <Icon name="Shield" size={18} />
            <span>Гарантия результата или возврат средств</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-logo">БАДЮК</div>
          <p className="footer-copy">© 2024 Сергей Бадюк. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </footer>

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
          font-family: var(--font-head);
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--fire);
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
            rgba(10,10,10,0.97) 0%,
            rgba(10,10,10,0.75) 50%,
            rgba(10,10,10,0.4) 100%
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
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: -0.02em;
          display: block;
          text-transform: uppercase;
          line-height: 0.92;
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
        }
        .hero-cta:hover {
          background: var(--fire-dark);
          transform: translateY(-2px);
        }
        .mobile-br { display: none; }

        /* ── COUNTDOWN ── */
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
          transition: opacity 0.2s;
        }
        .vk-card-btn:hover { opacity: 0.85; }
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
    </div>
  );
}

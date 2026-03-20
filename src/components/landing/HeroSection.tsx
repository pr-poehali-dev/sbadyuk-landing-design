import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://drive.google.com/thumbnail?id=1urU_CP45LGlq3UwhtBoqFZxN8RU14CSQ&sz=w1600";

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

interface HeroSectionProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function HeroSection({ menuOpen, setMenuOpen }: HeroSectionProps) {
  return (
    <>
      {/* NAV */}
      <nav className="landing-nav">
        <a href="#home" className="nav-logo">
          <img src="https://cdn.poehali.dev/projects/175589f0-83d7-4044-b118-3cc3dffd90c7/files/26c7f85a-faba-4934-a708-f7c80e5d43e8.jpg" alt="Бадюк" className="nav-logo-img" />
        </a>
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
            <span className="hero-tagline">РЕЖИМ — ЭТО БАЗА.</span>
          </h1>
          <p className="hero-sub">
            Для тех, кто устал существовать от выходных до выходных. Кто не чувствует в себе сил восстановить здоровье, взяться за карьеру, наладить семейные отношения и наконец сделать то, что давно откладывали.
          </p>
          <div className="hero-center">
            <CountdownBlock />
          </div>
          <div className="hero-center">
            <a href="#contact" className="hero-cta">
              Хочу большего
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
        <div className="scroll-hint">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>
    </>
  );
}
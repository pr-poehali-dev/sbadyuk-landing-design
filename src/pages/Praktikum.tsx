import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/landing/HeroSection";
import ContentSections from "@/components/landing/ContentSections";
import LandingStyles from "@/components/landing/LandingStyles";

const SOCIALS = [
  { label: "VK", href: "https://vk.com/feed" },
  { label: "TG", href: "https://web.telegram.org/" },
  { label: "YT", href: "https://www.youtube.com/" },
];

export default function Praktikum() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => formRef.current?.querySelector("input")?.focus(), 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = "21-ДНЕВНЫЙ ПРАКТИКУМ — Сергей Бадюк";
    return () => { document.title = "21-дневный практикум Сергея Бадюка — РЕЖИМ ЭТО БАЗА"; };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="landing-root">
      <LandingStyles />
      <style>{`
        .carousel-section {
          padding: 0;
          overflow: hidden;
          background: var(--bg-dark);
        }
        .carousel-iframe {
          width: 100%;
          height: 900px;
          border: none;
          display: block;
        }
        @media (max-width: 768px) {
          .carousel-iframe {
            height: 700px;
          }
        }
        .section-cta {
          padding-top: 0 !important;
        }
      `}</style>

      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <ContentSections />

      {/* КАРУСЕЛЬ */}
      <section className="carousel-section">
        <iframe
          src="https://spin-banner-promo--preview.poehali.dev/"
          className="carousel-iframe"
          title="Карусель практикума"
          scrolling="no"
        />
      </section>

      {/* CTA */}
      <section className="section-cta" id="contact">
        <div className="container-inner cta-center">
          <div className="section-label">НАЧАТЬ</div>
          <h2 className="cta-title">Готов начать<br /><span className="text-fire">жить по-настоящему?</span></h2>
          <p className="cta-desc">Присоединяйтесь к практикуму и измените жизнь за 21 день</p>
          <a href="#signup-form" className="hero-cta cta-big" onClick={scrollToForm}>
            Хочу большего
            <Icon name="ArrowRight" size={22} />
          </a>
          <div className="cta-guarantee">
            <Icon name="Shield" size={18} />
            <span>Гарантия результата или возврат средств</span>
          </div>

          {/* ФОРМА */}
          <div className="signup-form-wrap" ref={formRef} id="signup-form">
            {submitted ? (
              <div className="signup-success">
                <Icon name="CheckCircle" size={40} />
                <h3>Заявка принята!</h3>
                <p>Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form className="signup-form" onSubmit={handleSubmit}>
                <h3 className="signup-form-title">Записаться на практикум</h3>
                <div className="signup-fields">
                  <div className="signup-field">
                    <label className="signup-label">Имя</label>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="signup-field">
                    <label className="signup-label">E-mail</label>
                    <input
                      className="signup-input"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div className="signup-field">
                    <label className="signup-label">Телефон</label>
                    <input
                      className="signup-input"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <button type="submit" className="hero-cta signup-submit">
                  Отправить заявку
                  <Icon name="ArrowRight" size={18} />
                </button>
                <p className="signup-privacy">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-socials-row">
          <span className="footer-socials-label">Следи за мной:</span>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="footer-inner">
          <div className="footer-logo">
            <a href="#home">
              <img src="https://avatars.mds.yandex.net/i?id=15657b502f0e07232ef095162fe803ba334ce116-9180844-images-thumbs&n=13" alt="Бадюк" className="nav-logo-img" />
            </a>
          </div>
          <p className="footer-copy">© 2024 Сергей Бадюк. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </footer>

      {/* Кнопка наверх */}
      <button
        className={`scroll-top-btn${showTop ? " scroll-top-btn--visible" : ""}`}
        onClick={scrollTop}
        aria-label="Наверх"
      >
        <Icon name="ChevronUp" size={22} />
      </button>
    </div>
  );
}
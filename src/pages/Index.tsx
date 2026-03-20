import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/landing/HeroSection";
import ContentSections from "@/components/landing/ContentSections";
import VKSection from "@/components/landing/VKSection";
import LandingStyles from "@/components/landing/LandingStyles";

const SOCIALS = [
  { label: "VK", href: "https://vk.com/sbadyuk" },
  { label: "TG", href: "https://t.me/sbadyuk" },
  { label: "YT", href: "https://youtube.com/@sbadyuk" },
  { label: "IG", href: "https://instagram.com/sbadyuk" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="landing-root">
      <LandingStyles />

      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <ContentSections />

      <VKSection />

      {/* CTA */}
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
        {/* Финальный CTA-блок */}
        <div className="footer-cta-block">
          <div className="footer-cta-text">
            <h3>Начни путь к силе прямо сейчас</h3>
            <p>21 день практики — и ты другой человек</p>
          </div>
          <a href="#contact" className="footer-cta-btn">
            Записаться на практикум
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>

        {/* Соцсети */}
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

        {/* Нижняя строка */}
        <div className="footer-inner">
          <div className="footer-logo">БАДЮК</div>
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

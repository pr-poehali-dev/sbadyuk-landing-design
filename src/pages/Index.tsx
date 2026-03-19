import { useState } from "react";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/landing/HeroSection";
import ContentSections from "@/components/landing/ContentSections";
import VKSection from "@/components/landing/VKSection";
import LandingStyles from "@/components/landing/LandingStyles";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="footer-inner">
          <div className="footer-logo">БАДЮК</div>
          <p className="footer-copy">© 2024 Сергей Бадюк. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

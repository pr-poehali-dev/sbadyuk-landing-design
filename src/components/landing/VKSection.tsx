import { useState } from "react";
import Icon from "@/components/ui/icon";

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
    accent: "#e63946",
    icon: "Shield",
  },
  {
    id: 3,
    tag: "РЕЗУЛЬТАТ",
    title: "21 день — и спина перестаёт мешать жить.",
    cta: "Хочу так же",
    accent: "#e63946",
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

export default function VKSection() {
  return (
    <section className="section-darker">
      <div className="container-inner">
        <div className="section-label">ПРАКТИКУМ «ЗДОРОВАЯ СПИНА»</div>
        <h2 className="section-title">Специально для тех,<br />кому мешает боль в спине</h2>
        <VKCarousel />
        <p className="vk-caption">
          Полный курс:{" "}
          <a href="https://school.sbadyuk.com/zdorovayaspina" target="_blank" rel="noopener noreferrer" className="fire-link">
            school.sbadyuk.com/zdorovayaspina
          </a>
        </p>
      </div>
    </section>
  );
}
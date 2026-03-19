import Icon from "@/components/ui/icon";

const results = [
  { emoji: "🔥", text: "Возвращают энергию уже на 3–5 день" },
  { emoji: "💪", text: "Убирают хроническую усталость за 2 недели" },
  { emoji: "🧠", text: "Восстанавливают концентрацию и ясность мышления" },
  { emoji: "❤️", text: "Улучшают сон без таблеток" },
  { emoji: "🏃", text: "Дают силы на спорт, семью, работу" },
];

export default function ContentSections() {
  return (
    <>
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
    </>
  );
}

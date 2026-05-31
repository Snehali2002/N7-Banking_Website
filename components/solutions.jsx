/* ============================================================
   Solutions grid + section header
   ============================================================ */
function SolIcon({ src }) {
  return <img className="ic" src={src} alt="" aria-hidden="true" />;
}

const SOLUTIONS = [
  { icon: "assets/icons/sol-corebanking.png", title: "Core Banking CB7",
    body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance." },
  { icon: "assets/icons/sol-digital.png", title: "Digital Banking N7",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients" },
  { icon: "assets/icons/sol-openbanking.png", title: "Open Banking",
    body: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring." },
  { icon: "assets/icons/sol-loanorigination.png", title: "Loan Origination System", tag: "NBFC",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients" },
  { icon: "assets/icons/sol-loanmanagement.png", title: "Loan Management System", tag: "NBFC",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients" },
];

function SolutionCard({ s, i }) {
  return (
    <article className="sol-card reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
      <div className="topline">
        <SolIcon src={s.icon} />
        {s.tag && <span className="tag">{s.tag}</span>}
      </div>
      <div className="body">
        <div className="copy">
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
        <LearnMore>learn more</LearnMore>
      </div>
    </article>
  );
}

function Solutions() {
  return (
    <section className="section solutions container" id="solutions">
      <div className="glow sol-glow" />
      <div className="sol-inner">
        <div className="head reveal">
          <h2 className="h2 semi">All of our solutions are tailor-made to your needs</h2>
          <div><OutlineButton>REQUEST DEMO</OutlineButton></div>
        </div>
        <div className="sol-grid">
          {SOLUTIONS.map((s, i) => <SolutionCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
window.Solutions = Solutions;

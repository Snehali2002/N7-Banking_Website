import React from 'react';
import { PrimaryButton, OutlineButton, LearnMore, Check } from './ui';

export function CloudSection() {
  return (
    <section className="section cloud container">
      <span className="wm wm-outline" style={{ left: "-9%", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(260px,34vw,450px)" }}>CB7</span>
      <div className="inner">
        <div className="copy reveal">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="h2">A complete cloud-based<br />core banking.</h2>
            <p className="lead" style={{ opacity: .8 }}>Faster time to market with our cloud-based core banking services</p>
          </div>
          <div><PrimaryButton>REQUEST DEMO</PrimaryButton></div>
          <LearnMore>learn more</LearnMore>
        </div>
        <div className="monitor-clip reveal" style={{ transitionDelay: "120ms" }}>
          <div className="monitor monitor-bleed">
            <div className="monitor-screen">
              <img src="/assets/img/dashboard.png" alt="N7 AML analytics dashboard" loading="lazy" />
            </div>
            <div className="monitor-base" />
          </div>
        </div>
      </div>
    </section>
  );
}

const EFF_COL1 = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];
const EFF_COL2 = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export function EfficiencySection() {
  return (
    <section className="section efficiency container">
      <div className="inner">
        <div className="monitor-clip reveal">
          <div className="monitor monitor-bleed-left">
            <div className="monitor-screen">
              <img src="/assets/img/spreadsheet.png" alt="Core banking data and reporting view" loading="lazy" />
            </div>
            <div className="monitor-base" />
          </div>
        </div>
        <div className="copy reveal" style={{ transitionDelay: "100ms" }}>
          <h3>Run a more efficient, flexible,and digitally connected corebanking system</h3>
          <div>
            <p className="get">What you will get:</p>
            <div className="check-cols">
              <div className="check-col">{EFF_COL1.map((t) => <Check key={t}>{t}</Check>)}</div>
              <div className="check-col">{EFF_COL2.map((t) => <Check key={t}>{t}</Check>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTABand({ id, lead = "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations", wm = "CB7" }) {
  return (
    <section className="section cta-section container" id={id}>
      <div className="cta-band reveal">
        <span className="wm">{wm}</span>
        <div className="copy">
          <h2 className="h2">Take the full advantage of going paper-less now.</h2>
          <p className="lead" style={{ opacity: .8 }}>{lead}</p>
        </div>
        <div className="actions">
          <OutlineButton>CONTACT US</OutlineButton>
          <PrimaryButton>REQUEST DEMO</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export function CTAPlain() {
  return (
    <section className="section cta-plain container">
      <div className="copy reveal">
        <h2 className="h2">Take the full advantage of going paper-less now.</h2>
        <p className="lead muted">CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
      </div>
      <div className="actions reveal">
        <OutlineButton>CONTACT US</OutlineButton>
        <PrimaryButton>REQUEST DEMO</PrimaryButton>
      </div>
    </section>
  );
}

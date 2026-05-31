import React from 'react';
import { PrimaryButton, OutlineButton, LearnMore, Check } from './ui';

function Sparkle() {
  return <img className="spark" src="/assets/icons/sparkle.png" alt="" aria-hidden="true" />;
}

function MarqueeUnit() {
  return (
    <span className="item">
      <span className="x"><Sparkle /></span>
      <span className="grad">N7</span>
      <span className="x"><Sparkle /></span>
      <span className="word">Say</span>
      <img className="wave" src="/assets/img/wave.png" alt="" aria-hidden="true" />
      <span className="word">to the new way of banking</span>
      <span className="x"><Sparkle /></span>
      <span className="grad">CB7</span>
      <span className="x"><Sparkle /></span>
      <span className="word">Say</span>
      <img className="wave" src="/assets/img/wave.png" alt="" aria-hidden="true" />
      <span className="word">to the new way of banking</span>
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track"><MarqueeUnit /><MarqueeUnit /></div>
    </div>
  );
}

export function Phone({ src, alt }) {
  return (
    <div className="phone">
      <img className="screen" src={src} alt={alt} loading="lazy" />
      <img className="bezel" src="/assets/img/phone-bezel.png" alt="" aria-hidden="true" />
    </div>
  );
}

export function PhonePng({ src, alt }) {
  return (
    <div className="oob-phone">
      <img className="phone-png" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function Feature({ title, body, checks }) {
  return (
    <div className="feat">
      <h4>{title}</h4>
      <p>{body}</p>
      <div className="checks">{checks.map((c) => <Check key={c} light>{c}</Check>)}</div>
    </div>
  );
}

const OOB_ROWS = [
  {
    screen: "/assets/img/screen-home.png", alt: "N7 home dashboard",
    title: "Fully compliant with regulatory requirement",
    body: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.",
    checks: ["Pre-Integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"],
    reverse: false,
  },
  {
    screen: "/assets/img/phone-chart.png", alt: "N7 spending chart screen",
    title: "No legacy IT systems",
    body: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    checks: ["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"],
    reverse: true,
  },
  {
    screen: "/assets/img/phone-mockup.png", alt: "N7 home dashboard screen",
    title: "No traditional branches",
    body: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    checks: ["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adoptable and Scalable"],
    reverse: false,
  },
];

export function OutOfBox() {
  const r = OOB_ROWS[0];
  return (
    <section className="section oob">
      <img className="wm-n7-img" src="/assets/img/n7-watermark.png" alt="" aria-hidden="true" />
      <img className="oob-deco oob-deco-left" src="/assets/img/deco-swirl.png" alt="" aria-hidden="true" />
      <img className="oob-deco oob-deco-right" src="/assets/img/deco-seven.png" alt="" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="oob-hero reveal">
          <div className="oob-intro">
            <h2 className="h2">Digital banking out-of-the-box</h2>
            <p className="lead">N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
            <div className="oob-cta"><PrimaryButton>REQUEST DEMO</PrimaryButton></div>
            <LearnMore>learn more</LearnMore>
          </div>
          <PhonePng src="/assets/img/phone-mockup.png" alt="N7 home dashboard" />
          <Feature title={r.title} body={r.body} checks={r.checks} />
        </div>

        <div className="rows">
          {OOB_ROWS.slice(1).map((row) => (
            <div className={`oob-row ${row.reverse ? "reverse" : ""} reveal`} key={row.title}>
              <PhonePng src={row.screen} alt={row.alt} />
              <Feature title={row.title} body={row.body} checks={row.checks} />
            </div>
          ))}
        </div>

        <div className="cta-band reveal" style={{ marginTop: 100 }}>
          <span className="wm">N7</span>
          <div className="copy">
            <h2 className="h2" style={{ color: "var(--c-ink)" }}>Take the full advantage of going paper-less now.</h2>
            <p className="lead" style={{ color: "var(--c-ink)", opacity: .8 }}>N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
          </div>
          <div className="actions">
            <OutlineButton>CONTACT US</OutlineButton>
            <PrimaryButton>REQUEST DEMO</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

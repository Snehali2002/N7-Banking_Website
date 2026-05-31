/* ============================================================
   Case studies — interactive carousel
   ============================================================ */
const CASES = [
  { brand: "Zoomerr", title: "How we help brand reach out to more people" },
  { brand: "ArtVenue", title: "Scaling a digital-first bank across three markets" },
  { brand: "Waves", title: "Cutting onboarding time from days to minutes" },
];

function CaseCard({ c }) {
  return (
    <div className="case-card case-main">
      <div className="case-thumb"><XGrid /></div>
      <div className="case-body">
        <div className="top">
          <span className="eyebrow">getting started</span>
          <h3>{c.title}</h3>
          <span className="zoom">{c.brand}</span>
        </div>
        <span className="read-more" style={{ maxWidth: 431 }}>read more</span>
      </div>
    </div>
  );
}

function CaseStudies() {
  const [idx, setIdx] = useState(0);
  const n = CASES.length;
  const go = useCallback((d) => setIdx((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);

  const prev = (idx - 1 + n) % n;
  const next = (idx + 1) % n;

  return (
    <section className="section cases container" id="cases">
      <h2 className="h2 reveal">Our Case Studies</h2>
      <div className="case-stage reveal">
        <div className="case-card case-side left"><div className="case-thumb"><XGrid /></div></div>
        <div className="case-card case-side right"><div className="case-thumb"><XGrid /></div></div>
        <div style={{ width: "min(1015px,100%)", position: "relative", zIndex: 2 }}>
          <CaseCard c={CASES[idx]} key={idx} />
        </div>
      </div>
      <div className="case-ctrls">
        <button className="case-arrow" aria-label="Previous case study" onClick={() => go(-1)}>
          <svg viewBox="0 0 16 16" fill="none"><path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="case-dots">
          {CASES.map((_, i) => (
            <button key={i} className={`dot ${i === idx ? "on" : ""}`} aria-label={`Case study ${i + 1}`} onClick={() => setIdx(i)} />
          ))}
        </div>
        <button className="case-arrow" aria-label="Next case study" onClick={() => go(1)}>
          <svg viewBox="0 0 16 16" fill="none"><path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
}
window.CaseStudies = CaseStudies;

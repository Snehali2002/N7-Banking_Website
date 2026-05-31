/* ============================================================
   Case studies — interactive carousel
   ============================================================ */
const CASES = [
  { brand: "Zoomerr", logo: "assets/logos/zoomerr.png", title: "How we help brand reach out to more people" },
  { brand: "ArtVenue", logo: "assets/logos/artvenue.png", title: "Scaling a digital-first bank across three markets" },
  { brand: "Waves", logo: "assets/logos/waves.png", title: "Cutting onboarding time from days to minutes" },
];

function CaseInner({ c }) {
  return (
    <React.Fragment>
      <div className="case-thumb"><XGrid /></div>
      <div className="case-body">
        <div className="top">
          <span className="eyebrow">getting started</span>
          <h3>{c.title}</h3>
          <span className="zoom"><img src={c.logo} alt={c.brand} />{c.brand}</span>
        </div>
        <span className="read-more">Read More</span>
      </div>
    </React.Fragment>
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
        <div className="case-card case-side left" aria-hidden="true"><CaseInner c={CASES[prev]} /></div>
        <div className="case-card case-side right" aria-hidden="true"><CaseInner c={CASES[next]} /></div>
        <div className="case-card case-main" key={idx}><CaseInner c={CASES[idx]} /></div>
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
        <div className="case-viewall"><LearnMore>VIEW ALL</LearnMore></div>
      </div>
    </section>
  );
}
window.CaseStudies = CaseStudies;

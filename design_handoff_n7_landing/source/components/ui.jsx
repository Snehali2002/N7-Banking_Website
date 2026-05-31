/* ============================================================
   Shared UI primitives + inline icons
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- icons ---- */
function ArrowDiag({ className }) {
  // up-right diagonal arrow used by "learn more" / footer
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5 L9.5 2.5 M4 2.5 H9.5 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CheckGlyph() {
  return (
    <svg viewBox="0 0 9.173 6.885" fill="none" aria-hidden="true">
      <path d="M 2.832 5.564 L 0.932 3.664 C 0.829 3.562 0.691 3.504 0.546 3.504 C 0.401 3.504 0.262 3.562 0.16 3.664 C 0.058 3.766 0 3.905 0 4.05 C 0 4.122 0.014 4.193 0.042 4.259 C 0.069 4.325 0.109 4.385 0.16 4.436 L 2.448 6.724 C 2.662 6.938 3.007 6.938 3.22 6.724 L 9.013 0.932 C 9.115 0.829 9.173 0.691 9.173 0.546 C 9.173 0.401 9.115 0.262 9.013 0.16 C 8.911 0.058 8.772 0 8.627 0 C 8.482 0 8.343 0.058 8.241 0.16 L 2.832 5.564 Z" fill="currentColor"/>
    </svg>
  );
}
const X_PATH = "M 71.211 0 L 82.528 11.321 L 67.327 26.522 C 62.16 31.693 55.319 34.31 48.545 34.301 C 41.776 34.31 34.93 31.693 29.763 26.522 L 14.563 11.321 L 25.88 0 L 41.08 15.2 C 43.163 17.274 45.816 18.284 48.541 18.293 C 51.266 18.284 53.919 17.279 56.001 15.2 L 71.202 0 L 71.211 0 Z M 97.095 71.206 L 81.895 56.006 C 79.821 53.923 78.815 51.27 78.806 48.545 C 78.815 45.816 79.821 43.163 81.895 41.084 L 97.095 25.884 L 85.778 14.563 L 70.578 29.763 C 65.406 34.93 62.789 41.776 62.798 48.545 C 62.789 55.315 65.406 62.161 70.578 67.323 L 85.778 82.523 L 97.099 71.206 L 97.095 71.206 Z M 25.884 97.09 L 41.084 81.89 C 43.167 79.812 45.816 78.806 48.545 78.797 C 51.27 78.806 53.923 79.812 56.006 81.89 L 71.206 97.09 L 82.528 85.769 L 67.327 70.569 C 62.16 65.397 55.319 62.78 48.545 62.789 C 41.776 62.78 34.93 65.397 29.763 70.569 L 14.563 85.769 L 25.884 97.09 Z M 0 25.884 L 15.2 41.084 C 17.274 43.167 18.28 45.82 18.289 48.545 C 18.28 51.27 17.274 53.923 15.2 56.006 L 0 71.206 L 11.321 82.528 L 26.522 67.327 C 31.693 62.161 34.31 55.319 34.301 48.55 C 34.31 41.78 31.693 34.934 26.522 29.767 L 11.321 14.567 L 0 25.889 L 0 25.884 Z";
function XPattern() {
  return (
    <svg viewBox="0 0 97.099 97.09" fill="none" aria-hidden="true">
      <path d={X_PATH} fill="currentColor"/>
    </svg>
  );
}
function XGrid({ count = 4 }) {
  return (
    <div className="blog-xgrid">
      {Array.from({ length: count }).map((_, i) => <XPattern key={i} />)}
    </div>
  );
}

/* ---- buttons ---- */
function PrimaryButton({ children = "REQUEST DEMO", className = "", ...p }) {
  return <button className={`btn btn-primary ${className}`} {...p}>{children}</button>;
}
function OutlineButton({ children = "CONTACT US", light = false, className = "", ...p }) {
  return <button className={`btn btn-outline ${light ? "on-light" : ""} ${className}`} {...p}>{children}</button>;
}
function LearnMore({ children = "learn more", ...p }) {
  return (
    <a className="learn" {...p}>
      <span className="row">{children}<svg className="arr" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7 H11.5 M8 3.5 L11.8 7 L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      <span className="bar" />
    </a>
  );
}

/* ---- check item ---- */
function Check({ children, light = false }) {
  return (
    <div className="check">
      <span className="dot"><CheckGlyph /></span>
      <span style={light ? { color: "var(--c-ink-dark)" } : undefined}>{children}</span>
    </div>
  );
}

/* ---- scroll reveal ---- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

Object.assign(window, {
  ArrowDiag, CheckGlyph, XPattern, XGrid,
  PrimaryButton, OutlineButton, LearnMore, Check, useReveal,
});

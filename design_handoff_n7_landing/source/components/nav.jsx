/* ============================================================
   Navigation — full-width rounded bar, sticky, responsive
   ============================================================ */
function Chevron() {
  return <svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1.5 1.5 L6 6 L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Solutions", href: "#solutions", chevron: true },
    { label: "Resources", href: "#fintech", chevron: true },
    { label: "About Us", href: "#footer", chevron: false },
  ];

  return (
    <div className="nav-wrap">
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
        <a className="brand" href="#top">N7</a>
        <div className="links">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}{l.chevron && <Chevron />}</a>
          ))}
        </div>
        <OutlineButton className="nav-cta">REQUEST DEMO</OutlineButton>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {links.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <OutlineButton className="nav-cta" onClick={() => setOpen(false)}>REQUEST DEMO</OutlineButton>
      </div>
    </div>
  );
}
window.Nav = Nav;

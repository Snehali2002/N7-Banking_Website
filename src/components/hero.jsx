import React, { useEffect, useRef } from 'react';
import { PrimaryButton, OutlineButton } from './ui';

/* --- inline mockup icons (24 viewBox) --- */
function IcBell() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 16H6c-.62 0-.94-.74-.52-1.18.82-.86 1.72-2.3 1.72-5.42a4.8 4.8 0 0 1 9.6 0c0 3.12.9 4.56 1.72 5.42.42.44.1 1.18-.52 1.18Z" strokeLinejoin="round"/><circle cx="12" cy="19" r="1.15" fill="currentColor" stroke="none"/></svg>;
}
function IcTransfer() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2.5 V8.4 M9.4 5.1 L12 2.5 L14.6 5.1" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="9.6" width="18" height="10.4" rx="2.4"/><circle cx="12" cy="14.8" r="2.3"/><path d="M6.2 9.6v10.4M17.8 9.6v10.4" strokeLinecap="round"/></svg>;
}
function IcGrid() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{[[3.5,3.5],[13.5,3.5],[3.5,13.5],[13.5,13.5]].map(([x,y],i)=><rect key={i} x={x} y={y} width="7" height="7" rx="2.1"/>)}</svg>;
}
function IcArrowUR() {
  return <svg viewBox="0 0 24 24" fill="none"><path d="M7 17 L16 8 M8 8 H16 V16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

/* --- floating composition, native 580x432, JS-scaled --- */
function HeroStage() {
  const wrapRef = useRef(null);
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const stage = wrap.querySelector(".hero-stage");
    const fit = () => { stage.style.transform = `scale(${wrap.clientWidth / 580})`; };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  const chips = [
    { t: "This Day" }, { t: "This Week", on: true }, { t: "This Month" }, { t: "6 Month" },
  ];
  const actions = [
    { l: "Fund Transfer", ic: <IcTransfer /> },
    { l: "Add Money", ic: <span className="hs-dollar" /> },
    { l: "More", ic: <IcGrid /> },
  ];

  return (
    <div className="hero-stage-wrap" ref={wrapRef}>
      <div className="hero-stage">
        {/* photo */}
        <img className="hs-photo" src="/assets/img/hero-photo.jpg" alt="Woman using the N7 banking app on her phone" />

        {/* balance card */}
        <div className="hs-card hs-balance">
          <img className="hs-avatar" src="/assets/img/avatar.jpg" alt="Toni Kross" />
          <div className="hs-id">
            <span className="hs-name">Toni Kross</span>
            <span className="hs-sub">Good Morning</span>
          </div>
          <span className="hs-bell"><IcBell /></span>
          <div className="hs-bal">
            <span className="hs-bal-l">Total balance</span>
            <span className="hs-bal-v">$42,295.00 USD</span>
          </div>
          <div className="hs-divider" />
          <div className="hs-actions">
            {actions.map((a) => (
              <div className="hs-act" key={a.l}>
                <span className="hs-tile">{a.ic}</span>
                <span className="hs-act-l">{a.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* recent activity card */}
        <div className="hs-card hs-activity">
          <span className="hs-act-title">Recent activity</span>
          <div className="hs-chips">
            {chips.map((c) => <span key={c.t} className={`hs-chip ${c.on ? "on" : ""}`}>{c.t}</span>)}
          </div>
          <div className="hs-tx">
            <span className="hs-tx-ic"><IcArrowUR /></span>
            <div className="hs-tx-txt">
              <span className="hs-tx-nm">To Jin <i>· Work</i></span>
              <span className="hs-tx-dt">12 jun 2022</span>
            </div>
            <span className="hs-tx-amt">-$59</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const logos = [
    { k: "SHELLS", node: "SHELLS", img: "/assets/logos/shells.png" },
    { k: "SmartFinder", node: "SmartFinder", img: "/assets/logos/smartfinder.png" },
    { k: "Zoomerr", node: "Zoomerr", img: "/assets/logos/zoomerr.png" },
    { k: "ArtVenue", node: "ArtVenue", img: "/assets/logos/artvenue.png" },
    { k: "kontrastr", node: "kontrastr", img: "/assets/logos/kontrastr.png" },
    { k: "WAVES", node: <React.Fragment>WAVES<span className="thin">MARATHON</span></React.Fragment>, img: "/assets/logos/waves.png" },
  ];
  return (
    <header className="section hero container" id="top">
      <div className="inner">
        <div className="hero-copy reveal">
          <div className="top">
            <h1 className="h1">The new foundation of modern banking</h1>
            <p className="lead">We drive innovation and growth, provide seamless customer experience and operational excellence</p>
          </div>
          <div className="actions">
            <PrimaryButton>REQUEST DEMO</PrimaryButton>
            <OutlineButton>CONTACT US</OutlineButton>
          </div>
          <div className="trusted">
            <span className="label muted">trusted by:</span>
            <div className="logos">{logos.map((l) => (
              <span className="logo" key={l.k}><img src={l.img} alt={l.k} />{l.node}</span>
            ))}</div>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="glow hero-glow" />
          <HeroStage />
        </div>
      </div>
    </header>
  );
}

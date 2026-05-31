import React from 'react';

function SocialArrow() {
  return <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 9 L9 3 M4 3 H9 V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function LinkArrow() {
  return <svg className="link-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8 H13 M8.5 3.5 L13 8 L8.5 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const OFFICES = [
  { city: "London", addr: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom." },
  { city: "Dubai", addr: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates" },
  { city: "Pune", addr: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India" },
];
const SOLUTIONS_LINKS = ["Core Banking CB7", "Digital Banking N7", "Open Banking", "Loan Origination System", "Loan Management System", "Digital Transformation"];
const BANKING_LINKS = ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team"];

export default function Footer() {
  return (
    <footer className="section footer container" id="footer">
      <div className="glow" />
      <div className="inner">
        <div className="reveal">
          <div className="brand-wm">N7</div>
        </div>

        <div className="foot-cols reveal">
          {/* Row 1 — offices */}
          <div className="foot-block">
            <h5>{OFFICES[0].city}</h5>
            <address>{OFFICES[0].addr}</address>
          </div>
          <div className="foot-block">
            <h5>{OFFICES[1].city}</h5>
            <address>{OFFICES[1].addr}</address>
          </div>
          <div className="foot-block">
            <h5>{OFFICES[2].city}</h5>
            <address>{OFFICES[2].addr}</address>
          </div>

          {/* Row 2 — link groups */}
          <div className="foot-block">
            <h5>Solutions</h5>
            <nav className="foot-links">{SOLUTIONS_LINKS.map((l) => <a key={l} href="#solutions" className="foot-link"><span>{l}</span><LinkArrow /></a>)}</nav>
          </div>
          <div className="foot-block">
            <h5>N7 Banking</h5>
            <nav className="foot-links">
              {BANKING_LINKS.map((l) => <a key={l} href="#top" className="foot-link"><span>{l}</span><LinkArrow /></a>)}
              <a href="#top" className="foot-link"><span>Brand Center</span><LinkArrow /></a>
            </nav>
          </div>
          <div className="foot-block">
            <h5>Our Socials</h5>
            <nav className="foot-links">
              <a href="#top" className="foot-link"><span>LinkedIn</span><LinkArrow /></a>
              <a href="#top" className="foot-link"><span>X</span><LinkArrow /></a>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="copyright">Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]</p>
      </div>
    </footer>
  );
}

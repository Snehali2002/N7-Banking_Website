/* ============================================================
   App — composition root
   ============================================================ */
function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <CloudSection />
        <EfficiencySection />
        <CTABand id="cta-1" />
        <Marquee />
        <OutOfBox />
        <Fintech />
        <CaseStudies />
        <CTAPlain />
        <Footer />
      </main>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

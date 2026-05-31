import React from 'react';
import { OutlineButton, LearnMore, XGrid } from './ui';

function ByLine({ author = "David Grohl", date = "17/08/24" }) {
  return <div className="byline"><span>{author}</span><span>{date}</span></div>;
}

function BlogFeature() {
  return (
    <article className="blog-feature reveal">
      <div className="blog-thumb tall"><XGrid /></div>
      <div className="blog-meta">
        <span className="eyebrow">getting started</span>
        <h3>How to transition from a traditional to a digital bank</h3>
        <ByLine />
        <div style={{ marginTop: 14 }}><span className="read-more" style={{ display: "block" }}>read more</span></div>
      </div>
    </article>
  );
}

function BlogCard({ i }) {
  return (
    <article className="blog-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
      <div className="blog-meta">
        <span className="eyebrow">getting started</span>
        <h3>How to transition from a traditional to a digital bank</h3>
        <ByLine />
      </div>
      <span className="read-more">read more</span>
    </article>
  );
}

export default function Fintech() {
  return (
    <section className="section fintech container" id="fintech">
      <div className="glow" />
      <div className="inner">
        <div className="head reveal">
          <h2 className="h2 semi">Get yourself up-to-speed on all the things happening in fintech</h2>
          <div><OutlineButton>Insights</OutlineButton></div>
        </div>
        <div className="blog-col">
          <BlogFeature />
          <div className="blog-row2">
            <BlogCard i={0} />
            <BlogCard i={1} />
          </div>
        </div>
      </div>
      <div className="all reveal">
        <LearnMore>READ ALL INSIGHTS</LearnMore>
      </div>
    </section>
  );
}

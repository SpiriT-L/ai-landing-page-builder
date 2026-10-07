"use client";

import { useState } from "react";

const features = [
  ["01", "ATS intelligence", "See where your CV loses relevance across parsing, keywords, structure and role alignment."],
  ["02", "Impact scoring", "Turn responsibilities into outcome-led statements that hiring teams can scan fast."],
  ["03", "Role matching", "Compare your profile to a target role and surface the highest-leverage gaps."],
  ["04", "Actionable rewrites", "Get precise suggestions for stronger bullets and a sharper seniority signal."],
  ["05", "Signal detection", "Find hidden strengths, weak signals, repetition and missing proof."],
  ["06", "Privacy by design", "A career-data workflow designed around control, clarity and responsible handling."],
];

const plans = [
  ["Free", "$0", "For a quick first pass.", ["1 CV analysis", "ATS score", "Top 5 improvements"]],
  ["Pro", "$19", "For active job seekers.", ["Unlimited analyses", "Role matching", "AI rewrites", "Version history"]],
  ["Career", "$49", "For serious career moves.", ["Everything in Pro", "Multi-role comparison", "Deep skill gap analysis", "Priority processing"]],
];

const faqs = [
  ["What does PrismCV analyze?", "Structure, clarity, ATS compatibility, role alignment, impact language, skills and the evidence behind your experience."],
  ["Is this only for software engineers?", "No. It is optimized for modern tech hiring and works well for engineering, product, design, data, QA, DevOps and other IT roles."],
  ["Will it rewrite my entire CV?", "It provides targeted, explainable rewrites rather than replacing your voice with generic AI copy."],
  ["Can I compare my CV to a job description?", "Yes. Role matching highlights missing keywords, experience gaps and the strongest areas to emphasize."],
  ["Is my CV data private?", "Privacy is a core product requirement. Production retention and deletion policies should be connected before launch."],
];

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  const [open, setOpen] = useState(0);

  return (
    <main>
      <nav className="nav wrap" aria-label="Primary navigation">
        <a className="logo" href="#top" aria-label="PrismCV home"><b>✦</b> prism<span>cv</span></a>
        <div className="links">
          <a href="#features">Features</a><a href="#process">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
        </div>
        <a className="navCta" href="#analyze">Analyze my CV <Arrow /></a>
      </nav>

      <section id="top" className="hero wrap">
        <div>
          <div className="eyebrow"><i /> AI-POWERED CAREER INTELLIGENCE</div>
          <h1>Your CV should work <em>as hard as you do.</em></h1>
          <p className="lead">PrismCV analyzes your resume like a senior tech recruiter, finds the signals holding you back, and shows you exactly what to improve.</p>
          <div className="actions"><a className="btn primary" href="#analyze">Analyze my CV <Arrow /></a><a className="plain" href="#features">Explore the platform ↓</a></div>
          <div className="trust">BUILT FOR MODERN TECH HIRING <span /> ATS · SKILLS · IMPACT · FIT</div>
        </div>
        <div className="visual" aria-label="Illustrative CV analysis dashboard preview">
          <div className="glow" />
          <div className="dashboard">
            <div className="dashTop">CV PERFORMANCE <b>LIVE ANALYSIS</b></div>
            <div className="score"><div className="ring"><strong>87</strong><small>/100</small></div><div><small>OVERALL SCORE</small><h3>Strong profile</h3><p>12 high-impact improvements</p></div></div>
            {[[ "ATS compatibility","94%" ],["Role alignment","86%"],["Impact language","79%"]].map(([label,value])=><div className="metric" key={label}><label>{label}<b>{value}</b></label><span><i style={{width:value}} /></span></div>)}
            <div className="insight"><b>✦</b><div><strong>Top insight</strong><p>Quantify outcomes in 3 recent experience bullets.</p></div><Arrow /></div>
          </div>
          <div className="tag t1">+18% role fit</div><div className="tag t2">ATS ready ✓</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><span>RESUME INTELLIGENCE</span>✦<span>ATS OPTIMIZATION</span>✦<span>ROLE MATCHING</span>✦<span>CAREER SIGNALS</span>✦<span>RESUME INTELLIGENCE</span></div>

      <section id="features" className="section wrap">
        <div className="heading"><div><div className="eyebrow">01 — THE ADVANTAGE</div><h2>Less guessing.<br /><em>More signal.</em></h2></div><p>Built for people who know their craft — and want their CV to communicate it with the same precision.</p></div>
        <div className="grid">{features.map(([number,title,text])=><article className="card" key={number}><small>{number}</small><div className="icon">✦</div><h3>{title}</h3><p>{text}</p><a href="#analyze">Explore <Arrow /></a></article>)}</div>
      </section>

      <section id="process" className="section dark"><div className="wrap">
        <div className="heading"><div><div className="eyebrow">02 — HOW IT WORKS</div><h2>From upload to <em>unfair advantage.</em></h2></div><p>A focused workflow that turns a static document into a clear career action plan.</p></div>
        <div className="steps">{[["01","Upload","Drop your CV in."],["02","Analyze","PrismCV scores the signals recruiters look for."],["03","Improve","Get prioritized fixes and rewrites."],["04","Apply","Ship a stronger application with confidence."]].map(([number,title,text],index)=><div className="step" key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p>{index<3&&<span>→</span>}</div>)}</div>
      </div></section>

      <section id="pricing" className="section wrap">
        <div className="heading center"><div><div className="eyebrow">03 — PRICING</div><h2>Invest in the <em>next move.</em></h2></div><p>Start free. Upgrade when you are ready to take your search seriously.</p></div>
        <div className="prices">{plans.map(([name,price,description,items],index)=><article className={index===1?"price featured":"price"} key={name}>{index===1&&<label>MOST POPULAR</label>}<h3>{name}</h3><strong>{price}<small>{index?" / month":""}</small></strong><p>{description}</p><ul>{(items as string[]).map(item=><li key={item}>✓ {item}</li>)}</ul><a className={index===1?"btn primary":"btn ghost"} href="#analyze">{index===1?"Start Pro":"Get started"} <Arrow /></a></article>)}</div>
      </section>

      <section id="faq" className="section dark"><div className="wrap faq"><div><div className="eyebrow">04 — FAQ</div><h2>Good questions.<br /><em>Clear answers.</em></h2><p>No black-box career advice. Just useful analysis you can act on.</p></div><div>{faqs.map(([question,answer],index)=><div className="faqItem" key={question}><button onClick={()=>setOpen(open===index?-1:index)} aria-expanded={open===index}>{question}<b>{open===index?"−":"+"}</b></button>{open===index&&<p>{answer}</p>}</div>)}</div></div></section>

      <section id="analyze" className="wrap cta"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Make your next application<br /><em>the strongest one yet.</em></h2><p>Upload your CV and see what a sharper signal looks like.</p><a className="btn primary" href="mailto:hello@example.com?subject=CV%20Analysis">Analyze my CV <Arrow /></a><small>Demo CTA — connect this to the production upload flow.</small></div></section>

      <footer className="wrap footer"><a className="logo" href="#top"><b>✦</b> prism<span>cv</span></a><p>AI-powered resume intelligence for ambitious tech professionals.</p><small>© 2026 PrismCV. Concept landing.</small></footer>
    </main>
  );
}

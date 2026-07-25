import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    number: "01",
    title: "Build with discipline",
    text: "A clear group structure, coherent governance, and shared standards help every Mavera venture grow with purpose."
  },
  {
    number: "02",
    title: "Partner with intent",
    text: "We create room for strong operators, aligned investors, and collaborators to build practical, long-term value together."
  },
  {
    number: "03",
    title: "Serve with distinction",
    text: "From enterprise strategy to a cup of fresh coffee, the experience should feel considered, human, and unmistakably Mavera."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__aura" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow hero-animate hero-animate--1">Independent ventures · one shared standard</p>
            <h1 className="hero-animate hero-animate--2">
              One group.<br />
              Distinct <em>experiences.</em><br />
              Shared ambition.
            </h1>
            <p className="home-hero__intro hero-animate hero-animate--3">
              Mavera Business Group brings enterprises, partnerships, and customer experiences under one disciplined brand system built for sustainable growth.
            </p>
            <div className="home-hero__actions hero-animate hero-animate--4">
              <Link className="button" href="/companies">Explore the group <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/about">Our story <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="home-hero__visual hero-animate hero-animate--3" aria-label="Mavera Business Group visual identity">
            <div className="hero-mark" aria-hidden="true">
              <svg viewBox="0 0 420 280" fill="none">
                <path d="M42 36V240L146 112L210 190L274 112L378 240V36" stroke="#D1D2D4" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
                <path d="M42 36V240L146 112L210 190L274 112L378 240V36" stroke="#FCB040" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hero-card hero-card--top">
              <span>Parent company</span>
              <strong>Mavera Business Group</strong>
            </div>
            <div className="hero-card hero-card--bottom">
              <span>Operating brand</span>
              <strong>Mavera Coffee House</strong>
            </div>
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
          </div>
        </div>
        <div className="container home-hero__foot">
          <span>Scroll to discover</span>
          <span className="scroll-line" aria-hidden="true" />
          <span>Addis Ababa · Ethiopia</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-intro">
          <Reveal>
            <p className="eyebrow">A group designed to connect</p>
          </Reveal>
          <Reveal delay={100}>
            <h2>Business architecture with a human pulse.</h2>
            <p>Mavera&apos;s identity combines the letter M, a rising business graph, and a united form — expressing a company built to own, support, and work alongside distinct ventures.</p>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-preview">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The Mavera ecosystem"
              title={<>A strong parent brand.<br />A growing portfolio.</>}
              body="Every business keeps its own customer experience while benefiting from Mavera's strategic direction and shared operating principles."
            />
          </Reveal>

          <div className="portfolio-grid">
            <Reveal className="portfolio-card portfolio-card--group" delay={70}>
              <div className="portfolio-card__head">
                <span>01 · Group</span>
                <span>Corporate platform</span>
              </div>
              <div className="portfolio-card__logo">
                <Image src="/mavera-business-group.svg" alt="Mavera Business Group" width={760} height={300} />
              </div>
              <div className="portfolio-card__body">
                <h3>Mavera Business Group</h3>
                <p>The strategic parent that unites businesses, partners, and growth opportunities under one recognizable standard.</p>
                <Link href="/about">Discover the group <span>↗</span></Link>
              </div>
            </Reveal>

            <Reveal className="portfolio-card portfolio-card--coffee" delay={140}>
              <div className="portfolio-card__head">
                <span>02 · Hospitality</span>
                <span>Member company</span>
              </div>
              <div className="portfolio-card__logo portfolio-card__logo--coffee">
                <Image src="/mavera-coffee-house.svg" alt="Mavera Coffee House" width={760} height={420} />
              </div>
              <div className="portfolio-card__body">
                <h3>Mavera Coffee House</h3>
                <p>A warm coffee experience shaped around the house, cup, M, and coffee bean — serving freshness with a distinct sense of belonging.</p>
                <Link href="/coffee-house">Enter the coffee house <span>↗</span></Link>
              </div>
            </Reveal>

            <Reveal className="portfolio-card portfolio-card--future" delay={210}>
              <div className="portfolio-card__head">
                <span>03 · Growth</span>
                <span>Partnership platform</span>
              </div>
              <div className="future-symbol" aria-hidden="true">
                <span>M</span>
                <i />
                <span>+</span>
              </div>
              <div className="portfolio-card__body">
                <h3>Future ventures</h3>
                <p>A disciplined platform for partnerships, new operating companies, and opportunities that align with the Mavera vision.</p>
                <Link href="/partnerships">Build with Mavera <span>↗</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="How we operate" title="Clarity at the center. Quality at every edge." /></Reveal>
          <div className="principles-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.number} className="principle" delay={index * 80}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="coffee-feature">
        <div className="container coffee-feature__grid">
          <Reveal className="coffee-feature__visual">
            <Image src="/coffee-beans.svg" alt="Abstract illustration of coffee beans in Mavera amber and silver" width={900} height={320} />
            <div className="coffee-stamp">
              <span>Fresh</span>
              <strong>Daily</strong>
              <small>Mavera Coffee House</small>
            </div>
          </Reveal>
          <Reveal className="coffee-feature__content" delay={100}>
            <p className="eyebrow eyebrow--light">Mavera Coffee House</p>
            <h2>More than coffee.<br />A place to belong.</h2>
            <p>The Mavera Coffee House identity brings together a coffee bean, a welcoming house, and a fresh cup — a visual promise of warmth, craft, and connection.</p>
            <Link className="button button--light" href="/coffee-house">Discover the experience <span>↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section statement-section">
        <div className="container statement-section__grid">
          <Reveal><p className="eyebrow">The opportunity</p></Reveal>
          <Reveal delay={100}>
            <blockquote>“The strongest groups do not erase the character of their companies. They give each one the structure to become exceptional.”</blockquote>
            <Link href="/partnerships" className="text-link">Explore partnerships <span>→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Mavera Coffee House",
  description: "Discover Mavera Coffee House — a member of Mavera Business Group built around fresh coffee, warmth, and belonging."
};

const experience = [
  ["Coffee bean", "The center of the mark communicates a clear focus on coffee and the craft behind every cup."],
  ["House", "The roof creates a sense of place: warm, familiar, and designed for people to gather."],
  ["Cup", "The cup form represents fresh coffee prepared and served as an everyday experience."],
  ["Mavera M", "The M connects the coffee house to the wider Mavera Business Group identity."]
];

export default function CoffeeHousePage() {
  return (
    <>
      <section className="coffee-hero">
        <div className="coffee-hero__steam" aria-hidden="true"><i /><i /><i /></div>
        <div className="container coffee-hero__grid">
          <div className="coffee-hero__copy">
            <p className="eyebrow eyebrow--light hero-animate hero-animate--1">Member of Mavera Business Group</p>
            <h1 className="hero-animate hero-animate--2">Fresh coffee.<br />A familiar <em>house.</em></h1>
            <p className="hero-animate hero-animate--3">Mavera Coffee House is designed as a warm, contemporary place where the craft of coffee and the comfort of belonging meet.</p>
            <div className="hero-animate hero-animate--4">
              <Link href="/contact" className="button button--light">Coffee house inquiry <span>↗</span></Link>
            </div>
          </div>
          <div className="coffee-hero__logo hero-animate hero-animate--3">
            <div className="coffee-logo-frame">
              <Image src="/mavera-coffee-house.svg" alt="Mavera Coffee House logo" width={760} height={420} priority />
            </div>
            <span className="coffee-hero__tag">Coffee · warmth · community</span>
          </div>
        </div>
      </section>

      <section className="section coffee-intro">
        <div className="container split-intro">
          <Reveal><p className="eyebrow">The experience</p></Reveal>
          <Reveal delay={100}>
            <h2>A cup made memorable by the place around it.</h2>
            <p>The Coffee House brand brings four simple ideas into one icon: Mavera, coffee, a welcoming house, and a fresh cup. Together they create an identity that feels both recognizable and inviting.</p>
          </Reveal>
        </div>
      </section>

      <section className="section coffee-identity">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Inside the coffee mark" title="Every line has a purpose." body="The logo system makes the business easy to understand before a single word is read." />
          </Reveal>
          <div className="coffee-identity__grid">
            {experience.map(([title, text], index) => (
              <Reveal className="coffee-identity__card" key={title} delay={index * 75}>
                <span>0{index + 1}</span>
                <div className={`coffee-icon coffee-icon--${index + 1}`} aria-hidden="true">
                  {index === 0 && <><i /><i /></>}
                  {index === 1 && <><i /><b /></>}
                  {index === 2 && <><i /><b /></>}
                  {index === 3 && <strong>M</strong>}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="coffee-moment">
        <div className="container coffee-moment__grid">
          <Reveal className="coffee-moment__art">
            <Image src="/coffee-beans.svg" alt="Mavera coffee bean illustration" width={900} height={320} />
          </Reveal>
          <Reveal className="coffee-moment__copy" delay={100}>
            <p className="eyebrow eyebrow--light">The Mavera feeling</p>
            <h2>Warm by nature.<br />Modern by design.</h2>
            <p>The palette pairs Mavera amber with soft silver and generous white space — balancing energy, freshness, and a calm hospitality experience.</p>
          </Reveal>
        </div>
      </section>

      <section className="section coffee-pillars">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Experience principles" title="What guests should notice — and remember." /></Reveal>
          <div className="principles-grid principles-grid--coffee">
            {[
              ["01", "Freshness", "A clear promise of coffee prepared with care and served at its best."],
              ["02", "Comfort", "A welcoming atmosphere that feels easy to enter and enjoyable to stay in."],
              ["03", "Consistency", "A recognizable standard across service, visual identity, and every touchpoint."]
            ].map(([number, title, text], index) => (
              <Reveal className="principle" key={title} delay={index * 80}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-section">
        <div className="container next-section__card next-section__card--coffee">
          <Reveal>
            <p className="eyebrow">Coffee House inquiries</p>
            <h2>Talk to Mavera about locations, collaboration, or the coffee house experience.</h2>
            <Link href="/contact" className="button">Start a conversation <span>↗</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

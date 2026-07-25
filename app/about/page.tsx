import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mavera Business Group, its identity, operating philosophy, and shared standard for enterprise growth."
};

const meanings = [
  { symbol: "M", title: "The Mavera name", text: "The letter M anchors the identity and gives every member company a visible connection to the parent group." },
  { symbol: "↗", title: "Business growth", text: "The rising line expresses active enterprise, momentum, and the ambition to build durable commercial value." },
  { symbol: "∞", title: "United companies", text: "The connected form represents a group that can own different companies and work productively with others." }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mavera"
        title={<>A business group<br />built to <em>connect.</em></>}
        intro="Mavera Business Group is the parent identity for distinct enterprises and collaborations, designed to give each one strategic direction without taking away its character."
        aside={<span className="page-hero__note">Founded on a visual language of enterprise, unity, and forward movement.</span>}
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <Reveal className="about-story__visual">
            <div className="identity-frame">
              <Image src="/mavera-business-group.svg" alt="Mavera Business Group full logo" width={760} height={300} />
              <span>Primary identity</span>
            </div>
          </Reveal>
          <Reveal className="about-story__content" delay={100}>
            <p className="eyebrow">Our role</p>
            <h2>Structure for growth.<br />Space for individuality.</h2>
            <p>The group exists to bring direction, consistency, and shared capability to its businesses. Mavera creates the framework; each company builds the experience that is right for its market and customers.</p>
            <p>That balance is visible in the brand itself: one connected M-shaped system, formed by distinct lines working together.</p>
          </Reveal>
        </div>
      </section>

      <section className="section identity-meaning">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Inside the mark" title="Three ideas. One unmistakable identity." body="The Mavera logo system is not decoration. Its components explain how the group is intended to work." /></Reveal>
          <div className="meaning-grid">
            {meanings.map((item, index) => (
              <Reveal className="meaning-card" key={item.title} delay={index * 90}>
                <div className="meaning-card__symbol">{item.symbol}</div>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container values-section__grid">
          <Reveal>
            <p className="eyebrow">Shared principles</p>
            <h2>What every Mavera company should feel like.</h2>
          </Reveal>
          <div>
            {[
              ["Clear", "Simple decisions, understandable experiences, and an identity people can recognize."],
              ["Ambitious", "A forward-moving attitude grounded in execution rather than empty promises."],
              ["United", "Independent teams strengthened by shared standards, resources, and purpose."],
              ["Human", "Businesses designed around real people, trusted relationships, and everyday usefulness."]
            ].map(([title, text], index) => (
              <Reveal className="value-row" key={title} delay={index * 70}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-section">
        <div className="container next-section__card">
          <Reveal>
            <p className="eyebrow">See the portfolio</p>
            <h2>Meet the companies and platforms shaping the Mavera ecosystem.</h2>
            <Link href="/companies" className="button">Explore companies <span>↗</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

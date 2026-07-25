import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Explore partnership pathways with Mavera Business Group for aligned ventures, operating collaborations, and responsible growth."
};

const pathways = [
  ["Strategic alliances", "Collaborate around a defined market opportunity, capability, or shared commercial objective."],
  ["Operating partnerships", "Build or scale a customer-facing business with clear roles, standards, and long-term alignment."],
  ["Brand incubation", "Develop an early idea into a coherent proposition, identity, and launch-ready operating model."],
  ["Growth opportunities", "Explore responsible expansion paths for existing Mavera companies and future portfolio ventures."]
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with Mavera"
        title={<>Build the next<br /><em>strong venture.</em></>}
        intro="The Mavera identity was created around unity: different companies and collaborators working together through a clear group platform."
        aside={<Link href="/contact" className="text-link">Share an opportunity <span>→</span></Link>}
      />

      <section className="section partnership-intro">
        <div className="container partnership-intro__grid">
          <Reveal>
            <p className="eyebrow">Our partnership view</p>
            <h2>Alignment before acceleration.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead-copy">Strong partnerships begin with a shared understanding of the opportunity, the operating model, and the value each side is prepared to create.</p>
            <p>We prioritize clarity, complementary strengths, practical execution, and a long-term view. The goal is not simply to add another logo to the group, but to build something that deserves to last.</p>
          </Reveal>
        </div>
      </section>

      <section className="section pathways-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Partnership pathways" title="Different ways to create value together." /></Reveal>
          <div className="pathways-grid">
            {pathways.map(([title, text], index) => (
              <Reveal className="pathway-card" key={title} delay={index * 75}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">↗</i>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-process">
        <div className="container">
          <Reveal><SectionHeading eyebrow="A disciplined process" title="From first conversation to a clear decision." light /></Reveal>
          <div className="process-line">
            {[
              ["01", "Discover", "Understand the opportunity, context, and shared ambition."],
              ["02", "Evaluate", "Assess fit, roles, economics, risks, and operating requirements."],
              ["03", "Design", "Define the venture, governance, brand relationship, and roadmap."],
              ["04", "Build", "Move into focused execution with agreed standards and accountability."]
            ].map(([number, title, text], index) => (
              <Reveal className="process-step" key={title} delay={index * 85}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-section__grid">
          <Reveal>
            <p className="eyebrow">What good fit looks like</p>
            <h2>Practical strength on both sides of the table.</h2>
          </Reveal>
          <div>
            {[
              "A clear customer or market need",
              "Complementary capability and accountable leadership",
              "Transparent expectations and decision rights",
              "Commitment to quality, trust, and long-term value"
            ].map((item, index) => (
              <Reveal className="fit-item" key={item} delay={index * 60}>
                <span>0{index + 1}</span><p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-section">
        <div className="container next-section__card">
          <Reveal>
            <p className="eyebrow">Start with the opportunity</p>
            <h2>Tell us what you are building and why Mavera could be the right partner.</h2>
            <Link href="/contact" className="button">Submit an inquiry <span>↗</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Companies",
  description: "Explore the Mavera Business Group ecosystem, including Mavera Coffee House and the group's partnership platform."
};

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our ecosystem"
        title={<>Distinct companies.<br />One <em>standard.</em></>}
        intro="Mavera's portfolio model allows operating companies to stay close to their customers while the parent group supports strategy, identity, and long-term growth."
      />

      <section className="section companies-list">
        <div className="container">
          <Reveal className="company-feature company-feature--group">
            <div className="company-feature__index">01</div>
            <div className="company-feature__visual">
              <Image src="/mavera-business-group.svg" alt="Mavera Business Group" width={760} height={300} />
            </div>
            <div className="company-feature__content">
              <span className="status-pill">Parent company</span>
              <h2>Mavera Business Group</h2>
              <p>The strategic home of the portfolio. The group provides a united platform for operating companies, collaborations, and new ventures that share Mavera&apos;s ambition and standards.</p>
              <Link href="/about" className="text-link">About the group <span>→</span></Link>
            </div>
          </Reveal>

          <Reveal className="company-feature company-feature--coffee" delay={100}>
            <div className="company-feature__index">02</div>
            <div className="company-feature__visual company-feature__visual--coffee">
              <Image src="/mavera-coffee-house.svg" alt="Mavera Coffee House" width={760} height={420} />
            </div>
            <div className="company-feature__content">
              <span className="status-pill">Member company · Coffee & hospitality</span>
              <h2>Mavera Coffee House</h2>
              <p>A welcoming coffee brand built around freshness and belonging. Its identity combines a house, cup, coffee bean, and the Mavera M into one memorable mark.</p>
              <Link href="/coffee-house" className="text-link">Visit the coffee house <span>→</span></Link>
            </div>
          </Reveal>

          <Reveal className="company-feature company-feature--future" delay={180}>
            <div className="company-feature__index">03</div>
            <div className="company-feature__visual">
              <div className="future-company-mark" aria-hidden="true">
                <span>M</span>
                <span>+</span>
              </div>
            </div>
            <div className="company-feature__content">
              <span className="status-pill">Growth platform</span>
              <h2>Partnerships & future ventures</h2>
              <p>The Mavera group identity was designed to work across different companies and collaborations. This platform is reserved for aligned partnerships and future operating brands.</p>
              <Link href="/partnerships" className="text-link">Partner with Mavera <span>→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-model">
        <div className="container portfolio-model__grid">
          <Reveal>
            <p className="eyebrow">Portfolio model</p>
            <h2>Shared where it matters.<br />Independent where it counts.</h2>
          </Reveal>
          <div className="portfolio-model__items">
            {[
              ["Group direction", "A coherent vision, portfolio logic, and decision framework."],
              ["Brand architecture", "A recognizable Mavera system with room for company-specific expression."],
              ["Operating support", "Shared discipline and capability that help teams focus on customers."],
              ["Partnership access", "A clear platform for aligned collaborators and future opportunities."]
            ].map(([title, text], index) => (
              <Reveal className="portfolio-model__item" key={title} delay={index * 65}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

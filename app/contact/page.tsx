import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mavera Business Group about partnerships, business inquiries, and Mavera Coffee House."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Mavera"
        title={<>Let&apos;s begin with<br />a clear <em>conversation.</em></>}
        intro="Share your inquiry with the Mavera team. Use the form for partnership opportunities, group business, media, or Mavera Coffee House."
      />

      <section className="section contact-section">
        <div className="container contact-section__grid">
          <Reveal className="contact-sidebar">
            <p className="eyebrow">Before you send</p>
            <h2>Give us the context that matters.</h2>
            <p>A useful inquiry explains the opportunity, the people involved, the expected outcome, and where Mavera can add value.</p>
            <div className="contact-meta">
              <div><span>Location</span><strong>Addis Ababa, Ethiopia</strong></div>
              <div><span>Response channel</span><strong>The contact details you provide</strong></div>
              <div><span>Company</span><strong>Mavera Business Group</strong></div>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section contact-options">
        <div className="container contact-options__grid">
          {[
            ["Group business", "Corporate, supplier, operating, and general business inquiries."],
            ["Partnerships", "Strategic alliances, future ventures, and collaboration proposals."],
            ["Coffee House", "Coffee house, hospitality, locations, and brand experience inquiries."]
          ].map(([title, text], index) => (
            <Reveal className="contact-option" key={title} delay={index * 70}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

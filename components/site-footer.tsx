import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__statement">
          <p className="eyebrow eyebrow--light">Mavera Business Group</p>
          <h2>Build enduring value.<br />Create memorable experiences.</h2>
        </div>
        <Link href="/contact" className="footer-orbit" aria-label="Contact Mavera Business Group">
          <span>Let&apos;s talk</span>
          <strong>↗</strong>
        </Link>
      </div>

      <div className="container site-footer__grid">
        <div>
          <Logo light />
          <p className="site-footer__copy">A unified business group designed to grow strong enterprises, meaningful partnerships, and customer-first brands.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About the group</Link>
          <Link href="/companies">Our companies</Link>
          <Link href="/coffee-house">Mavera Coffee House</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link href="/partnerships">Partnerships</Link>
          <Link href="/contact">Contact</Link>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {year} Mavera Business Group. All rights reserved.</span>
        <span>Member brands. One standard.</span>
      </div>
    </footer>
  );
}

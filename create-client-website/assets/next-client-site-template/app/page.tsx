import { ArrowRight, CheckCircle2, Mail, MapPin, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{site.hero.eyebrow}</p>
            <h1>{site.hero.title}</h1>
            <p className="lede">{site.hero.summary}</p>
            <div className="actions">
              <a className="button primary" href={site.primaryCta.href}>
                {site.primaryCta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href={site.secondaryCta.href}>
                {site.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Client highlights">
            {site.highlights.map((item) => (
              <div className="highlight" key={item}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container section-heading">
          <p className="eyebrow">Services</p>
          <h2>{site.servicesTitle}</h2>
        </div>
        <div className="container service-grid">
          {site.services.map((service) => (
            <article className="service-card" key={service.title}>
              <Sparkles size={22} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-band" id="about">
        <div className="container section-heading">
          <p className="eyebrow">About</p>
          <h2>Designed around the client's story, proof, and point of view.</h2>
        </div>
      </section>

      <section className="section contact-band" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>{site.contact.title}</h2>
            <p>{site.contact.summary}</p>
          </div>
          <div className="contact-list">
            <a href={`mailto:${site.contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              {site.contact.email}
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {site.contact.location}
            </span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

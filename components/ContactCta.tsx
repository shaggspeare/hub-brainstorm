import { contact, site } from '@/lib/content';
import Socials from './Socials';

export default function ContactCta() {
  return (
    <div className="contactWrap">
      <section className="contact">
        <div>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__meta">{contact.meta}</p>
          <Socials className="contact__socials" />
        </div>
        <div className="btnRow">
          <a href={site.phoneHref} className="btn btn--sm btn--outlinePaper">
            {contact.phone}
          </a>
          <a href={site.navCtaHref} className="btn btn--sm btn--sand">
            {contact.cta}
          </a>
        </div>
      </section>
    </div>
  );
}

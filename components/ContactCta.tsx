import { contact } from '@/lib/content';

export default function ContactCta() {
  return (
    <div className="contactWrap">
      <section className="contact">
        <div>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__meta">{contact.meta}</p>
        </div>
        <div className="btnRow">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="btn btn--sm btn--outlinePaper">
            {contact.phone}
          </a>
          <a href="#" className="btn btn--sm btn--sand">
            {contact.cta}
          </a>
        </div>
      </section>
    </div>
  );
}

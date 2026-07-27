import { Container } from "./Container";
import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} intro={intro} />
      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-sm text-taupe-light">Last updated: {updated}</p>
            <div className="mt-10 space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-display-md text-2xl text-ink">{s.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {s.body.map((p, i) => (
                      <p key={i} className="leading-relaxed text-taupe">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-taupe-light">
              This document is a general template provided for convenience and is
              not legal advice. Please have it reviewed by a qualified professional
              before relying on it.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

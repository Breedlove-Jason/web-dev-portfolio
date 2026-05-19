import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  collaborationSignals,
  contactLinks,
  contactProfile,
} from "@/data/contact";

const terminalLines = [
  "contact channel: open",
  "portfolio status: active build",
  "project demos: coming online",
  "ready for collaboration",
] as const;

export function ContactSection() {
  const emailLink = contactLinks.find((link) => link.name === "Email");
  const resumeLink = contactLinks.find((link) => link.name === "Resume");
  const passiveLinks = contactLinks.filter(
    (link) => link.name !== "Email" && link.name !== "Resume",
  );

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[var(--panel-border)] py-12 sm:py-14"
      aria-labelledby="contact-heading"
    >
      <div id="contact-heading" className="mb-8">
        <SectionHeading
          eyebrow="Contact"
          title="Hire me"
          description={contactProfile.headline}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <GlassCard className="border border-cyan/15 p-6 sm:p-8">
            <p className="mb-4 text-base leading-relaxed text-text-muted">
              {contactProfile.summary}
            </p>

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {emailLink ? (
                <NeonButton href={emailLink.href} variant="primary">
                  {emailLink.label}
                </NeonButton>
              ) : null}
              {resumeLink ? (
                <NeonButton href={resumeLink.href} variant="secondary">
                  {resumeLink.label}
                </NeonButton>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/45 p-4">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan/80">
                  Base location
                </p>
                <p className="text-sm text-text-soft">{contactProfile.location}</p>
              </div>
              <div className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/45 p-4">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-violet/90">
                  Availability
                </p>
                <p className="text-sm text-text-soft">{contactProfile.availability}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-magenta/90">
              Collaboration signals
            </p>
            <ul className="flex flex-wrap gap-2">
              {collaborationSignals.map((signal) => (
                <li key={signal}>
                  <span className="inline-flex items-center rounded-full border border-[var(--panel-border)] bg-bg-deep/50 px-3 py-1.5 text-xs text-text-soft transition-[border-color,box-shadow] duration-200 hover:border-cyan/25 hover:shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_10%,transparent)]">
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="space-y-4">
          <GlassCard className="overflow-hidden p-0">
            <header className="border-b border-[var(--panel-border)] px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan sm:text-xs">
                Contact node
              </p>
            </header>
            <div className="space-y-3 p-4">
              <div className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/60 p-3">
                <ul className="space-y-1.5 font-mono text-xs text-text-muted">
                  {terminalLines.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-cyan" aria-hidden>
                        &gt;
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/50 p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-violet/85">
                  Direct line
                </p>
                <a
                  href={`mailto:${contactProfile.email}`}
                  className="mt-2 inline-block text-sm text-text-soft underline-offset-4 transition-colors hover:text-cyan hover:underline"
                >
                  {contactProfile.email}
                </a>
                <p className="mt-1 text-xs text-text-muted">{contactProfile.name}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              Links
            </p>
            <ul className="space-y-2">
              {passiveLinks.map((link) => (
                <li key={link.name}>
                  {link.disabled ? (
                    <span className="inline-flex w-full cursor-not-allowed items-center justify-between rounded-md border border-[var(--panel-border)] bg-bg-deep/40 px-3 py-2 text-sm text-text-muted/70">
                      <span>{link.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                        queued
                      </span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      className="inline-flex w-full items-center justify-between rounded-md border border-[var(--panel-border)] bg-bg-deep/40 px-3 py-2 text-sm text-text-soft transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                        link
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

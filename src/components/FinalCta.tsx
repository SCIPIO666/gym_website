import FinalCtaShell from "./FinalCtaShell";
import SectionHeader from "./SectionHeader";
import "./FinalCta.css";

/** Static starting price — replaces the Supabase query. */
const FROM_PRICE = 1000;

export default function FinalCta() {
  return (
    <FinalCtaShell>
      <div className="lfc__bg" aria-hidden="true">
        <img src="/images/cta/bg.webp" alt="" loading="lazy" decoding="async" />
      </div>

      <div className="lfc__card">
        <SectionHeader
          tone="light"
          size="clamp(2.8rem, 5.4vw, 4.4rem)"
          eyebrow="Your next step"
          lines={[{ text: "Join the" }, { text: "Legends.", accent: true }]}
          start="top 92%"
          delay={0.3}
        />
        <p className="lfc__text" data-fade>
          Begin your journey from <strong>KES {FROM_PRICE.toLocaleString("en-KE")}</strong> &mdash; or try a single class first. No lock-in.
        </p>
        <div className="lfc__actions" data-fade>
          <span
            className="rc rc--red rc--md"
            style={{ opacity: 0.5, pointerEvents: "none" }}
            title="Demo — not connected"
          >
            <span className="rc__body" style={{ cursor: "not-allowed" }}>
              <span className="rc__content">
                <span className="rc__label"><span className="rc__roll"><span>Join now</span><span>Join now</span></span></span>
              </span>
            </span>
          </span>
          <span
            className="rc rc--ink rc--md"
            style={{ opacity: 0.5, pointerEvents: "none" }}
            title="Demo — not connected"
          >
            <span className="rc__body" style={{ cursor: "not-allowed" }}>
              <span className="rc__content">
                <span className="rc__label"><span className="rc__roll"><span>Try a class</span><span>Try a class</span></span></span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </FinalCtaShell>
  );
}

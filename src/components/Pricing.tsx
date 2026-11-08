import PricingShell from "./PricingShell";
import RectCta from "./RectCta";
import "./Pricing.css";

/**
 * Static plan data — replaces the Supabase query.
 * Edit this array to change what the pricing section shows.
 */
type Plan = { code: string; name: string; price_kes: number; duration_days: number };

const STATIC_PLANS: Plan[] = [
  { code: "day_pass",  name: "Day Pass",     price_kes: 1000,   duration_days: 1   },
  { code: "monthly",   name: "Monthly",      price_kes: 6000,   duration_days: 30  },
  { code: "quarterly", name: "Quarterly",    price_kes: 15000,  duration_days: 90  },
  { code: "biannual",  name: "6 Months",     price_kes: 27000,  duration_days: 180 },
  { code: "annual",    name: "Annual",       price_kes: 48000,  duration_days: 365 },
];

const kes = (n: number) => n.toLocaleString("en-KE");
const perLabel = (days: number) => `KES / ${days === 1 ? "day" : days === 30 ? "month" : days === 90 ? "3 months" : days === 180 ? "6 months" : days === 365 ? "year" : `${days} days`}`;

/** "30" -> "One month". Only describes the length of the plan, never what it includes. */
function validity(days: number): string {
  if (days === 1) return "One day";
  if (days === 30) return "One month";
  if (days === 90) return "Three months";
  if (days === 180) return "Six months";
  if (days === 365) return "One year";
  return `${days} days`;
}

/** Starburst outline for the spinning price badge (viewBox 0 0 100 100). */
const BURST = (() => {
  const spikes = 20;
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? 49 : 40;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
})();

export default function Pricing() {
  const plans = STATIC_PLANS;

  // "Best value" = lowest price per day among multi-day plans; "save" compares it with paying monthly.
  const monthly = plans.find((p) => p.duration_days === 30);
  const multi = plans.filter((p) => p.duration_days > 1);
  const best = multi.length
    ? multi.reduce((a, b) => (b.price_kes / b.duration_days < a.price_kes / a.duration_days ? b : a))
    : null;
  const saving = best && monthly ? monthly.price_kes * Math.round(best.duration_days / 30) - best.price_kes : 0;

  // Starting price shown in the spinning badge.
  const cheapest = plans.length ? plans.reduce((a, b) => (b.price_kes < a.price_kes ? b : a)) : null;

  return (
    <PricingShell>
      {/* ---------- video header + side card + spinning starting price ---------- */}
      <div className="lpr__hero">
        <div className="lpr__media" aria-hidden="true">
          <video className="lpr__video" autoPlay muted loop playsInline preload="metadata" poster="/videos/pricing-poster.jpg">
            <source src="/videos/pricing.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="lpr__card">
          <h2 className="lpr__title">
            <span className="lpr__mask">
              <span data-rise>Pricing</span>
            </span>
          </h2>
          <p className="lpr__text" data-fade>
            Pay for a day or commit for a year. Straight prices, no joining fees, no lock-in.
          </p>
          <div data-fade>
            <RectCta href="#plans" label="See the plans" tone="red" appear="none" />
          </div>
        </div>

        {cheapest && (
          <p className="lpr__burst" aria-label={`From KES ${kes(cheapest.price_kes)} ${perLabel(cheapest.duration_days).replace("KES / ", "per ")}`}>
            <svg className="lpr__burstShape" viewBox="0 0 100 100" aria-hidden="true">
              <polygon points={BURST} />
            </svg>
            <span className="lpr__burstText" aria-hidden="true">
              <span className="lpr__from">From</span>
              <strong>{kes(cheapest.price_kes)}</strong>
              <span className="lpr__per">{perLabel(cheapest.duration_days)}</span>
            </span>
          </p>
        )}
      </div>

      {/* ---------- plan cards (the "membership" half) ---------- */}
      <div className="lpr__plans" id="plans">
        <div className="lpr__inner">
          <div className="lpr__head">
            <span className="eyebrow" data-fade2>Straight pricing</span>
            <h3 className="lpr__big">
              <span className="lpr__mask"><span data-rise2>No lock-in.</span></span>
              <span className="lpr__mask"><span data-rise2 className="lpr__redtxt">No joining fees.</span></span>
            </h3>
          </div>

          <ul className="lpr__grid">
            {plans.map((p, i) => {
              const isBest = best?.code === p.code && saving > 0;
              const perDay = p.duration_days > 1 ? Math.round(p.price_kes / p.duration_days) : null;
              return (
                <li key={p.code} className="lpr__item" data-card>
                  <article className={`lpr__plan${isBest ? " lpr__plan--best" : ""}`}>
                    <span className="lpr__idx">[{i + 1}]</span>
                    <h4 className="lpr__name">{p.name}</h4>
                    {isBest && <span className="lpr__flag">Best value &middot; save KES {kes(saving)}</span>}
                    <ul className="lpr__feats">
                      <li>{validity(p.duration_days)}</li>
                      {perDay && <li>About KES {kes(perDay)} a day</li>}
                      <li>No joining fee</li>
                      <li>No lock-in</li>
                    </ul>
                    <div className="lpr__foot">
                      <p className="lpr__price">
                        <strong>{kes(p.price_kes)}</strong>
                        <span>{perLabel(p.duration_days)}</span>
                      </p>
                      <span
                        className="lpr__buy"
                        style={{ opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" }}
                        title="Demo — not connected"
                        aria-label={`${p.duration_days === 1 ? "Get a pass" : "Join"}: ${p.name} (demo)`}
                      >
                        <span>{p.duration_days === 1 ? "Get pass" : "Join"}</span>
                        <i aria-hidden="true">[+]</i>
                      </span>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="lpr__note" data-fade2>
            Not sure yet? Come try a session. No lock-in.
          </p>
        </div>
      </div>
    </PricingShell>
  );
}

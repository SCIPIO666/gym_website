import "./Timetable.css";
import type { CSSProperties } from "react";
import { DAY_SHORT, fmtTime, nairobiToday, type ClassRow } from "@/lib/timetable";
import { classTone } from "./classTone";
import TimetableShell from "./TimetableShell";
import RectCta from "./RectCta";

/**
 * Static timetable data — replaces the Supabase query.
 * Edit this array to change what appears in the showcase.
 *
 * weekdays: 1=Mon … 7=Sun (ISO weekday)
 * starts_at / ends_at: "HH:MM:SS" (24-hour)
 */
const STATIC_CLASSES: ClassRow[] = [
  /* ── Early morning ─────────────────────────────── */
  {
    id: "open-gym-early",
    name: "Open Gym",
    description: "Self-directed training. A coach is always on the floor.",
    coach_name: null,
    weekdays: [1, 2, 3, 4, 5, 6],
    starts_at: "05:30:00",
    ends_at: "07:00:00",
    capacity: null,
    bookable: false,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "morning-strength",
    name: "Strength",
    description: "Barbell-focused progressive overload. Squat, bench, deadlift and accessories.",
    coach_name: "Coach Kiptoo",
    weekdays: [1, 3, 5],
    starts_at: "06:00:00",
    ends_at: "07:00:00",
    capacity: 12,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "morning-yoga",
    name: "Yoga",
    description: "Vinyasa flow to build mobility and start the day grounded.",
    coach_name: "Coach Amina",
    weekdays: [2, 4, 6],
    starts_at: "06:00:00",
    ends_at: "07:00:00",
    capacity: 16,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },

  /* ── Mid-morning ───────────────────────────────── */
  {
    id: "hiit-am",
    name: "HIIT",
    description: "30-minute high-intensity intervals. Kettlebells, ropes and bodyweight.",
    coach_name: "Coach Otieno",
    weekdays: [1, 2, 3, 4, 5],
    starts_at: "07:30:00",
    ends_at: "08:15:00",
    capacity: 18,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "conditioning-am",
    name: "Conditioning",
    description: "Mixed-modal conditioning — rowing, assault bike, and functional movement.",
    coach_name: "Coach Otieno",
    weekdays: [6],
    starts_at: "08:00:00",
    ends_at: "09:00:00",
    capacity: 16,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "crossfit-am",
    name: "CrossFit",
    description: "Programmed WOD. Skill work, strength piece, and a metcon.",
    coach_name: "Coach Kiptoo",
    weekdays: [1, 2, 3, 4, 5],
    starts_at: "09:00:00",
    ends_at: "10:00:00",
    capacity: 14,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "ladies-strength",
    name: "Strength",
    description: "Women-only lifting session. All levels welcome.",
    coach_name: "Coach Amina",
    weekdays: [1, 3, 5],
    starts_at: "09:00:00",
    ends_at: "10:00:00",
    capacity: 10,
    bookable: true,
    ladies_only: true,
    is_active: true,
  },

  /* ── Midday open gym ───────────────────────────── */
  {
    id: "open-gym-mid",
    name: "Open Gym",
    description: "Self-directed training. A coach is always on the floor.",
    coach_name: null,
    weekdays: [1, 2, 3, 4, 5, 6],
    starts_at: "10:00:00",
    ends_at: "16:00:00",
    capacity: null,
    bookable: false,
    ladies_only: false,
    is_active: true,
  },

  /* ── Afternoon / evening ───────────────────────── */
  {
    id: "crossfit-pm",
    name: "CrossFit",
    description: "Programmed WOD. Skill work, strength piece, and a metcon.",
    coach_name: "Coach Kiptoo",
    weekdays: [1, 2, 3, 4, 5],
    starts_at: "16:30:00",
    ends_at: "17:30:00",
    capacity: 14,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "evening-strength",
    name: "Strength",
    description: "Barbell-focused progressive overload. Squat, bench, deadlift and accessories.",
    coach_name: "Coach Kiptoo",
    weekdays: [1, 3, 5],
    starts_at: "17:30:00",
    ends_at: "18:30:00",
    capacity: 12,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "evening-hiit",
    name: "HIIT",
    description: "30-minute high-intensity intervals. Kettlebells, ropes and bodyweight.",
    coach_name: "Coach Otieno",
    weekdays: [2, 4],
    starts_at: "17:30:00",
    ends_at: "18:15:00",
    capacity: 18,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "evening-yoga",
    name: "Yoga",
    description: "Slow-flow and stretch. Unwind and recover.",
    coach_name: "Coach Amina",
    weekdays: [2, 4],
    starts_at: "18:30:00",
    ends_at: "19:15:00",
    capacity: 16,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "evening-conditioning",
    name: "Conditioning",
    description: "Mixed-modal conditioning — rowing, assault bike, and functional movement.",
    coach_name: "Coach Otieno",
    weekdays: [1, 3, 5],
    starts_at: "18:30:00",
    ends_at: "19:30:00",
    capacity: 16,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },

  /* ── Late evening open gym ─────────────────────── */
  {
    id: "open-gym-late",
    name: "Open Gym",
    description: "Self-directed training. A coach is always on the floor.",
    coach_name: null,
    weekdays: [1, 2, 3, 4, 5],
    starts_at: "19:30:00",
    ends_at: "22:00:00",
    capacity: null,
    bookable: false,
    ladies_only: false,
    is_active: true,
  },

  /* ── Sunday ────────────────────────────────────── */
  {
    id: "sunday-yoga",
    name: "Yoga",
    description: "Gentle Sunday flow. All levels.",
    coach_name: "Coach Amina",
    weekdays: [7],
    starts_at: "08:00:00",
    ends_at: "09:00:00",
    capacity: 20,
    bookable: true,
    ladies_only: false,
    is_active: true,
  },
  {
    id: "sunday-open",
    name: "Open Gym",
    description: "Self-directed training.",
    coach_name: null,
    weekdays: [7],
    starts_at: "09:00:00",
    ends_at: "16:00:00",
    capacity: null,
    bookable: false,
    ladies_only: false,
    is_active: true,
  },
];

/** Static try-a-class price */
const TRY_PRICE = 1000;

type Slot = { start: string; end: string; cells: ClassRow[][] };

function buildSlots(classes: ClassRow[]): Slot[] {
  const slots = new Map<string, Slot>();
  for (const c of classes) {
    const key = `${c.starts_at}|${c.ends_at}`;
    if (!slots.has(key)) slots.set(key, { start: c.starts_at, end: c.ends_at, cells: Array.from({ length: 7 }, () => []) });
    for (const d of c.weekdays) slots.get(key)!.cells[d - 1]?.push(c);
  }
  return [...slots.values()].sort((a, b) => a.start.localeCompare(b.start) || a.end.localeCompare(b.end));
}

const tone = (name: string) => ({ "--tone": classTone(name) }) as CSSProperties;

/** Index 0..6 (Mon..Sun) of today in Nairobi */
function todayColumn(): number {
  const jsDay = new Date(`${nairobiToday()}T00:00:00Z`).getUTCDay(); // 0 = Sun
  return (jsDay + 6) % 7;
}

export default function Timetable() {
  const classes = STATIC_CLASSES;
  const slots = buildSlots(classes);
  const legend = [...new Set(classes.map((c) => c.name))];
  const today = todayColumn();

  return (
    <TimetableShell>
      <div className="ltt__stage">
        <div className="ltt__bg" aria-hidden="true">
          <img src="/images/timetable/bg.webp" alt="" loading="lazy" decoding="async" />
        </div>

        <div className="ltt__card">
          <span className="eyebrow" data-fade>How you can train here</span>
          <h2 className="ltt__title">
            <span className="ltt__mask">
              <span data-rise>
                The weekly <span className="ltt__red">timetable</span>
              </span>
            </span>
          </h2>
          <p className="ltt__text" data-fade>
            Open gym all day. Coached classes at set times. Drop into any session that fits you.
          </p>
          <div data-fade>
            <RectCta href="#timetable" label="See the timetable" tone="red" appear="none" />
          </div>
        </div>
      </div>

      {/* the colour-coded table */}
      <div className="ltt__panel" id="timetable">
        <div className="ltt__sheet">
          {slots.length > 0 && (
            <>
              <p className="ltt__hint">Swipe to see the full week &rarr;</p>
              <div className="ltt__scroll" role="region" aria-label="Weekly class timetable, scrollable" tabIndex={0}>
                <table className="ltt__table">
                  <caption className="ltt__sr">Weekly class timetable, 24-hour times</caption>
                  <thead>
                    <tr>
                      <th scope="col" className="ltt__time">Time</th>
                      {DAY_SHORT.map((d, i) => (
                        <th
                          scope="col"
                          key={d}
                          className={i === today ? "ltt__today" : undefined}
                          aria-current={i === today ? "date" : undefined}
                        >
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slots.map((slot) => (
                      <tr key={`${slot.start}-${slot.end}`} data-row>
                        <th scope="row" className="ltt__time">
                          {fmtTime(slot.start)}&ndash;{fmtTime(slot.end)}
                        </th>
                        {slot.cells.map((cell, i) =>
                          cell.length === 0 ? (
                            <td key={i} className={`ltt__cell ltt__cell--empty${i === today ? " ltt__cell--today" : ""}`} aria-label="No class">
                              &mdash;
                            </td>
                          ) : (
                            <td key={i} className={`ltt__cell${i === today ? " ltt__cell--today" : ""}`}>
                              {cell.map((c) => (
                                <div key={c.id} className="ltt__class" style={tone(c.name)}>
                                  <span className="ltt__name">{c.name}</span>
                                  {(c.coach_name || !c.bookable) && (
                                    <span className="ltt__coach">{c.coach_name ?? "Just turn up"}</span>
                                  )}
                                  {c.ladies_only && <span className="ltt__tag">Ladies only</span>}
                                </div>
                              ))}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="ltt__legend" aria-label="Class colours">
                {legend.map((n) => (
                  <li key={n} style={tone(n)}>{n}</li>
                ))}
              </ul>
              <p className="ltt__note">Times are 24-hour. Ladies Only sessions are tagged in red.</p>
            </>
          )}

          <div className="ltt__try">
            <div>
              <strong>New here? Try one class.</strong>
              <span>
                No membership needed. Book a single coached class for KES {TRY_PRICE.toLocaleString("en-KE")}.
              </span>
            </div>
            <span className="rc rc--red rc--md" style={{ opacity: 0.5, pointerEvents: "none" }} title="Demo — not connected">
              <span className="rc__body" style={{ cursor: "not-allowed" }}>
                <span className="rc__content">
                  <span className="rc__label"><span className="rc__roll"><span>Try a class</span><span>Try a class</span></span></span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </TimetableShell>
  );
}

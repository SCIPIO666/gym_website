/**
 * Coach data — one place to edit.
 * Image files live in public/images/coaches/.
 */
export type Coach = {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  blurb: string;
  expertise: string[];
  style: string[];
};

export const COACHES: Coach[] = [
  {
    id: "head-strength",
    name: "Brian Kiptoo",
    role: "Head Strength Coach",
    image: "/images/coaches/male1.webp",
    alt: "Portrait of Brian Kiptoo, Head Strength Coach",
    blurb: "Builds programmes on progressive overload and clean technique. 8 years coaching competitive and recreational lifters across East Africa.",
    expertise: ["Strength training", "Powerlifting", "Olympic lifting", "Programming"],
    style: ["Detail oriented", "Direct", "Evidence based"],
  },
  {
    id: "on-ramp",
    name: "Amina Salim",
    role: "On-Ramp Lead & Yoga",
    image: "/images/coaches/female.webp",
    alt: "Portrait of Amina Salim, On-Ramp Lead",
    blurb: "Takes complete beginners from nervous to confident in their first weeks. Certified yoga instructor and mobility specialist.",
    expertise: ["Beginner onboarding", "Yoga & mobility", "Lifting technique", "Confidence building"],
    style: ["Supportive", "Patient", "Encouraging"],
  },
  {
    id: "conditioning",
    name: "Dennis Otieno",
    role: "Conditioning Coach",
    image: "/images/coaches/male2.webp",
    alt: "Portrait of Dennis Otieno, Conditioning Coach",
    blurb: "Turns hard sessions into measurable fitness gains. Former track athlete with a background in sports science.",
    expertise: ["HIIT", "Endurance", "Fat loss", "Group conditioning"],
    style: ["High energy", "Results oriented", "Data driven"],
  },
  {
    id: "personal-trainer",
    name: "James Mwangi",
    role: "Personal Trainer",
    image: "/images/coaches/male3.webp",
    alt: "Portrait of James Mwangi, Personal Trainer",
    blurb: "One-to-one coaching built around your goal and your schedule. Specialises in transformations and accountability.",
    expertise: ["1-to-1 coaching", "Muscle gain", "Weight loss", "Accountability"],
    style: ["Motivating", "Even keeled", "Consistent"],
  },
];

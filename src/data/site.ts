export type Service = {
  id: string;
  name: string;
  minutes: number;
  price: number;
  blurb: string;
};

export const services: Service[] = [
  {
    id: "shea-massage",
    name: "Shea butter body massage",
    minutes: 60,
    price: 25000,
    blurb:
      "Long, slow strokes with warm, unrefined shea. Made for tight shoulders and tired backs.",
  },
  {
    id: "hot-stone",
    name: "Hot stone massage",
    minutes: 75,
    price: 32000,
    blurb:
      "Smooth basalt stones carry heat deep into the muscles that desks and traffic keep clenched.",
  },
  {
    id: "zobo-facial",
    name: "Zobo glow facial",
    minutes: 50,
    price: 20000,
    blurb:
      "A hibiscus-based cleanse, gentle exfoliation and a moringa mask. Leaves skin clear and calm.",
  },
  {
    id: "scalp-ritual",
    name: "Moringa scalp ritual",
    minutes: 40,
    price: 15000,
    blurb:
      "A warm oil treatment with slow scalp massage, neck and shoulders included.",
  },
  {
    id: "black-soap-polish",
    name: "Black soap body polish",
    minutes: 45,
    price: 18000,
    blurb:
      "African black soap and fine sugar buff away dryness, followed by a shea butter finish.",
  },
  {
    id: "foot-soak",
    name: "Foot soak and pedicure",
    minutes: 60,
    price: 12000,
    blurb:
      "A warm herbal soak, careful nail and heel care, and a short foot massage.",
  },
];

export const packages = [
  {
    id: "full-day",
    name: "Full day at Ilé",
    price: 65000,
    length: "Around 4 hours",
    forWho: "for one",
    includes: [
      "Shea butter body massage",
      "Zobo glow facial",
      "Black soap body polish",
      "Foot soak and pedicure",
      "Tea and a fruit plate between treatments",
    ],
    featured: true,
  },
  {
    id: "half-day",
    name: "Half-day reset",
    price: 34000,
    length: "About 2 hours",
    forWho: "for one",
    includes: ["Shea butter body massage", "Moringa scalp ritual", "Tea"],
    featured: false,
  },
  {
    id: "couples",
    name: "Couples afternoon",
    price: 78000,
    length: "About 2 hours 15 minutes",
    forWho: "for two",
    includes: [
      "Two hot stone massages in one room",
      "Two foot soaks",
      "Tea for two",
    ],
    featured: false,
  },
] as const;

export const ingredients = [
  {
    name: "Shea butter",
    colour: "#ead9a0",
    note: "Pressed from the nut of the shea tree, which grows across Nigeria's savanna belt. Rich, soft and slow to fade from skin.",
  },
  {
    name: "Moringa",
    colour: "#6aa84f",
    note: "Leaves dried and ground for masks and scalp oils. Light on the skin and full of green.",
  },
  {
    name: "Hibiscus",
    colour: "#b0245a",
    note: "The flower behind zobo. We steep it for drinks and use it in facials for its gentle tang.",
  },
  {
    name: "African black soap",
    colour: "#3a2a1c",
    note: "Traditionally made from plantain skins, palm oil and cocoa pods. Cleans deeply without stripping.",
  },
  {
    name: "Palm kernel oil",
    colour: "#e07a1f",
    note: "A warm, nourishing oil used in our hair and scalp treatments.",
  },
] as const;

export const visitSteps = [
  {
    title: "Arrive",
    text: "Leave your shoes and your phone. Start with a chilled cup of zobo and a warm foot wash.",
  },
  {
    title: "Talk",
    text: "Two minutes with your therapist about where you hold tension, your skin, and anything to avoid.",
  },
  {
    title: "Treatment",
    text: "Your session runs in a quiet room, with the pressure and temperature set the way you like it.",
  },
  {
    title: "Rest",
    text: "Stay for tea in the quiet room for as long as you want before you head back out.",
  },
] as const;

export const slots = [
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "16:00",
  "17:30",
] as const;

export const naira = (n: number) => `₦${n.toLocaleString("en-US")}`;

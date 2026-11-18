export type EventItem = {
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
};

export const wedding = {
  couple: {
    bride: {
      firstName: "D/O Imran Sadiq",
      fullName: "D/O Imran Sadiq",
      parents: "Daughter of Mr. & Mrs. Imran Sadiq",
    },
    groom: {
      firstName: "Mazhar Hussain",
      fullName: "Mazhar Hussain",
      parents: "Son of Mr. Waqar Ahmad",
    },
    hashtag: "#MazharFamily",
  },
  dateISO: "2026-11-27T14:00:00+05:00",
  displayDate: "Sunday, 27 November 2026",
  displayTime: "2:00 PM onwards",
  venue: {
    name: "Sangam Arena Marquee",
    address: "Chakwal Road, Talagang, Punjab, Pakistan",
    mapUrl: "https://maps.app.goo.gl/NgYgJQVrEy1PNHkS6",
  },
  inviteLine: "Together with their families",
  quote:
    "And of all the places I could be, I just want to be here with you.",
  
  events: [
    {
      name: "Walima",
      date: "27 November 2026",
      time: "2:00 PM",
      venue: "Sangam Arena Marquee",
      address: "Chakwal Road, Talagang, Punjab, Pakistan",
    },
  ] as EventItem[],
  guests: [
    "Sadiq Hussain",
    "Sabir Hussain",
    "Altaf Hussain",
    "Zameer Hussain",
    "Mumtaz Hussain",
    "Azhar Hussain",
  ],
  music: {
    src: "",
    title: "Walima Celebration",
  },
  theme: "ivory-gold",
};

export type Wedding = typeof wedding;

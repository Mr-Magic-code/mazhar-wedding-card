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
      firstName: "D/O ABC",
      fullName: "D/O ABC",
      parents: "Daughter of Mr. & Mrs. ABC",
    },
    groom: {
      firstName: "Mazhar Hussain",
      fullName: "Mazhar Hussain",
      parents: "Son of Mr. & Mrs. Hussain",
    },
    hashtag: "#MazharFamily",
  },
  dateISO: "2026-11-26T13:00:00+05:00",
  displayDate: "Sunday, 27 November 2026",
  displayTime: "1:00 PM onwards",
  venue: {
    name: "Talagang HALL",
    address: "Talagang HALL",
    mapUrl: "https://maps.app.goo.gl/AN7mfAuSxszK22yx9",
  },
  inviteLine: "Together with their families",
  quote:
    "And of all the places I could be, I just want to be here with you.",
  
  events: [
    {
      name: "Walima",
      date: "27 November 2026",
      time: "1:00 PM",
      venue: "Talagang HALL",
      address: "Talagang HALL",
    },
  ] as EventItem[],
  guests: [
    "Saqib Riaz",
    "Ali Raza Riaz",
    "Sohail khaliq",
    "Azhar Rafique ",
    "Faizan Hayyat",
  ],
  music: {
    src: "",
    title: "Festive Celebration",
  },
  theme: "ivory-gold",
};

export type Wedding = typeof wedding;

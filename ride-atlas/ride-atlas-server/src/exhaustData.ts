export interface Exhaust {
  id: number;
  brand: string;
  model: string;
  price: string;
  decibels: string;
  legality: {
    region: string;
    status: string;
  }[];
  crazyFactor: string;
  image: string;
}

export const exhausts: Exhaust[] = [
  {
    id: 1,
    brand: "Akrapovič",
    model: "Evolution Line (Titanium) Full System",
    price: "$3,500 - $5,000",
    decibels: "105 dB (Race Core)",
    legality: [
      { region: "EU", status: "Race Only (Non-Homologated)" },
      { region: "USA", status: "Closed Course Competition Only" },
      { region: "India", status: "Illegal on Public Roads (BS6 rules)" }
    ],
    crazyFactor: "The Gold Standard. Used by MotoGP champions. Pure engineering art.",
    image: "/images/akrapovic.png"
  },
  {
    id: 2,
    brand: "SC-Project",
    model: "S1-GP Titanium Exhaust",
    price: "$1,200 - $2,000",
    decibels: "112 dB (Ear-splitting)",
    legality: [
      { region: "Global", status: "Generally Illegal for Street Use" }
    ],
    crazyFactor: "Raw, aggressive, and incredibly loud. It spits blue flames on every downshift.",
    image: "/images/flames.png"
  },
  {
    id: 3,
    brand: "Austin Racing",
    model: "RS22 Underbelly Full System",
    price: "$2,500+",
    decibels: "115 dB (Nuclear)",
    legality: [
      { region: "UK", status: "Track Use Only" },
      { region: "Australia", status: "Not ADR Compliant" }
    ],
    crazyFactor: "Custom-built in the UK. Known for the most extreme 'pop and bang' tunes.",
    image: "/images/titanium.png"
  }
];

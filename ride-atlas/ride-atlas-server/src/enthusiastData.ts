export interface Superbike {
  id: number;
  name: string;
  count: number;
  stats: {
    engine: string;
    power: string;
    topSpeed: string;
    torque: string;
  };
  image: string;
}

export const superbikes: Superbike[] = [
  {
    id: 1,
    name: "Suzuki Hayabusa",
    count: 45,
    stats: {
      engine: "1340cc, Liquid-cooled, 4-stroke",
      power: "190 HP @ 9,700 rpm",
      topSpeed: "299 km/h (Electronically limited)",
      torque: "150 Nm @ 7,000 rpm"
    },
    image: "/images/hayabusa.png"
  },
  {
    id: 2,
    name: "Kawasaki Ninja H2",
    count: 12,
    stats: {
      engine: "998cc, Supercharged, Liquid-cooled",
      power: "310 HP @ 14,000 rpm",
      topSpeed: "400 km/h (H2R Track)",
      torque: "165 Nm @ 12,500 rpm"
    },
    image: "/images/kawasaki_h2.png"
  },
  {
    id: 3,
    name: "BMW S1000RR",
    count: 38,
    stats: {
      engine: "999cc, Water/oil-cooled 4-cylinder",
      power: "205 HP @ 13,000 rpm",
      topSpeed: "303 km/h",
      torque: "113 Nm @ 11,000 rpm"
    },
    image: "/images/s1000rr.png"
  },
  {
    id: 4,
    name: "Ducati Panigale V4",
    count: 15,
    stats: {
      engine: "1103cc, 90° V4, Desmodromic",
      power: "214 HP @ 13,000 rpm",
      topSpeed: "299 km/h",
      torque: "124 Nm @ 10,000 rpm"
    },
    image: "/images/panigale.png"
  },
  {
    id: 5,
    name: "Honda Africa Twin",
    count: 22,
    stats: {
      engine: "1084cc, Liquid-cooled 4-stroke",
      power: "101 HP @ 7,500 rpm",
      topSpeed: "199 km/h",
      torque: "105 Nm @ 6,250 rpm"
    },
    image: "/images/africa_twin.png"
  },
  {
    id: 6,
    name: "Triumph Rocket 3",
    count: 8,
    stats: {
      engine: "2458cc, Liquid-cooled, Inline 3",
      power: "165 HP @ 6,000 rpm",
      topSpeed: "225 km/h",
      torque: "221 Nm @ 4,000 rpm"
    },
    image: "/images/rocket3.png"
  },
  {
    id: 7,
    name: "Indian Scout Bobber",
    count: 18,
    stats: {
      engine: "1133cc, Liquid-cooled V-Twin",
      power: "100 HP @ 8,100 rpm",
      topSpeed: "190 km/h",
      torque: "97.7 Nm @ 6,000 rpm"
    },
    image: "/images/indian_scout.png"
  },
  {
    id: 8,
    name: "Yamaha YZF-R1",
    count: 28,
    stats: {
      engine: "998cc, Liquid-cooled, Inline 4",
      power: "200 HP @ 13,500 rpm",
      topSpeed: "299 km/h",
      torque: "112 Nm @ 11,500 rpm"
    },
    image: "/images/hayabusa.png" // Placeholder until R1 image generated if needed
  }
];

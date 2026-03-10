import { Apartment, ApartmentsByFloor } from '@/app/types';

export function getApartmentById(id: string): Apartment | undefined {
  const allApartments = getAllApartments();
  return allApartments.find((apt: Apartment) => apt.id === id);
}

export function getAllApartments(): Apartment[] {
  return Object.values(apartmentsByFloor).flat() as Apartment[];
}

export const apartmentsByFloor: ApartmentsByFloor = {
  0: [
    // {
    //   id: "garsonjera-stan-2",
    //   name: "2. Sprat stan 2",
    //   floor: 0,
    //   type: "Garsonjera",
    //   orientation: "Sever",
    //   image3D: "/img/apartments/prizemlje-stan-2.png",
    //   floorPlan: "/img/apartments/prizemlje-stan-2-pozicija.jpg",
    //   rooms: [
    //     { number: 1, name: "Predsoblje", size: "1.89" },
    //     { number: 2, name: "Kupatilo", size: "3.60" },
    //     { number: 3, name: "Kuhinja", size: "4.83" },
    //     { number: 4, name: "Trpezarija i kombinovana soba", size: "17.34" }
    //   ],
    //   totalArea: "27.66"
    // },
    {
      id: "jednosoban-stan-3",
      name: "Prizemlje stan 03",
      floor: 0,
      type: "Jednosoban",
      orientation: "Severoistok",
      image3D: "/img/apartments/prizemlje-stan-3.jpg",
      floorPlan: "/img/apartments/prizemlje-stan-3-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "2.75" },
        { number: 2, name: "Kupatilo", size: "3.99" },
        { number: 3, name: "Kuhinja", size: "4.75" },
        { number: 4, name: "Trpezarija i kombinovana soba", size: "21.81" }
      ],
      totalArea: "33.30"
    },
    {
      id: "trosoban-stan-4",
      name: "Prizemlje stan 04",
      floor: 0,
      type: "Trosoban",
      orientation: "Istok",
      image3D: "/img/apartments/prizemlje-stan-4.jpg",
      floorPlan: "/img/apartments/prizemlje-stan-4-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "5.44" },
        { number: 2, name: "WC - Kupatilo 1", size: "3.65" },
        { number: 3, name: "Kuhinja", size: "6.15" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "32.69" },
        { number: 6, name: "Degaž + garderoba", size: "4.45" },
        { number: 7, name: "Soba", size: "10.43" },
        { number: 8, name: "Kupatilo 2", size: "5.86" },
        { number: 9, name: "Soba", size: "10.90" },
        { number: 10, name: "Perionica", size: "2.16" }
      ],
      totalArea: "81.73"
    }
  ],

  1: [
    {
      id: "trosoban-stan-6",
      name: "1. Sprat stan 06",
      floor: 1,
      type: "Trosoban",
      orientation: "Jugozapad",
      image3D: "/img/apartments/prvi-stan-6.jpg",
      floorPlan: "/img/apartments/prvi-stan-6-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "4.73" },
        { number: 2, name: "Kupatilo 1", size: "4.35" },
        { number: 3, name: "Kuhinja", size: "7.33" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "24.20" },
        { number: 6, name: "Hodnik", size: "4.01" },
        { number: 7, name: "Soba", size: "13.98" },
        { number: 8, name: "Degažman", size: "2.47" },
        { number: 9, name: "Soba", size: "10.20" },
        { number: 10, name: "Kupatilo 2", size: "3.41" },
        { number: 11, name: "Lođa", size: "4.64" }
      ],
      totalArea: "79.32"
    },
    {
      id: "trosoban-stan-7",
      name: "1. Sprat stan 07",
      floor: 1,
      type: "Trosoban",
      orientation: "Severozapad",
      image3D: "/img/apartments/prvi-stan-7.jpg",
      floorPlan: "/img/apartments/prvi-stan-7-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "11.16" },
        { number: 2, name: "WC - Kupatilo 1", size: "3.16" },
        { number: 3, name: "Kuhinja", size: "6.64" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "24.71" },
        { number: 6, name: "Degažman", size: "2.81" },
        { number: 7, name: "Soba", size: "10.45" },
        { number: 8, name: "Soba", size: "9.14" },
        { number: 9, name: "Kupatilo 2", size: "3.82" },
        { number: 10, name: "Perionica", size: "1.74" },
        { number: 11, name: "Lođa", size: "5.27" }
      ],
      totalArea: "78.90"
    },
    {
      id: "trosoban-stan-9",
      name: "1. Sprat stan 09",
      floor: 1,
      type: "Trosoban",
      orientation: "Istok",
      image3D: "/img/apartments/prvi-stan-9.jpg",
      floorPlan: "/img/apartments/prvi-stan-9-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "5.36" },
        { number: 2, name: "WC + Perionica", size: "2.86" },
        { number: 3, name: "Kupatilo", size: "5.11" },
        { number: 4, name: "Kuhinja", size: "6.55" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "23.52" },
        { number: 7, name: "Degažman", size: "3.60" },
        { number: 8, name: "Soba", size: "12.06" },
        { number: 9, name: "Soba", size: "10.07" },
        { number: 10, name: "Lođa", size: "6.08" }
      ],
      totalArea: "75.21"
    }
  ],

  2: [
    {
      id: "trosoban-stan-11",
      name: "2. Sprat stan 11",
      floor: 2,
      type: "Trosoban",
      orientation: "Severozapad",
      image3D: "/img/apartments/drugi-stan-11.jpg",
      floorPlan: "/img/apartments/drugi-stan-11-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "10.08" },
        { number: 2, name: "WC", size: "1.64" },
        { number: 3, name: "Perionica", size: "0.89" },
        { number: 4, name: "Kuhinja", size: "5.86" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "29.73" },
        { number: 7, name: "Degažman", size: "2.97" },
        { number: 8, name: "Soba", size: "10.52" },
        { number: 9, name: "Soba", size: "8.70" },
        { number: 10, name: "Kupatilo", size: "3.82" },
        { number: 11, name: "Polu-lođa", size: "2.74" }
      ],
      totalArea: "76.95"
    },
    {
      id: "trosoban-stan-13",
      name: "2. Sprat stan 13",
      floor: 2,
      type: "Trosoban",
      orientation: "Istok",
      image3D: "/img/apartments/drugi-stan-13.jpg",
      floorPlan: "/img/apartments/drugi-stan-13-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "5.36" },
        { number: 2, name: "WC + Perionica", size: "2.86" },
        { number: 3, name: "Kupatilo", size: "5.11" },
        { number: 4, name: "Kuhinja", size: "6.55" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "23.52" },
        { number: 7, name: "Degažman", size: "3.60" },
        { number: 8, name: "Soba", size: "12.06" },
        { number: 9, name: "Soba", size: "10.07" },
        { number: 10, name: "Lođa", size: "6.08" }
      ],
      totalArea: "75.21"
    }
  ],

  3: [
    {
      id: "cetvorosoban-stan-14",
      name: "3. Sprat stan 14",
      floor: 3,
      type: "Četvorosoban",
      orientation: "Jugozapad",
      image3D: "/img/apartments/treci-stan-14.jpg",
      floorPlan: "/img/apartments/treci-stan-14-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "4.73" },
        { number: 2, name: "Kupatilo 1", size: "4.35" },
        { number: 3, name: "Kuhinja", size: "7.33" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "27.99" },
        { number: 6, name: "Degažman", size: "7.88" },
        { number: 7, name: "Soba", size: "8.65" },
        { number: 8, name: "Soba", size: "9.94" },
        { number: 9, name: "Soba", size: "12.77" },
        { number: 10, name: "Kupatilo 2", size: "4.90" },
        { number: 11, name: "Polu-lođa", size: "2.53" }
      ],
      totalArea: "91.07"
    },
    {
      id: "cetvorosoban-stan-15",
      name: "3. Sprat stan 15",
      floor: 3,
      type: "Četvorosoban",
      orientation: "Severozapad",
      image3D: "/img/apartments/treci-stan-15.jpg",
      floorPlan: "/img/apartments/treci-stan-15-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "10.08" },
        { number: 2, name: "WC", size: "1.64" },
        { number: 3, name: "Perionica", size: "0.89" },
        { number: 4, name: "Kuhinja", size: "5.86" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "29.73" },
        { number: 7, name: "Degažman", size: "2.97" },
        { number: 8, name: "Soba", size: "10.45" },
        { number: 9, name: "Soba", size: "9.14" },
        { number: 10, name: "Soba", size: "8.70" },
        { number: 11, name: "Kupatilo", size: "3.82" },
        { number: 12, name: "Polu-lođa", size: "2.74" }
      ],
      totalArea: "86.02"
    }
  ],

  4: [
    {
      id: "dvosoban-stan-18",
      name: "4. Sprat stan 18",
      floor: 4,
      type: "Dvosoban",
      orientation: "Jugozapad",
      image3D: "/img/apartments/cetvrti-stan-18.jpg",
      floorPlan: "/img/apartments/cetvrti-stan-18-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "4.73" },
        { number: 2, name: "Kupatilo", size: "4.35" },
        { number: 3, name: "Kuhinja", size: "7.33" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "30.39" },
        { number: 6, name: "Degažman i garderoba", size: "6.45" },
        { number: 8, name: "Soba", size: "13.11" },
        { number: 9, name: "Polu-lođa", size: "2.53" }
      ],
      totalArea: "68.88"
    },
    {
      id: "cetvorosoban-stan-19",
      name: "4. Sprat stan 19",
      floor: 4,
      type: "Četvorosoban",
      orientation: "Severozapad",
      image3D: "/img/apartments/cetvrti-stan-19.jpg",
      floorPlan: "/img/apartments/cetvrti-stan-19-pozicija.jpg",
      rooms: [
        { number: "1", name: "Predsoblje 1", size: "5.98" },
        { number: "1A", name: "Predsoblje 2", size: "7.87" },
        { number: 2, name: "WC", size: "1.78" },
        { number: 3, name: "Perionica", size: "2.16" },
        { number: 4, name: "Kuhinja", size: "5.69" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "35.15" },
        { number: 7, name: "Degažman", size: "2.81" },
        { number: 8, name: "Garderoba", size: "1.74" },
        { number: 9, name: "Soba", size: "10.45" },
        { number: 10, name: "Soba", size: "9.14" },
        { number: 11, name: "Kupatilo 1", size: "3.82" },
        { number: 12, name: "Degažman", size: "3.61" },
        { number: 13, name: "Soba", size: "14.78" },
        { number: 14, name: "Kupatilo 2", size: "3.61" },
        { number: 15, name: "Polu-lođa", size: "2.74" }
      ],
      totalArea: "111.33"
    }
  ],

  5: [
    {
      id: "dvosoban-stan-22",
      name: "5. Sprat stan 22",
      floor: 5,
      type: "Dvosoban",
      orientation: "Jugozapad",
      image3D: "/img/apartments/peti-stan-22.jpg",
      floorPlan: "/img/apartments/peti-stan-22-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "4.73" },
        { number: 2, name: "Kupatilo 1", size: "4.35" },
        { number: 3, name: "Kuhinja", size: "7.33" },
        { number: 4, name: "Trpezarija i dnevna soba", size: "30.39" },
        { number: 6, name: "Degažman i garderoba", size: "6.45" },
        { number: 8, name: "Soba", size: "13.11" },
        { number: 9, name: "Polu-lođa", size: "2.53" }
      ],
      totalArea: "68.88"
    },
    {
      id: "trosoban-stan-25",
      name: "5. Sprat stan 25",
      floor: 5,
      type: "Trosoban",
      orientation: "Istok",
      image3D: "/img/apartments/peti-stan-25.jpg",
      floorPlan: "/img/apartments/peti-stan-25-pozicija.jpg",
      rooms: [
        { number: 1, name: "Predsoblje", size: "4.76" },
        { number: 2, name: "WC + Perionica", size: "3.19" },
        { number: 3, name: "Kupatilo", size: "5.11" },
        { number: 4, name: "Kuhinja", size: "5.44" },
        { number: 5, name: "Trpezarija i dnevna soba", size: "27.73" },
        { number: 7, name: "Degažman", size: "4.87" },
        { number: 8, name: "Soba", size: "12.06" },
        { number: 9, name: "Soba", size: "10.98" },
        { number: 10, name: "Polu-lođa", size: "6.08" }
      ],
      totalArea: "80.24"
    }
  ]
};

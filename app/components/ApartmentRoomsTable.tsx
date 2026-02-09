'use client';

import type { FC } from 'react';
import {
  Bath,
  DoorOpen,
  ChefHat,
  Sofa,
  Bed,
  UtensilsCrossed,
  Home,
  ShowerHead,
  Shirt,
} from 'lucide-react';
import { Apartment } from '@/app/types';

type ApartmentRoomsTableProps = {
  apartment: Apartment;
  iconSize?: string;
};

export const ApartmentRoomsTable: FC<ApartmentRoomsTableProps> = ({
                                                                    apartment,
                                                                    iconSize = 'w-4 h-4',
                                                                  }) => {
  const getRoomIcon = (roomName: string) => {
    const name = roomName.toLowerCase();
    const iconClass = `text-[#4a9d8e] ${iconSize}`;

    if (name.includes('perionica')) return <ShowerHead className={iconClass} />;
    if (name.includes('wc') || name.includes('kupatilo')) return <Bath className={iconClass} />;
    if (name.includes('predsoblje') || name.includes('hodnik') || name.includes('degaž'))
      return <DoorOpen className={iconClass} />;
    if (name.includes('kuhinja')) return <ChefHat className={iconClass} />;
    if (name.includes('trpezarija')) return <UtensilsCrossed className={iconClass} />;
    if (name.includes('dnevna')) return <Sofa className={iconClass} />;
    if (name.includes('soba')) return <Bed className={iconClass} />;
    if (name.includes('garderoba')) return <Shirt className={iconClass} />;

    return <Home className={iconClass} />;
  };

  return (
    <div className="flex flex-col gap-2">
      {apartment.rooms.map((room, index) => (
        <div
          key={`${room.number}-${index}`}
          className="flex items-center justify-between px-2 sm:px-6 py-4 border-b border-accent-light/30 last:border-0 hover:bg-cream/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div>{getRoomIcon(room.name)}</div>
            <span className="text-primary">{room.name}</span>
          </div>
          <div className="text-accent font-medium">{room.size} m²</div>
        </div>
      ))}
    </div>
  );
};

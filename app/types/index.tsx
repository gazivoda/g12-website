export type ApartmentRoom = {
  number: number | string
  name: string
  size: string
}

export type Apartment = {
  id: string
  name: string
  floor: number
  type:
    | 'Garsonjera'
    | 'Jednosoban'
    | 'Dvosoban'
    | 'Trosoban'
    | 'Četvorosoban'
  orientation: string
  image3D: string
  floorPlan: string
  rooms: ApartmentRoom[]
  totalArea: string
}

export type ApartmentsByFloor = {
  [floor: number]: Apartment[]
}

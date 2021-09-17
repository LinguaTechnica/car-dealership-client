import { VehicleColor } from '../common/vehicle-colors.enum';

export class Vehicle {
  id: string;
  manufacturer: string;
  model: string;
  year: number;
  color: VehicleColor;
  image?: string;
  price?: string;
  available?: boolean;
}

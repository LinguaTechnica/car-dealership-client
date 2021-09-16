import { VehicleColor } from '../common/vehicle-colors.enum';

export class Vehicle {
  id: string;
  name: string;
  models?: Vehicle[];
  year: number;
  color: VehicleColor;
  image?: string;
}

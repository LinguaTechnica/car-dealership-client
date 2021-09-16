import { VehicleColor } from '../common/vehicle-colors.enum';

export class Vehicle {
  name: string;
  models?: Vehicle[];
  year: number;
  color: VehicleColor;
}

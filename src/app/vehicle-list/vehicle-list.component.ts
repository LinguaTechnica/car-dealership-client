import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  @Input() public vehicles: Vehicle[];

  constructor() { }

  ngOnInit(): void {
  }

}

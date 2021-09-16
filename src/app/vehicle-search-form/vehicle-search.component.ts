import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {
  public searchForm: FormGroup;
  @Output() public searchEvent: EventEmitter<[]> = new EventEmitter();

  private alertMessage: string | null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: ['', [ Validators.required, Validators.minLength(2) ]]
    });
  }

  search(): void {
    if (!this.searchForm.valid) {
      this.alertMessage = 'Enter a search query!';
    } else {
      this.searchEvent.emit([]);
    }
  }

  getAlert(): string {
    return this.alertMessage;
  }

}

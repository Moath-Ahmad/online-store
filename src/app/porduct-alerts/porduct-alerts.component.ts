import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-porduct-alerts',
  templateUrl: './porduct-alerts.component.html',
  styleUrls: ['./porduct-alerts.component.css']
})
export class PorductAlertsComponent {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }


}

import { Component, Input, OnInit } from '@angular/core';
import { yerba } from '../yerba.interface';
@Component({
  selector: 'app-selectedyerba',
  templateUrl: './selectedyerba.component.html',
  styleUrls: ['./selectedyerba.component.css']
})
export class SelectedyerbaComponent implements OnInit {

  constructor() { }
  @Input() yerbas:yerba={}as any;

  
  ngOnInit(): void {
  }
}

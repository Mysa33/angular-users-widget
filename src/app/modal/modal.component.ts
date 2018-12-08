import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
 
  @Input() show;
  @Input() data;
  private _display:boolean;
  private _data:any;
  

  ngOnInit() {
  }

}

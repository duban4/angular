import { Component,OnInit,Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  
  constructor(public modal:ModalComponent) { }
  open(){

  }
  
  ngOnInit(): void {
  }

}

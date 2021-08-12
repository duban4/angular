import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  close = '';

  ngOnInit(): void {
  }

  constructor(private abrirmodal: NgbModal) {}

  open(contenido: any){
   
    this.abrirmodal.open(contenido).result.then((result)=>{
      
    }, (reason)=>{
      this.close =`dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  

}

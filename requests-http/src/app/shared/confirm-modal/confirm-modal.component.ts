import { Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Confirmar';

  // Subject = objeto que vai emitir valores que conseguimos escutar através de Observable
  confirmResult: Subject<boolean>; //vai retornar true caso usuário clique na confirmação e false caso não queira fazer nada

  constructor(private bsModalRef : BsModalRef) { }

  ngOnInit(): void {
    // instância e se já quiser que emita valor no início cria behavior Subject.
    // nesse caso só estamos interessados quando emitir novo valor
    this.confirmResult = new Subject;
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    // pega confirmResult e emite novo valor através do next
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}

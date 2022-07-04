import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { distinctUntilChanged } from 'rxjs/operators';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  danger = 'danger',
  success = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.danger);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.success, 3000);
  }

  // refatora pra retornar valor do Subject como Observable pro componente escutar e tomar decisão de acordo com botão que foi clicado
  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent)
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}

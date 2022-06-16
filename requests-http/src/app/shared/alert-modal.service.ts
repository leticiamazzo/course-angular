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
}

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NguModalService {
  // id: number;
  openModal = false;
  isOpened: Subject<Vam> = new Subject<Vam>();

  constructor() { }

  open(m: any) {
    this.openModal = true;
    this.isOpened.next({ type: this.openModal, id: m });
    // console.log(this.openModal);
  }

  close(index: any) {
    this.openModal = false;
    this.isOpened.next({ type: this.openModal, id: index });
    // console.log(this.openModal);
  }

  confirm(m: number, message?: string) {
    return new Promise<boolean>(resolve => {
      return resolve(window.confirm(message || 'Is it OK?'));
    });
  }


}

export interface Vam {
  type: boolean;
  id: number;
}

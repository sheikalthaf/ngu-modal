import { NguModal } from './ngu-modal.interface';
import { Subscription } from 'rxjs/Subscription';
import { NguModalService } from './ngu-modal.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-modal',
  template: `<div #modal class="modal" [class.in]="openModals"><div class="main"><div class="innerdiv"><div #modalInner class="innerMain"><ng-content></ng-content></div></div><div class="overlay" (click)="backdrop()"></div></div></div>`,
  styles: [`
    .in {
      display: table !important;
    }

    .modal.anim .main .overlay {
      opacity: 0.48;
    }
    .modal.anim .main .innerdiv .innerMain {
      transform: translateY(0px);
      opacity: 1;
    }

    .modal {
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: none;
    }
    .modal .main {
      display: flex;
      position: absolute;
      z-index: 1000;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    .modal .main .innerdiv {
      z-index: 1000;
      position: static;
      pointer-events: auto;
      top: 0;
      left: 0;
      transition: transform 0.3s ease;
    }
    .modal .main .innerdiv .innerMain {
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
      display: block;
      padding: 24px;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
      max-width: 90vw;
      max-height: 90vh;
      margin: auto;
      outline: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      color: rgba(0, 0, 0, 0.87);
      transform: translateY(60px);
      opacity: 0;
      transition: 0.3s ease all;
    }
    .modal .main .overlay {
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      pointer-events: auto;
      transition: 0.3s ease all;
    }
  `]
})
export class NguModalComponent implements OnInit, OnDestroy {
  modalDiv2: any;
  modalDiv1: any;
  overlay: any;
  modalDiv: any;
  modalSub: Subscription;
  openModals: any;
  @Input() MIndex: NguModal;
  @Output() beforestart: EventEmitter<any> = new EventEmitter();
  @Output() afterstart: EventEmitter<any> = new EventEmitter();
  @Output() beforeend: EventEmitter<any> = new EventEmitter();
  @Output() afterend: EventEmitter<any> = new EventEmitter();

  @ViewChild('modal', { read: ElementRef }) modalMain1: ElementRef;
  @ViewChild('modalInner', { read: ElementRef }) modalInner: ElementRef;

  constructor(
    private modal: NguModalService,
    private el: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.modalDiv = this.modalMain1.nativeElement;
    // this.modalDiv1 = this.el.nativeElement.querySelectorAll('.modalTxt')[0];
    // this.modalDiv2 = this.el.nativeElement.querySelectorAll('.modalTxt1')[0];
    // this.overlay = this.el.nativeElement.querySelectorAll('.overlay')[0];

    this.MIndex.backdrop = typeof this.MIndex.backdrop !== 'undefined' ? this.MIndex.backdrop : true;
    // this.renderer.listen(this.modalDiv2, 'click', (event) => {
    //   if (event.target) {
    //     console.log('target 1');
    //   }
    // });
    // this.renderer.listen(this.modalDiv1, 'click', (event) => {
    //   if (event.target) {
    //     console.log('target 2');
    //   }
    // });


    const id = this.generateID();
    this.renderer.setElementClass(this.modalDiv, id, true);
    const styleItem = document.createElement('style');
    if (this.MIndex.width && !this.MIndex.width.fixed) {
      let data = '';
      data += this.MIndex.width.xs ? `@media (max-width:767px){.${id} .innerdiv {width: ${this.MIndex.width.xs}}}` : '';
      data += this.MIndex.width.sm ? `@media (min-width:768px){.${id} .innerdiv {width: ${this.MIndex.width.sm}}}` : '';
      data += this.MIndex.width.md ? `@media (min-width:992px){.${id} .innerdiv {width: ${this.MIndex.width.md}}}` : '';
      data += this.MIndex.width.lg ? `@media (min-width:1200px){.${id} .innerdiv {width: ${this.MIndex.width.lg}}}` : '';

      styleItem.innerHTML = data;
    } else {
      const width = this.MIndex.width ? (this.MIndex.width.fixed || '310px') : '310px';
      styleItem.innerHTML = `.${id} .innerdiv {width: ${width}; min-width: ${width};}`;
    }
    this.modalDiv.appendChild(styleItem);

    this.modalSub = this.modal.isOpened.subscribe(val => {
      // tslint:disable-next-line:no-unused-expression
      val.id === this.MIndex.id && this.toggleModal(val.type); val.id === 0 && this.close();
    });
  }

  ngOnDestroy() {
    this.modalSub.unsubscribe();
  }


  private generateID() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return `ngumodal${text}`;
  }

  close() {
    this.modal.close(this.MIndex.id);
  }

  backdrop() {
    // tslint:disable-next-line:no-unused-expression
    this.MIndex.backdrop && this.close();

  }


  private toggleModal(val: boolean) {
    const body = document.body.style;
    // const overlay = this.el.nativeElement.querySelectorAll('.overlay')[0];
    const modal = this.modalDiv;
    if (!val) {
      this.beforeend.emit();
      this.renderer.setElementClass(modal, 'anim', false);
      setTimeout(() => {
        body.cssText = '';
        this.openModals = val;
        this.afterend.emit();
      }, 290);
    } else {
      this.beforestart.emit();
      this.openModals = val;
      this.renderer.setElementStyle(this.modalInner.nativeElement, 'transfrom', 'scale(.2) translate3d(2241px, 1400px, 0)');
      setTimeout(() => {
        body.cssText = 'overflow: hidden; padding-right: 19px;';
        // this.renderer.setElementStyle(this.modalInner.nativeElement, 'transfrom', '');
        this.renderer.setElementClass(modal, 'anim', true);
      }, 2);
      this.afterstart.emit();
    }
  }


  confirm(m: number, message?: string) {
    return new Promise<boolean>(resolve => {
      return resolve(window.confirm(message || 'Is it OK?'));
    });
  }
}

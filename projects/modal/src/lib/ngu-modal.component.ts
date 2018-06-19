// import { fadeAnimation, viewAnimation } from './ngu-modal-animation';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer,
  ViewChild
} from '@angular/core';
import { NguModalConfig } from './ngu-modal';
import {
  NguModalFadeAnimation,
  NguModalViewAnimation
} from './ngu-modal-animation';

@Component({
  selector: 'ngu-modal',
  templateUrl: 'ngu-modal.component.html',
  styleUrls: ['ngu-modal.component.scss'],
  animations: [NguModalFadeAnimation, NguModalViewAnimation]
})
// tslint:disable-next-line:component-class-suffix
export class NguModal implements OnInit, AfterViewInit {
  afterViewCalled = false;
  afterView = true;
  modalDiv: any;
  openModals: any;
  @Input() MIndex = new NguModalConfig();
  @Output() beforestart: EventEmitter<any> = new EventEmitter();
  @Output() afterstart: EventEmitter<any> = new EventEmitter();
  @Output() beforeend: EventEmitter<any> = new EventEmitter();
  @Output() afterend: EventEmitter<any> = new EventEmitter();

  @ViewChild('modal') modalMain1: ElementRef;
  @ViewChild('modalInner') modalInner: ElementRef;
  isOpened = 0;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.modalDiv = this.modalMain1.nativeElement;

    this.MIndex.backdrop =
      this.MIndex && typeof this.MIndex.backdrop !== 'undefined'
        ? this.MIndex.backdrop
        : true;

    const id = this.generateID();
    this.renderer.setElementClass(this.modalDiv, id, true);
    const styleItem = document.createElement('style');
    if (this.MIndex.width && !this.MIndex.width.fixed) {
      let data = '';
      data += this.MIndex.width.xs
        ? `@media (max-width:767px){.${id} .innerdiv {width: ${
            this.MIndex.width.xs
          }}}`
        : '';
      data += this.MIndex.width.sm
        ? `@media (min-width:768px){.${id} .innerdiv {width: ${
            this.MIndex.width.sm
          }}}`
        : '';
      data += this.MIndex.width.md
        ? `@media (min-width:992px){.${id} .innerdiv {width: ${
            this.MIndex.width.md
          }}}`
        : '';
      data += this.MIndex.width.lg
        ? `@media (min-width:1200px){.${id} .innerdiv {width: ${
            this.MIndex.width.lg
          }}}`
        : '';

      styleItem.innerHTML = data;
    } else {
      // const width = this.MIndex.width
      //   ? this.MIndex.width.fixed || '310px'
      //   : '310px';
      // styleItem.innerHTML = `.${id} .innerdiv {width: ${width}; min-width: ${width};}`;
    }
    this.modalDiv.appendChild(styleItem);
  }

  ngAfterViewInit() {}

  open() {
    setTimeout(() => {
      this.isOpened = 1;
    }, 10);
  }

  close() {
    this.isOpened = 0;
  }

  // private toggleModal(val: boolean) {
  //   const body = document.body.style;
  //   const modal = this.modalDiv;
  //   if (!val) {
  //     this.beforeend.emit();
  //     this.renderer.setElementClass(modal, 'anim', false);
  //     setTimeout(() => {
  //       body.cssText = '';
  //       this.openModals = val;
  //       this.afterend.emit();
  //     }, 290);
  //   } else {
  //     this.beforestart.emit();
  //     this.openModals = val;
  //     this.renderer.setElementStyle(
  //       this.modalInner.nativeElement,
  //       'transfrom',
  //       'scale(.2) translate3d(2241px, 1400px, 0)'
  //     );
  //     setTimeout(() => {
  //       body.cssText = 'overflow: hidden; padding-right: 19px;';
  //       this.renderer.setElementClass(modal, 'anim', true);
  //     }, 2);
  //     this.afterstart.emit();
  //   }
  // }

  // confirm(m: number, message?: string) {
  //   return new Promise<boolean>(resolve => {
  //     return resolve(window.confirm(message || 'Is it OK?'));
  //   });
  // }

  private generateID() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return `ngumodal${text}`;
  }
}

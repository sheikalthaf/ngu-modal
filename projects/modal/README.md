# ngu-modal

It is a angular modal similar to bootstrap modal

## Installation

`npm i @ngu/modal --save`

## sample

include `NguModalModule` in your module

```javascript
import { NguModalModule } from '@ngu/modal';

@NgModule({
imports: [
    NguModalModule
],
})
export class AppModule { }
```

Then use in your component:

```javascript
import { Component } from '@angular/core';
import { NguModal, NguModalService } from '@ngu/modal';

@Component({
  selector: 'sample',
  template: `
    <button (click)="openModal()">open modal</button>
    <ngu-modal [MIndex]="sampleText">
        ...

        ...

        <button (click)="closeModal()">open modal</button>
    </ngu-modal>
  `,
})
export class SampleComponent implements OnInit {

  public sampleText: NguModal;

  constructor(
      private: modal: NguModalService
  ) {}

  ngOnInit() {
    this.sampleText = {
      id: 'sampleTextID'
    }
  }

  openModal() {
      this.modal.open(this.sampleText.id);
  }

  closeModal() {
      this.modal.close(this.sampleText.id);
  }


}
```

## NguModal Details

```javascript
export interface NguModal {
  id: any;
  backdrop?: boolean;
  width?: Width;
}

export interface Width {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  fixed?: string;
}
```

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `width` | Object | optional | **xs** - mobile, **sm** - tablet, **md** - desktop, **lg** - large desktops `or` **fixed** - fixed width |
| `id` | any | yes | It is used to identify the modal and it mandatory |
| `backdrop` | boolean | optional | It is used to control the backdrop click event. By default it is `true` |

## Getstarted guide

### Single Modal

```javascript
import { Component } from '@angular/core';
import { NguModal, NguModalService } from '@ngu/modal';

@Component({
  selector: 'sample',
  template: `
    <button (click)="openModal()">open modal</button>
    <ngu-modal
        [MIndex]="sampleText"
        (beforestart)="beforestartModal()"
        (afterstart)="afterstartModal()"
        (beforeend)="beforeendModal()"
        (afterend)="afterendModal()">

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button (click)="closeModal()">open modal</button>
    </ngu-modal>
  `,
})
export class SampleComponent implements OnInit {

  public sampleText: NguModal;

  constructor(
      private: modal: NguModalService
  ) {}

  ngOnInit() {
    this.sampleText = {
      id: 'sampleTextID'
    }
  }

  openModal() {
      this.modal.open(this.sampleText.id);
  }

  closeModal() {
      this.modal.close(this.sampleText.id);
  }

  beforestartModal() {
      console.log('beforestartModal');
  }

  afterstartModal() {
      console.log('afterstartModal');
  }

  beforeendModal() {
      console.log('beforeendModal');
  }

  afterendModal() {
      console.log('afterendModal');
  }

}
```

### Multiple Modal

```javascript
import { Component } from '@angular/core';
import { NguModal, NguModalService } from '@ngu/modal';

@Component({
  selector: 'sample',
  template: `
    <button (click)="openModalOne()">open modal One</button>
    <ngu-modal
        [MIndex]="sampleTextOne"
        (beforestart)="beforestartModalOne()"
        (afterstart)="afterstartModalOne()"
        (beforeend)="beforeendModalOne()"
        (afterend)="afterendModalOne()">

        <h3>Modal One</h3>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button (click)="closeModalOne()">open modal</button>
    </ngu-modal>

    <button (click)="openModalTwo()">open modal Two</button>
    <ngu-modal
        [MIndex]="sampleTextTwo"
        (beforestart)="beforestartModalTwo()"
        (afterstart)="afterstartModalTwo()"
        (beforeend)="beforeendModalTwo()"
        (afterend)="afterendModalTwo()">

        <h3>Modal Two</h3>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button (click)="closeModalTwo()">open modal</button>
    </ngu-modal>
  `,
})
export class SampleComponent implements OnInit {

  public sampleTextOne: NguModal;
  public sampleTextTwo: NguModal;

  constructor(
      private: modal: NguModalService
  ) {}

  ngOnInit() {
    this.sampleTextOne = {
      id: 'sampleTextIDOne'
    }

    this.sampleTextTwo = {
      id: 'sampleTextIDTwo'
    }
  }

  // modal One
  openModalOne() {
      this.modal.open(this.sampleTextOne.id);
  }

  closeModalOne() {
      this.modal.close(this.sampleTextOne.id);
  }

  beforestartModalOne() {
      console.log('beforestartModalOne');
  }

  afterstartModalOne() {
      console.log('afterstartModalOne');
  }

  beforeendModalOne() {
      console.log('beforeendModalOne');
  }

  afterendModalOne() {
      console.log('afterendModalOne');
  }

  // modal Two
  openModalTwo() {
      this.modal.open(this.sampleTextTwo.id);
  }

  closeModalTwo() {
      this.modal.close(this.sampleTextTwo.id);
  }


  beforestartModalTwo() {
      console.log('beforestartModalTwo');
  }

  afterstartModalTwo() {
      console.log('afterstartModalTwo');
  }

  beforeendModalTwo() {
      console.log('beforeendModalTwo');
  }

  afterendModalTwo() {
      console.log('afterendModalTwo');
  }

}
```
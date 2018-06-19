import { NgModule } from '@angular/core';
import { NguModal } from './ngu-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [NguModal],
  declarations: [NguModal],
  providers: []
})
export class NguModalModule {}

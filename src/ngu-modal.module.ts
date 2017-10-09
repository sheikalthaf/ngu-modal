import { NguModalService } from './ngu-modal/ngu-modal.service';
import { NgModule } from '@angular/core';

import { NguModalComponent } from './ngu-modal/ngu-modal.component';

@NgModule({
    imports: [],
    exports: [NguModalComponent],
    declarations: [NguModalComponent],
    providers: [NguModalService],
})
export class NguModalModule { }

import { NguModalService } from './ngu-modal/ngu-modal.service';
import { NgModule } from '@angular/core';
import { NguModalComponent } from './ngu-modal/ngu-modal.component';
var NguModalModule = /** @class */ (function () {
    function NguModalModule() {
    }
    NguModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [NguModalComponent],
                    declarations: [NguModalComponent],
                    providers: [NguModalService],
                },] },
    ];
    /** @nocollapse */
    NguModalModule.ctorParameters = function () { return []; };
    return NguModalModule;
}());
export { NguModalModule };
//# sourceMappingURL=ngu-modal.module.js.map
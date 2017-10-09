import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var NguModalService = /** @class */ (function () {
    function NguModalService() {
        // id: number;
        this.openModal = false;
        this.isOpened = new Subject();
    }
    NguModalService.prototype.open = function (m) {
        this.openModal = true;
        this.isOpened.next({ type: this.openModal, id: m });
        // console.log(this.openModal);
    };
    NguModalService.prototype.close = function (index) {
        this.openModal = false;
        this.isOpened.next({ type: this.openModal, id: index });
        // console.log(this.openModal);
    };
    NguModalService.prototype.confirm = function (m, message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    NguModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NguModalService.ctorParameters = function () { return []; };
    return NguModalService;
}());
export { NguModalService };
//# sourceMappingURL=ngu-modal.service.js.map
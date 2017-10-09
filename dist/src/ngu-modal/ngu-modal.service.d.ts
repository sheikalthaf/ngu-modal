import { Subject } from 'rxjs/Subject';
export declare class NguModalService {
    openModal: boolean;
    isOpened: Subject<Vam>;
    constructor();
    open(m: any): void;
    close(index: any): void;
    confirm(m: number, message?: string): Promise<boolean>;
}
export interface Vam {
    type: boolean;
    id: number;
}

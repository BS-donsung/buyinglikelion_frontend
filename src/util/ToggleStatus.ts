
export class ToggleStatus {

    private _state : boolean;
    get active() : boolean {
        return this._state;
    }
    constructor( init : boolean ) {
        this._state = init;
    }

    toggle() : void {
        this._state = !this._state;
    }

    set( isActive : boolean ) : void {
        this._state = isActive;
    }
}
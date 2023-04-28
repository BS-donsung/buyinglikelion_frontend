import {Optional} from "@yahvz01/monad";
import {Message} from "@/util/ModalMessage";
export interface SingletonModalInterface {

    get isEmpty : boolean
    get active : boolean

    activate( message : Message | null) : void
    deactivate() : void

    closeModal( nextOpenMils : number) : void
    closeModalWithClear() : void

    clearMessageQueue() : number

}
export class SingletonModalService implements SingletonModalInterface {

    messageQueue : Array<Message> = []
    private _active : boolean = false;

    get isEmpty(): boolean { return (this.messageQueue.length == 0); }
    get active() : boolean { return this._active }
    activate( message : Message | null = null ) : void {
        if(message) {
            this.messageQueue.push(message)
        }
        if(this.isEmpty) {
            this._active = false;
        } else {
            this._active = true;
        }
    }

    getCurrentMessage() : Optional<Message> {
        if(this.isEmpty) {
            return Optional.empty()
        } else {
            return Optional.of(this.messageQueue[0])
        }
    }

    deactivate() {
        this._active = false;
        this.messageQueue.shift()
    }

    closeModalWithClear() : void {
        this.deactivate()
        this.clearMessageQueue()
    }

    closeModal( nextOpenMils : number = 3000 ) {
        this.deactivate()
        this.messageQueue.shift()
        window.setTimeout(() => {
            if(!this.isEmpty) {
                this.activate()
            }
        }, nextOpenMils);
    }
    clearMessageQueue(): number {
        const currentMessageLength = this.messageQueue.length
        this.messageQueue = []
        return currentMessageLength;
    }

}
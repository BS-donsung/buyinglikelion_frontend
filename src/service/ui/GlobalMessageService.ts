import {Optional} from "@yahvz01/monad";
import {Message} from "@/util/ModalMessage";
import setTimeout = jest.setTimeout;
export interface GlobalMessageServiceInterface {

    get isEmpty : boolean
    get active : boolean

    activate( message : Message, timeoutmils : number | null ) : void
    deactivate() : void

    closeMessage(nextOpenMils : number) : void
    closeMessageWithClear() : void
    clearMessageQueue() : number
}
export class GlobalMessageService<MessageType> implements GlobalMessageServiceInterface {

    defaultMils : number
    useDefaultMils : boolean
    messageQueue : Array<MessageType> = []
    private _active : boolean = false;


    constructor( defaultMils : number = 3000, useDefaultMils : boolean = true ) {
        this.defaultMils = defaultMils
        this.useDefaultMils = useDefaultMils;
    }

    get isEmpty(): boolean { return (this.messageQueue.length == 0); }
    get active() : boolean { return this._active }
    activate( message : MessageType | null = null, timeoutMils : number | null = null) : void {
        if(message) {
            this.messageQueue.push(message)
        }
        if(this.isEmpty) {
            this._active = false;
        } else {
            this._active = true;

            if(timeoutMils !== null) {
                window.setTimeout(() => {
                    this.deactivate()
                }, timeoutMils );
            } else if( this.useDefaultMils && this.defaultMils > 0 ) {
                window.setTimeout(() => {
                    this.deactivate()
                }, this.defaultMils );
            }
        }
    }

    getCurrentMessage() : Optional<MessageType> {
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

    closeMessageWithClear() : void {
        this.deactivate()
        this.clearMessageQueue()
    }

    closeMessage(nextOpenMils : number = 3000 ) {
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
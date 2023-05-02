
export enum STATUS {
    INIT,
    PENNDING,
    SUCCESS,
    FAILURE
}

export class ProcessStatus {
    private status : STATUS = STATUS.INIT
    getProcessing() { return this.status; }
    get isPending() : boolean { return this.status == STATUS.PENNDING; }
    setPending() { this.status = STATUS.PENNDING }
    setSuccess() { this.status = STATUS.SUCCESS }
    setFailure() { this.status = STATUS.FAILURE }
}
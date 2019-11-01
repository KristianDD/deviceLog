import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    logFromJsNative() {
        this._counter--;
        this.updateMessage();
        java.lang.System.out.println("test");
    }

    logFromNative() {
        this._counter++;
        this.updateMessage();
        const logger = new com.example.devicelog.DeviceLog();
        logger.logInfo();
    }

    logFromConsole() {
        this._counter++;
        this.updateMessage();
        console.assert(false, "NativeScript Test assert");
        console.dir({test: "NativeScript test console.dir"});
        console.error("NativeScript Test console.error");
        console.info("NativeScript Test console.info");
        console.log("NativeScript Test console.log");
        console.time("NativeScript Test console.time");
        console.timeEnd("NativeScript Test console.time");
        console.trace("NativeScript Test console.trace");
        console.warn("NativeScript Test console.warn");
    }

    throwFromNative() {
        this._counter++;
        this.updateMessage();
        const logger = new com.example.devicelog.DeviceLog();
        logger.throwAnException();
    }

    throwFromJs() {
        throw new Error("NativeScript Test js error.");
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}

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

    logFromNative() {
        this._counter++;
        this.updateMessage();
        const logger = new NativeLogger();
        logger.logInfo("test");
    }

    logFromConsole() {
        this._counter++;
        this.updateMessage();
        console.assert(false, "Test assert");
        console.dir({test: "test console.dir"});
        console.debug("Test console.debug");
        console.error("Test console.error");
        console.info("Test console.info");
        console.log("Test console.log");
        console.time("Test console.time");
        console.timeEnd("Test console.time");
        console.trace("Test console.trace");
        console.warn("Test console.warn");
    }

    throwFromNative() {
        this._counter++;
        this.updateMessage();
        const logger = new NativeLogger();
        logger.throwAnException();
    }

    throwFromJs() {
        throw new Error("Test js error.");
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}

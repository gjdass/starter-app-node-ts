import * as Log4js from "log4js";

export class App {

    private _logger: Log4js.Logger;
    private _name: string;

    constructor(name: string) {
        this._logger = Log4js.getLogger();
        this._name = name;
    }

    public Start() {
        this._logger.info("Starting application [%s] ...", this._name);
        // DO SOME STUFF
    }

    
    public Stop() {
        this._logger.info("Stopping application [%s] ...", this._name);
        // DO SOME STUFF
    }
    
}
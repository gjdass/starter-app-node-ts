"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log4js = require("log4js");
var App = (function () {
    function App(name) {
        this._logger = Log4js.getLogger();
        this._name = name;
    }
    App.prototype.Start = function () {
        this._logger.info("Starting application [%s] ...", this._name);
    };
    App.prototype.Stop = function () {
        this._logger.info("Stopping applications [%s] ...", this._name);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IkU6L3N0YXJ0ZXItYXBwLW5vZGUtdHMvc3JjLyIsInNvdXJjZXMiOlsiQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWlDO0FBRWpDO0lBS0ksYUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxtQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFHTSxrQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBFLENBQUM7SUFFTCxVQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxrQkFBRyJ9
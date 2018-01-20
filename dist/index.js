"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Config = require("config");
var Log4js = require("log4js");
var appName = Config.get("applicationName");
var log4js = Config.get("log4js.enabled");
if (log4js) {
    Log4js.configure("./config/log4js/" + Config.get("log4js.profile") + ".json");
}
var app = new App_1.App(appName);
app.Start();
app.Stop();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovc3RhcnRlci1hcHAtbm9kZS10cy9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0QjtBQUM1QiwrQkFBaUM7QUFDakMsK0JBQWlDO0FBR2pDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQVcsQ0FBQztBQUN0RCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFZLENBQUM7QUFDckQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVULE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUczQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFHWixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMifQ==
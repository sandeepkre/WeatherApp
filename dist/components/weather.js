"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/switchMap");
var weather_service_1 = require("../services/weather.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        var _this = this;
        this.searchInput = new forms_1.FormControl('');
        this.searchInput.valueChanges
            .debounceTime(300)
            .switchMap(function (place) { return weatherService.getWeather(place); })
            .retry(-1)
            .subscribe(function (weather) { return _this.weather = weather; }, function (error) { return console.error(error); }, function () { return console.log('Weather Returned'); });
    }
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        selector: 'weather',
        template: "\n    <h2>Weather</h2>\n    <input type=\"text\" placeholder=\"Enter city\" [formControl]=\"searchInput\">\n    <h3>Current weather in {{weather?.place}}:</h3>\n    <ul>\n      <li>Temperature: {{weather?.temperature}}F</li>\n      <li>Humidity: {{weather?.humidity}}%</li>\n    </ul>\n  ",
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.js.map
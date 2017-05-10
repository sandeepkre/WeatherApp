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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
exports.WEATHER_URL_BASE = new core_1.OpaqueToken('WeatherUrlBase');
exports.WEATHER_URL_SUFFIX = new core_1.OpaqueToken('WeatherUrlSuffix');
var WeatherService = (function () {
    function WeatherService(http, urlBase, urlSuffix) {
        this.http = http;
        this.urlBase = urlBase;
        this.urlSuffix = urlSuffix;
    }
    WeatherService.prototype.getWeather = function (city) {
        return this.http
            .get(this.urlBase + city + this.urlSuffix)
            .map(function (response) { return response.json(); })
            .filter(this._hasResult)
            .map(this._parseData);
    };
    WeatherService.prototype._hasResult = function (data) {
        return data['cod'] !== '405' && data.main;
    };
    WeatherService.prototype._parseData = function (data) {
        console.log("data", data);
        return {
            place: data.name || 'unknown',
            temperature: data.main.temp,
            humidity: data.main.humidity
        };
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(exports.WEATHER_URL_BASE)),
    __param(2, core_1.Inject(exports.WEATHER_URL_SUFFIX)),
    __metadata("design:paramtypes", [http_1.Http, String, String])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map
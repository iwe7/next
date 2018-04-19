"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const logger_move_event_1 = require("../logger-move.event");
let LoggerRemoveHandler = class LoggerRemoveHandler {
    handle(event) {
        console.log(event);
    }
};
LoggerRemoveHandler = __decorate([
    cqrs_1.EventsHandler(logger_move_event_1.LoggerRemoveEvent)
], LoggerRemoveHandler);
exports.LoggerRemoveHandler = LoggerRemoveHandler;

//# sourceMappingURL=logger-remove.handler.js.map

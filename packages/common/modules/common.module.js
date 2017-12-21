"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const setting_entity_1 = require("../entities/setting.entity");
const setting_service_1 = require("../services/setting.service");
const configuration_service_1 = require("../services/configuration.service");
const log_service_1 = require("../services/log.service");
const log_entity_1 = require("../entities/log.entity");
const database_module_1 = require("./database.module");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        components: [
            configuration_service_1.ConfigurationService,
            log_service_1.LogService,
            setting_service_1.SettingService,
        ],
        modules: [
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forRoot([
                log_entity_1.Log,
                setting_entity_1.Setting,
            ]),
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
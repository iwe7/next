import { Module as ModuleInterface, Injection } from "../interfaces";
import { Injection as InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class ModuleLoader {
    protected caches: Array<ModuleInterface> = [];

    protected filePathForEnabledCache = `${process.cwd()}/storages/modules/enabled.json`;

    constructor() {
        this.loadCaches();
    }

    public refresh() {
        this.caches.splice(0, this.caches.length);
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.caches.length) {
            this.loadCaches();
        }
        for(let i = 0; i < this.caches.length; i ++) {
            const module = this.caches[i];
            const identification = module.identification;
            module.enabled = await setting.get(`module.${identification}.enabled`, false);
            module.installed = await setting.get(`module.${identification}.installed`, false);
            this.caches.splice(i, 1, module);
        }

        return this;
    }

    protected loadCaches() {
        this.caches.splice(0, this.caches.length);
        this.caches = InjectionLoader
            .injections
            .filter((injection: Injection) => {
                return InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .map((injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);

                return {
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: false,
                    identification: identification,
                    installed: false,
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    version: Reflect.getMetadata("version", injection.target),
            };
            });
    }
}

export const Module = new ModuleLoader();
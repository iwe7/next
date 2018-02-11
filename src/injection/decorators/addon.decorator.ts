import "reflect-metadata";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Author } from "../types/author.type";
import { INJECTION_TYPE } from "../constants/injection.constants";

export function Addon(obj: {
    authors?: Author[],
    description?: string,
    exports?: any[],
    identification: string,
    imports?: any[],
    components?: any[],
    controllers?: any[],
    modules?: any[],
    name: string,
    version: string,
}): ClassDecorator {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;

    return (target: any) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata(INJECTION_TYPE, InjectionType.Addon, target);
    };
}

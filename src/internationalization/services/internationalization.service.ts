import * as Polyglot from 'node-polyglot';
import { Component } from "@nestjs/common";
import { PhraseMetadata } from "../metadatas/phrase.metadata";

@Component()
export class InternationalizationService {
    private metadatas: Array<PhraseMetadata>;

    private readonly polyglot: Polyglot;

    constructor() {
        this.polyglot = new Polyglot();
    }

    /**
     * @returns { any }
     */
    public getPhrases(): any {
        return this.polyglot.phrases;
    }

    /**
     * @param { Array<PhraseMetadata> } metadatas
     */
    public initialize(metadatas: Array<PhraseMetadata>) {
        this.metadatas = metadatas;
    }

    /**
     * @param { string } locale
     */
    public setLocale(locale: string): void {
        if (this.polyglot.locale() !== locale) {
            this.polyglot.locale(locale);
        }
    }

    /**
     * @param { string } phrase
     * @param variables
     * @returns { string }
     */
    public translate(phrase: string, variables?: any): string {
        return this.polyglot.t(phrase, variables);
    }
}
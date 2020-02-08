import React from "react";
import { AuthStore } from "@store/auth";
import {inject, observer} from "mobx-react";

interface Props {
    AuthStore?: AuthStore;
}

@inject("AuthStore")
export class Locale extends React.Component<Props> {
    public static cache: { [key: string]: { [key: string]: string } } = {};
    public static cur: string;

    constructor(props) {
        super(props);
        Locale.cur = this.props.AuthStore.locale;
        this.cacheLocales().then(() => null);
    }

    static translate(key: string, replacements?: { [key: string]: any; }): string {
        let lang: any, content: string;
        const locale = Locale.cache[Locale.cur];

        if (!locale) {
            if (Locale.cache['en'] && Locale.cache['en'][key]) {
                lang = Locale.cache['en']
            } else {
                return key;
            }
        }
        if (!replacements) return lang[key];
        content = lang[key];

        for (const replace in replacements) {
            const use: any = replacements[replace];
            content = content.replace(new RegExp(`{${replace}}`, 'g'), use);
        }

        return content;
    }

    async cacheLocales() {
        // @ts-ignore
        Locale.cache["en"] = (await import("../locales/en.json"));
    }

    static getKeys(): String[] {
        return Object.keys(Locale.cache);
    }

    render() {
        return this.props.children;
    }

}

import React from "react";
import { AuthStore } from "@store/auth";
import {inject} from "mobx-react";

interface Props {
    AuthStore?: AuthStore;
}

@inject("AuthStore")
export class Locale extends React.Component<Props> {
    public static cache: { [key: string]: { [key: string]: string } } = JSON.parse(window.localStorage.getItem("locales") || '{}');
    public static cur: string;

    constructor(props) {
        super(props);
        Locale.cur = this.props.AuthStore.locale;
        Locale.init().then(() => null);
    }

    static translate(key: string, replacements?: { [key: string]: any; }): string {
        let lang: any = Locale.cache[Locale.cur], content: string;

        if (!lang) {
            if (Locale.cache['en'] && Locale.cache['en'][key]) {
                lang = Locale.cache['en'];
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

    protected static async init() {
        const temp = {};
        // @ts-ignore
        temp["en"] = (await import("../locales/en.json"));

        // When adding new locales, do it ABOVE this line!
        const cached = Object.keys(Locale.cache).length < 1 ? null : JSON.stringify(Locale.cache);
        if (!cached || cached !== JSON.stringify(temp)) {
            Locale.cache = temp;
            window.localStorage.setItem("locales", JSON.stringify(temp));
        }
    }

    static getKeys(): String[] {
        return Object.keys(Locale.cache);
    }

    render() {
        return this.props.children;
    }

}

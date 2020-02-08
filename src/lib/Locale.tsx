import React from "react";
import { AuthStore } from "@store/auth";
import {inject, observer} from "mobx-react";

interface Props {
    AuthStore?: AuthStore;
}

@inject("AuthStore")
export class Locale extends React.Component<Props> {

    public static userLocale;
    public static locale: { [key: string]: string };
    public static cache: { [key: string]: { [key: string]: string } };

    constructor(props) {
        super(props);
        Locale.userLocale = this.props.AuthStore.locale;
        Locale.locale = {};
        Locale.cache = {};
        this.cacheLocales().then(() => null);
    }

    static translate(key: string, replacements?: { [key: string]: any; }): string {
        if (!Locale.locale) Locale.locale = Locale.cache[Locale.userLocale];
        if (!Locale.locale[key]) return "";
        let str = Locale.locale[key];
        for (const k in replacements) {
            const v: any  = replacements[k];
            str = str.replace(new RegExp(`{${k}}`, "g"), v);
        }
        return str;
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
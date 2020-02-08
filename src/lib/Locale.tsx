import React from "react";
import { AuthStore } from "@store/auth";
import {inject, observer} from "mobx-react";

interface Props {
    AuthStore?: AuthStore;
}

@inject("AuthStore")
export class Locale extends React.Component<Props> {

    public static cur: string;
    public static cache: { [key: string]: { [key: string]: string } };

    constructor(props) {
        super(props);
        Locale.cur = this.props.AuthStore.locale;
        Locale.cache = {};
        this.cacheLocales().then(() => null);
    }

    static translate(key: string, replacements?: { [key: string]: any; }): string {
        const locale = Locale.cache[Locale.cur];
        if (!locale[key]) return key;
        let str = locale[key];
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
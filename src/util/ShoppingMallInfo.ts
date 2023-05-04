import {name} from "ts-jest/dist/transformers/hoist-jest";
export interface ShoppingMallInfoInterface {
    name : string;
    image : string;
    hexColor : string;
}

export class ShoppingMallInfo implements ShoppingMallInfoInterface {

    private _korean : string;
    private _english : string;
    private _image : string;
    private _hexColor : string;

    constructor( korean : string, english : string, image : string, hexColor : string ) {
        this._korean = korean;
        this._english = english;
        this._image = image;

        let hex = hexColor;
        const validHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (!validHex.test(hex)) {
            throw new Error("hexColor is not valid code");
        }
        if (hex.length === 4) {
            hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        this._hexColor = hex;
    }
    get name() : string {
        return this._english;
    }
    get koreanName() : string {
        return this._korean;
    }
    get image() : string {
        return this._image;
    }
    get hexColor() : string {
        return this._hexColor;
    }
    get rgbColor() : string {
        const r = parseInt(this._hexColor.slice(1, 3), 16);
        const g = parseInt(this._hexColor.slice(3, 5), 16);
        const b = parseInt(this._hexColor.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    rgbaColor( alpha : number = 0.7) : string {
        const r = parseInt(this._hexColor.slice(1, 3), 16);
        const g = parseInt(this._hexColor.slice(3, 5), 16);
        const b = parseInt(this._hexColor.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b}, ${alpha})`;
    }
}
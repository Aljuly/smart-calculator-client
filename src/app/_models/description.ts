import { JsonProperty } from 'json-typescript-mapper';

export class Description {

    private _id: number;
    private _title: string;
    private _description: string;
    constructor() {
        this._id = void 0;
        this.title = void 0;
        this._description = void 0;
    }

    public get description(): string {
        return this._description;
    }
    @JsonProperty('description')
    public set description(value: string) {
        this._description = value;
    }
    public get title(): string {
        return this._title;
    }
    @JsonProperty('title')
    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    @JsonProperty('id')
    public set id(value: number) {
        this._id = value;
    }
}

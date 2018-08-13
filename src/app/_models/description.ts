import { JsonProperty } from 'json-typescript-mapper';

export class Description {

    private _id: number;
    private _title: string;
    private _description: string;
    constructor(id: number, title: string, description: string) {
        this._id = id;
        this._title = title;
        this._description = description;
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

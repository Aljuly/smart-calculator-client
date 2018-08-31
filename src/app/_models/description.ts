import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Description')
export class Description {
    @JsonProperty('id', String, )
    private _id: number;
    @JsonProperty('title', String)
    _title: string;
    @JsonProperty('description', String)
    _description: string;
    constructor(
        id?: string,
        title?: string,
        description?: string
    ) {
        this._id = Number(id) || void 0;
        this.title = title || void 0;
        this._description = description || void 0;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = Number(value);
    }
}

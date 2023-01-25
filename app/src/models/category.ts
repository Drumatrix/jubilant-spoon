import { ObjectId } from "mongodb";

export default class Category {
    constructor(public name: string, public active: boolean, public id?: ObjectId) {}
}
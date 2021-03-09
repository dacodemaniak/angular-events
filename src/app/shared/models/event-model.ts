import { EventInterface } from "./interfaces/event-interface";

export class EventModel implements EventInterface {
  id?: number;
  title: string;
  detail?: string;
  beginAt: Date;
  endAt?: Date;
  priority: number;

  public constructor() {}

  public deserialize(formData: any): EventModel {
    Object.assign(this, formData);

    this.beginAt = new Date();

    return this;
  }
}

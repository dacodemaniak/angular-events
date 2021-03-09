export interface EventInterface {
  id?: number;
  title: string;
  detail?: string;
  beginAt: Date;
  endAt?: Date;
  priority: number;
}

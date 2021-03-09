import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'evDueDate'
})
export class DueDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    const today: moment.Moment = moment();
    const eventDate: moment.Moment = moment(value);

    let radical: moment.unitOfTime.Diff = 'd';

    if (args) {
      const format: any = args[0];
      if (format.hasOwnProperty('diffAs')) {
        radical = format.diffAs;
      }
    }

    const dueDate = today.diff(eventDate, radical);

    console.log(`${JSON.stringify(args)}`);

    return dueDate.toString();
  }

}

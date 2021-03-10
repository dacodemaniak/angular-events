import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(): Observable<string> {
    return this.httpClient.get<any>(
      `${environment.clockApi}`
    ).pipe(
      take(1),
      map((result: any) =>{
        return moment(result.currentDateTime);
      }
      ),
      map((momentDate: moment.Moment) => momentDate.format('DD/MM/YYYY H:m'))
    );
  }
}


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, scan } from 'rxjs/operators';

import { ExportEventParams } from 'src/app/models/export-event-params';
import { WsEvent } from 'src/app/models/ws-event';

import { WsService } from 'src/app/services/ws.service';

@Injectable({
  providedIn: 'root'
})
export class EventTrackerService {
  private exportEventSubject$: BehaviorSubject<WsEvent<ExportEventParams>[]> = new BehaviorSubject([]);

  constructor(wsService: WsService) {
    wsService.onEvent()
      .pipe(
        filter(event => event.type === 'export'),
        scan((accEvents: WsEvent<ExportEventParams>[], event: WsEvent<ExportEventParams>) => [...accEvents, event], [])
      )
      .subscribe(this.exportEventSubject$);
  }

  getExportEvents(): Observable<WsEvent<ExportEventParams>[]> {
    return this.exportEventSubject$.asObservable();
  }
}

import { Inject, Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { first, retryWhen, switchMap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { WsEvent } from '../models/ws-event';

import { WS_CONNECTION_URL } from '../providers/ws-config.provider';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  private socket$: WebSocketSubject<WsEvent> = webSocket(this.wsUrl);

  constructor(@Inject(WS_CONNECTION_URL) private wsUrl: string) { }

  onEvent(): Observable<WsEvent> {
    return this.socket$.asObservable()
      .pipe(
        retryWhen(errors$ => errors$
          .pipe(switchMap(() => timer(1000)
            .pipe(first())
          ))
        )
      );
  }
}

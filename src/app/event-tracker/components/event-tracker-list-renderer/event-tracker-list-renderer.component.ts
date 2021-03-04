import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExportEventParams } from 'src/app/models/export-event-params';
import { WsEvent } from 'src/app/models/ws-event';

@Component({
  selector: 'app-event-tracker-list-renderer',
  templateUrl: './event-tracker-list-renderer.component.html',
  styleUrls: ['./event-tracker-list-renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTrackerListRendererComponent {
  @Input() events: WsEvent<ExportEventParams>[];

  displayedColumns: string[] = [ 'date', 'filename', 'user_id' ];

  trackByEventId(index: number, event: WsEvent<ExportEventParams>): number {
    return event.id;
  }
}

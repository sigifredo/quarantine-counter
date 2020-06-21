import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    static readonly _DAY: number = 86400000;
    static readonly _HOUR: number = 3600000;
    static readonly _MINUTE: number = 60000;
    static readonly _SECOND: number = 1000;

    clock: any;
    days: number;
    hours: number;
    minutes: number;
    months: number;
    seconds: number;
    source = timer(0, 1000);

    ngOnInit() {
        this.clock = this.source.subscribe(t => {
            let start: Date = new Date('03/14/2020 00:00');
            let now: Date = new Date();
            let distance = now.getTime() - start.getTime();

            this.days = Math.floor(distance / AppComponent._DAY);
            this.hours = Math.floor((distance % AppComponent._DAY) / AppComponent._HOUR);
            this.minutes = Math.floor((distance % AppComponent._HOUR) / AppComponent._MINUTE);
            this.months = Math.floor(this.days / 30);
            this.seconds = Math.floor((distance % AppComponent._MINUTE) / AppComponent._SECOND);
        });
    }
}

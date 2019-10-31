import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() IndexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "éteint")
      return 'red';
    else if (this.appareilStatus === "allumé")
      return "green";
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.IndexOfAppareil)
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.IndexOfAppareil)
  }
}

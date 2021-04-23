import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.scss']
})
export class VMessageComponent{
  @Input() text = '';
}

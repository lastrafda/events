import {Component, Input} from '@angular/core';

@Component({
  selector:  'app-collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <ng-content select="[well-title]"></ng-content>
    <div #contentWrapper [hidden]="!visible">
      <ng-content select="[well-body]">
      </ng-content>
    </div>
  </div>
  `
})
export class CollapsibleWellComponent {
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}

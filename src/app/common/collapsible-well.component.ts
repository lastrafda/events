import {Component, Input} from "@angular/core";

@Component({
  selector:  'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">{{title}}</h4>
    <div #contentWrapper [hidden]="!visible">
      <ng-content>
      </ng-content>
    </div>
  </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}

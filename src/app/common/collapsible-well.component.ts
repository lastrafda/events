import {Component, Input} from "@angular/core";

@Component({
  selector:  'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">{{title}} <i *ngIf="voters > 3" class="glyphicon glyphicon-fire" style="color: red; float:right"></i></h4>
    <div #contentWrapper [hidden]="!visible">
      <ng-content>
      </ng-content>
    </div>
  </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  @Input() voters: number;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
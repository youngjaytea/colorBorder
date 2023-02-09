import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <ul *ngIf="child.length > 0">
      <li *ngFor="let item of child">
        {{ item.name }}
        <app-item [name]="item.name" [child]="item.child"></app-item>
      </li>
    </ul>
  `,
})
export class ItemComponent {
  @Input() name: string = '';
  @Input() child: Array<{ name: string; child: Array<{ name: string; child: Array<{ name: string; child: Array<{ name: string }> }> }> }> = [];
}

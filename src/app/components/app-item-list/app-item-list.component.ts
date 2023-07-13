import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './app-item-list.component.html',
  styleUrls: ['./app-item-list.component.css']
})
export class AppItemListComponent {
  @Input() listaItems: any[] = [];
}

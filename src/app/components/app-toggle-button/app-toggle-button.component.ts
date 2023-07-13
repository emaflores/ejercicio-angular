import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './app-toggle-button.component.html',
  styleUrls: ['./app-toggle-button.component.css']
})
export class AppToggleButtonComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  buttonText = 'Mostrar';

  onToggleClick() {
    this.toggle.emit();
    this.buttonText = this.buttonText === 'Mostrar' ? 'Ocultar' : 'Mostrar';
  }
}

import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


class Item {
  nombre: string;
  costo: string;

  constructor(nombre: string, costo: string) {
    this.nombre = nombre;
    this.costo = costo;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', animate('800ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'ejercicio-angular';
  listaItems: Item[] = [
    { nombre: 'Zapatillas Adidas', costo: '$40,000' },
    { nombre: 'Teléfono Samsung Galaxy S21', costo: '$359,600' },
    { nombre: 'Camiseta Nike', costo: '$12,000' },
    { nombre: 'Laptop Lenovo Ideapad', costo: '$279,600' },
    { nombre: 'Auriculares Sony WH-1000XM4', costo: '$139,600' },
    { nombre: 'Vestido de fiesta', costo: '$32,000' },
    { nombre: 'Smart TV LG 55"', costo: '$279,600' },
    { nombre: 'Reloj inteligente Apple Watch Series 6', costo: '$159,600' },
    { nombre: 'Bolso de mano Michael Kors', costo: '$79,600' },
    { nombre: 'Zapatos de tacón elegantes', costo: '$20,000' },
    { nombre: 'Cámara Canon EOS Rebel T7i', costo: '$319,600' },
    { nombre: 'Bicicleta de montaña Specialized', costo: '$519,600' },
    { nombre: 'Tableta Samsung Galaxy Tab S7', costo: '$219,600' },
    { nombre: 'Gafas de sol Ray-Ban', costo: '$60,000' },
    { nombre: 'Perfume Chanel Coco Mademoiselle', costo: '$48,000' },
    { nombre: 'Gorra New Era', costo: '$10,000' },
    { nombre: 'Mochila North Face', costo: '$39,600' },
    { nombre: 'Collar de plata con colgante', costo: '$20,000' },
    { nombre: 'Consola de videojuegos PlayStation 5', costo: '$199,600' },
    { nombre: 'Maleta Samsonite', costo: '$60,000' }
  ];
  
  mostrarLista = false;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

}







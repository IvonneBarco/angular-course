import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-labs',
  styleUrl: './labs.scss',
  templateUrl: './labs.html',
})
export class Labs {
  name = 'Ivonne Carolina';
  num1 = 5;
  num2 = 5;
  urlImagen = 'https://placehold.co/800x250';

  person = {
    name: 'Juan Perez',
    age: 8,
    email: 'juan.perez@correo.com',
  };

  colores = [
    {
      name: 'Rojo',
      color: 'red',
    },
    {
      name: 'Verde',
      color: 'green',
    },
    {
      name: 'Azul',
      color: 'blue',
    },
  ];

  nombreCampo = 'País';
  nombrePlaceholder = 'Escriba el país de nacimiento';

  mascota = signal('Perrito');

  users = [
    {
      name: 'Juan Perez',
      email: 'juan.perez@correo.com',
      position: 'Administrador',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Maria Gomez',
      email: 'maria.gomez@correo.com',
      position: 'Desarrollador Frontend',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@correo.com',
      position: 'Desarrollador Backend',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Ana Torres',
      email: 'ana.torres@correo.com',
      position: 'Diseñador UI/UX',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Luis Martinez',
      email: 'luis.martinez@correo.com',
      position: 'Analista de Datos',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Sofia Ramirez',
      email: 'sofia.ramirez@correo.com',
      position: 'Gerente de Proyectos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Jorge Herrera',
      email: 'jorge.herrera@correo.com',
      position: 'Especialista en Marketing',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Lucia Castro',
      email: 'lucia.castro@correo.com',
      position: 'Soporte Técnico',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Miguel Vargas',
      email: 'miguel.vargas@correo.com',
      position: 'Control de Calidad (QA)',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Elena Morales',
      email: 'elena.morales@correo.com',
      position: 'Recursos Humanos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'David Silva',
      email: 'david.silva@correo.com',
      position: 'DevOps Engineer',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
  ];

  colorCtrl = new FormControl();

  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.minLength(3),
    ]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log('Color seleccionado:', value);
    });
  }

  saludo() {
    alert('Buenas tardes 6A');
  }

  suma() {
    alert(this.num1 + this.num2);
  }

  onChangeRecibirValor(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    console.log(value);
  }

  onInputRecibirValor(event: Event) {
    console.log((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === 'string') {
      alert('La palabra String no es permitida');
    }
  }

  onKeySaludo() {
    alert('Buenas tardes 6A');
  }
}

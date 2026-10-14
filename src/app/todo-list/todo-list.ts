import { Component, inject, signal } from '@angular/core';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.scss',
  templateUrl: './todo-list.html',
})
export class TodoList {
  public todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Comprar víveres',
      description: 'Comprar leche, huevos, pan y verduras en el supermercado local.',
      dueDate: '2026-06-05',
      category: 'Personal',
      priority: 'high',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Revisar informes mensuales',
      description: 'Analizar las métricas de ventas del último trimestre y preparar el reporte.',
      dueDate: '2026-06-07',
      category: 'Trabajo',
      priority: 'high',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Rutina de ejercicio',
      description: 'Completar 45 minutos de cardio y estiramientos en casa.',
      dueDate: '2026-06-04',
      category: 'Salud',
      priority: 'medium',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Pagar servicios públicos',
      description: 'Realizar el pago online de la factura de electricidad y agua.',
      dueDate: '2026-06-10',
      category: 'Hogar',
      priority: 'high',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Actualizar portafolio',
      description: 'Subir los últimos proyectos desarrollados a la página web personal.',
      dueDate: '2026-06-15',
      category: 'Estudio',
      priority: 'low',
      isCompleted: false,
    },
    {
      id: 6,
      title: 'Llamar al médico',
      description: 'Agendar cita de control general anual con el doctor.',
      dueDate: '2026-06-08',
      category: 'Salud',
      priority: 'medium',
      isCompleted: false,
    },
    {
      id: 7,
      title: 'Limpiar la oficina',
      description: 'Organizar el escritorio, botar papeles innecesarios y limpiar la pantalla.',
      dueDate: '2026-06-06',
      category: 'Hogar',
      priority: 'low',
      isCompleted: false,
    },
    {
      id: 8,
      title: 'Reunión con equipo de desarrollo',
      description: 'Discutir los avances del sprint actual y asignar nuevas tareas.',
      dueDate: '2026-06-04',
      category: 'Trabajo',
      priority: 'high',
      isCompleted: false,
    },
    {
      id: 9,
      title: 'Leer un libro',
      description: 'Avanzar al menos dos capítulos del libro de arquitectura de software.',
      dueDate: '2026-06-12',
      category: 'Personal',
      priority: 'low',
      isCompleted: true,
    },
    {
      id: 10,
      title: 'Planificar viaje de vacaciones',
      description: 'Cotizar vuelos y hospedaje para las próximas vacaciones de fin de año.',
      dueDate: '2026-06-20',
      category: 'Personal',
      priority: 'medium',
      isCompleted: false,
    },
  ]);

  public tempTodo = {
    title: '',
    priority: '',
  };

  //Formulario
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
  todoTitle: ['', [Validators.minLength(3)]], // Valor por defecto - No puede ser nulo - Validacion de formulario
  priority: ['', Validators.required], // Valor por defecto - No puede ser nulo - Validacion de formulario
});



  constructor() {
    // Al cargar guardamos la lista de tareas en el localStorage
    localStorage.setItem('todos', JSON.stringify(this.todos()));
  }

  addTodo() {
    const newTodo: Todo = {
      id: this.todos().length + 1,
      title: this.tempTodo.title,
      description: '',
      dueDate: '',
      category: 'Personal',
      priority: this.tempTodo.priority,
      isCompleted: false,
    };

    console.log('.:: New Todo:', newTodo);
    this.todos.update((todos) => [...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify(this.todos()));
  }

  onChangeTodo(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.tempTodo.title = value;
    console.log(value);
    // this.addTodo(value);
  }

  onChangePriority(event: Event) {
    const select = event.target as HTMLSelectElement;
    const value = select.value;
    this.tempTodo.priority = value;
    console.log(value);
  }

  setColorPriority(priority: string) {
    switch (priority) {
      case 'low':
        return 'priority-low';
      case 'medium':
        return 'priority-medium';
      case 'high':
        return 'priority-high';
      default:
        return '';
    }
  }

  onChangeCompleted(event: Event, todo: Todo) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    todo.isCompleted = isChecked;
    console.log(`Tarea "${todo.title}" completada: ${isChecked}`);
    localStorage.setItem('todos', JSON.stringify(this.todos()));
  }

  // addTodoWithFormControl() {
  //   if (this.newTodoCtrl.valid) {
  //     const newTodo: Todo = {
  //       id: this.todos().length + 1,
  //       title: this.newTodoCtrl.value,
  //     };
  //     this.todos.update((todos) => [...todos, newTodo]);
  //     localStorage.setItem('todos', JSON.stringify(this.todos()));
  //     this.newTodoCtrl.reset();
  //   }
  // }

  todoDataComplete() {
    console.log('Datos del formulario:', this.myForm.value);
    console.log('formulario valido: ', this.myForm.valid);
    console.log('formulario: ', this.myForm);
  }
}

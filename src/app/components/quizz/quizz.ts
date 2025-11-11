import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css',
})

export class Quizz {
  title: string = " "; // criei uma propriedade title do tipo string inicializada com uma string vazia, depois adiciono onde ela será apontada, nesse caso no html, no h3{‌{title}‌}, ou seja, falando de um jeito mais claro, o valor da propriedade title será exibido ali no h3 do html. No final, o que fiz foi deixar o título dinâmico, podendo ser alterado via código typescript.

  // no Typescript não é uma boa prática usar o tipo any (que significa qualquer coisa), o ideal é tipar as variáveis, ou seja, dizer qual o tipo de dado que aquela variável vai armazenar, como string, number, boolean, array, etc. Mas para fins didáticos, vou deixar como any mesmo.
  questions: any
  questionSelected: any

  ansewers: string[] = [];
  ansewerSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {}
}

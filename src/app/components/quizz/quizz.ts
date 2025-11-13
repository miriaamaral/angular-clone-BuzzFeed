import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import quiz_questions from '../../../assets/data/quiz_questions.json'

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

  answers: string[] = [];
  answerSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {}

  // método chamado quando o componente é inicializado, porém não está funcionando no browser, então ver depois o que pode estar acontecendo. Talvez a sintaxe esteja errada ou ultrapassada pra essa versão do Angular.
  ngOnInit() {
  if(quiz_questions) {
    this.finished = false;
    this.title = quiz_questions.title;

    this.questions = quiz_questions.questions;
    this.questionSelected = this.questions[this.questionIndex];

    this.questionIndex = 0;
    this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose (value:string) {
    this.answers.push(value)
    this.nextStep()
  }


  // o objetivo dessa função é fazer o jogador ir para o próximo passo após selecionar a resposta escolhida
  // seja a próxima questão ou se não tiver mais questões exibir o resultado.
  async nextStep(){
    this.questionIndex+=1 //pega o valor dele mesmo e soma com +1
    if(this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quiz_questions.results[finalAnswer as keyof
        typeof quiz_questions.results] // tô falando que finalAnswers é uma chave do mesmo tipo do que ele esperava, porque ele não estava aceitando o any

     // implementar verificação ganhadora
    console.log(this.answers)
    }
  }


  // Esse algoritmo é muito especifico, dificil até de se usar no dia a dia, pesquisamos como encontrar algoritmos matemáticos pra mais frequencia pra achar essa solução
  // aqui vamos fazer um alógica mais matemática, pra encnntrar a resposta com maior frequencia (A ou B)
  // usei o reduce porque quero reduzir as respostas em um único resultado
  async checkResult(answers:string[]){
    ['A', 'A', 'B', 'A']
    const result = answers.reduce((previous, current, i, arr)=>{
      if(
        // vou percorrer as respostas e vou perguntar se a resposta e verificar se ele já esta sendo contailizado, achando a maior frequencia.
        // dentro do array vou filtrar cada item (se o item é igual ao item anterior, no caso o previous, pego o tamanho dele com o length e pergunto se ele é maior que o que tem amis frequencia)
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
      ){
        // e se meu elemento anterior tiver mais que o elemento currente (atual) a lógioca é retornar o valor anterior
          return previous
      }else{
        // se não, a lógica é retornar o elemento atual
          return current
      }
    })
        // Uma vez que identificamos quem aparece com mais frequencia a gente retorna o resultado
          return result
  }


}


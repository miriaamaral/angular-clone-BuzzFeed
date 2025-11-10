import { Component } from '@angular/core';
import { Quizz } from "../../components/quizz/quizz";

@Component({
  selector: 'app-home',
  imports: [Quizz],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

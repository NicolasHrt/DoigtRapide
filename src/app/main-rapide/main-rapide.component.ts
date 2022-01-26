import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service'

@Component({
  selector: 'app-main-rapide',
  templateUrl: './main-rapide.component.html',
  styleUrls: ['./main-rapide.component.scss']
})
export class MainRapideComponent implements OnInit {
  public actualWord: string;
  public wordsArray : string[];
  public correctWords: number;
  public endGame:boolean;
  public result!:number;
  wordIndex: number;

 /* newWord():any{
    this.randomWordService.getWords(10).subscribe(data=>{
      this.wordsArray = data;
    });
  }*/

  NextWord(word:string) {
    this.actualWord = word.trim();
    let wordToWrite = this.wordsArray[this.wordIndex];
    let idWordToWrite = 'word-'+this.wordIndex;
    let HtmlwordToWrite = document.getElementById(idWordToWrite);
    this.wordIndex++;

    console.log(this.actualWord);
    console.log(wordToWrite);
    if(this.actualWord === wordToWrite){
      console.log('Coool!');
      // @ts-ignore
      HtmlwordToWrite.classList.add('correct');
      this.correctWords++;
    }
    else{
      // @ts-ignore
      HtmlwordToWrite.classList.add('wrong');
    }

    if(this.wordIndex === this.wordsArray.length) {
      let result=(this.correctWords*100)/this.wordsArray.length;
      this.result= Math.round(result);
      this.endGame=true;
    }

    // @ts-ignore
    HtmlwordToWrite.classList.remove('currentWord');
    // @ts-ignore
    HtmlwordToWrite.classList.remove('currentWordWrong');
    this.actualWord='';
    (<HTMLInputElement>document.getElementById("WritingTextInput")).value='';
  }

  VerifyWord(word:string){
    this.actualWord =word.trim();
    let wordToWrite = this.wordsArray[this.wordIndex];
    let idWordToWrite = 'word-'+this.wordIndex;
    let HtmlwordToWrite = document.getElementById(idWordToWrite);
    // @ts-ignore
    HtmlwordToWrite.classList.add('currentWord');
    if(!wordToWrite.includes(this.actualWord)){
      // @ts-ignore
      HtmlwordToWrite.classList.add('currentWordWrong');
    }
    else{
      // @ts-ignore
      HtmlwordToWrite.classList.remove('currentWordWrong');
    }
  }


  onClickFillText(){
    this.endGame=false;
    this.wordIndex=0;
    let index = 0;
    (<HTMLInputElement>document.getElementById("textTowrite")).innerHTML='';
    for(let word of this.wordsArray){
      let Wordindex = 'word-' + index;
      const spanWord = document.createElement("span");
      spanWord.innerHTML = word;
      spanWord.classList.add('word');
      spanWord.setAttribute('id',Wordindex);
      const element = document.getElementById("textTowrite");
      // @ts-ignore
      element.appendChild(spanWord);
      index++;
    }
    console.log(this.wordsArray);
  }

  constructor(private randomWordService: WordsService) {
    this.wordIndex=0;
    this.actualWord='';
    this.wordsArray = ['Premier','il', 'raconte', 'simple','beau','connaître','contre','savoir','mort','reprendre','dans', 'voir'];
    this.correctWords=0;
    this.endGame=false;


  }

  ngOnInit(): void{
    this.onClickFillText();
    }

}

import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service'

@Component({
  selector: 'app-main-rapide',
  templateUrl: './main-rapide.component.html',
  styleUrls: ['./main-rapide.component.scss']
})
export class MainRapideComponent implements OnInit {
  public actualWord: string;
  public wordsArray! : string[];
  public correctWords: number;
  public endGame:boolean;
  public result!:number;
  wordIndex: number;

 // NewWordsRequest(){
 //    this.randomWordService.getWords(10).subscribe(data=>{
 //      this.wordsArray = data;
 //      console.log(this.wordsArray);
 //      console.log(data);
 //    }, err => {
 //      console.log("error :/");
 //    });
 //  }

  NextWord(word:string) {
    this.actualWord = word.trim();
    let wordToWrite = this.wordsArray[this.wordIndex];
    let idWordToWrite = 'word-'+this.wordIndex;
    let HtmlwordToWrite = document.getElementById(idWordToWrite) as HTMLInputElement;
    this.wordIndex++;

    if(this.actualWord === wordToWrite){
      HtmlwordToWrite.classList.add('correct');
      this.correctWords++;
    }
    else{
      HtmlwordToWrite.classList.add('wrong');
    }

    //When the test is finish
    if(this.wordIndex === this.wordsArray.length) {
      let result=(this.correctWords*100)/this.wordsArray.length;
      this.result= Math.round(result);
      this.endGame=true;
    }

    HtmlwordToWrite.classList.remove('currentWord');
    HtmlwordToWrite.classList.remove('currentWordWrong');
    this.actualWord='';
    (<HTMLInputElement>document.getElementById("WritingTextInput")).value='';

    let NextidWordToWrite = 'word-'+this.wordIndex;
    let NextHtmlwordToWrite = document.getElementById(NextidWordToWrite) as HTMLInputElement;
    NextHtmlwordToWrite.classList.add('currentWord');

  }

  VerifyWord(word:string){
    this.actualWord =word.trim();
    let wordToWrite = this.wordsArray[this.wordIndex];
    let idWordToWrite = 'word-'+this.wordIndex;
    let HtmlwordToWrite = document.getElementById(idWordToWrite) as HTMLInputElement;
    if(!wordToWrite.includes(this.actualWord)){
      HtmlwordToWrite.classList.add('currentWordWrong');
    }
    else{
      HtmlwordToWrite.classList.remove('currentWordWrong');
    }
  }


  Reset(){
    this.endGame=false;
    this.wordIndex=0;
    this.correctWords=0;
    let index = 0;
    let first = true;
    (<HTMLInputElement>document.getElementById("textTowrite")).innerHTML='';
    for(let word of this.wordsArray){

      let Wordindex = 'word-' + index;
      const spanWord = document.createElement("span");
      spanWord.innerHTML = word;
      spanWord.classList.add('word');
      if(first){
        spanWord.classList.add('currentWord');
        first=false;
      }
      spanWord.setAttribute('id',Wordindex);
      let textTowrite = document.getElementById("textTowrite") as HTMLInputElement;
      textTowrite.appendChild(spanWord);
      index++;
    }
  }

  constructor(private randomWordService: WordsService) {
    this.wordIndex=0;
    this.actualWord='';
    this.wordsArray = ['those','she', 'she', 'something','earth','found','does','people','man','around','got', 'me','to','point','were','mother','again','large','from','city',];
    this.correctWords=0;
    this.endGame=false;


  }

  ngOnInit(): void{
    this.Reset();

    }

}

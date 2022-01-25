import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service'

@Component({
  selector: 'app-main-rapide',
  templateUrl: './main-rapide.component.html',
  styleUrls: ['./main-rapide.component.scss']
})
export class MainRapideComponent implements OnInit {
  public value!: string;
  wordsArray : any;
  wordIndex: number;

  newWord(){

    this.randomWordService.getWords(60).subscribe(data=>{
      this.wordsArray = data;
    });
  }

  onSpaceWrite(word:string) {

    this.value = word;
    var wordToWrite = this.wordsArray[this.wordIndex];
    (<HTMLInputElement>document.getElementById("WritingTextInput")).value='';
    console.log(this.wordIndex);
    if(word===wordToWrite){
      console.log('Nice');
    }
    console.log(word);
    console.log(wordToWrite);
    this.wordIndex++;
    console.log(this.wordsArray);
  }

  onClickFillText(){
    this.wordIndex=0;
    this.newWord();
    var index = 0;
    (<HTMLInputElement>document.getElementById("textTowrite")).innerHTML='';
    for(let word of this.wordsArray){
      var Wordindex = 'word-' + index;
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


  }

  ngOnInit(): void{
    this.onClickFillText();
    }

}

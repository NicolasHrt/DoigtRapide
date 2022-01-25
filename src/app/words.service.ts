import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  getWords(number:number){
    let url = "https://random-word-api.herokuapp.com/word?number=" + number;
    return this.http.get(url);
  }
}

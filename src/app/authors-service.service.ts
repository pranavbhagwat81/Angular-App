import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {
  authors = [];
  constructor() { 
    this.authors = ["authors 1","authors 2","authors 3"]  }

    getAuthors(){
      return this.authors;
    }
}

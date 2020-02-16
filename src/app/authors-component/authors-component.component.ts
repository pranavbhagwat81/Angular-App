import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from '../authors-service.service'

@Component({
  selector: 'app-authors-component',
  templateUrl: './authors-component.component.html',
  styleUrls: ['./authors-component.component.css']
})
export class AuthorsComponentComponent implements OnInit {

  authors = [];
  constructor(author:AuthorsServiceService) { 
    this.authors = author.getAuthors();
  }

  ngOnInit(): void {
  }


}

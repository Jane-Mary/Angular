import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent {
 isLoggedIn: boolean = true;
 token: string = ''
 marks = [10,20,30,15,23,45,60,80]
 users = [
  {
    username: 'Jane',
    age: 18,
    gender: 'female',
    profession: 'student'
  },
  {
    username: 'Jane',
    age: 18,
    gender: 'female',
    profession: 'student'
  },
  {
    username: 'Jane',
    age: 18,
    gender: 'female',
    profession: 'student'
  },
 ]
}

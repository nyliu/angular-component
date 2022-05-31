import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {

  traineeList: Trainee[] = [
    new Trainee("Amar", "Reddy", 33, "Angular"),
    new Trainee("Lucy", "Johnson", 23, "Java"),
    new Trainee("David", "Leo", 36, "React"),
    new Trainee("Sunny", "Luis", 32, "Angular"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

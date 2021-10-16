import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';
import { GithubUsers } from 'src/app/models/github-users';
import { Repositories } from 'src/app/models/repositories';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  users!: GithubUsers;
  repositories: Repositories[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


import { GithubServiceService } from 'src/app/services/github-service.service';
import { GithubUsers } from 'src/app/models/github-users';
import { Repositories } from 'src/app/models/repositories';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  users!: GithubUsers;
  repositories: Repositories[] = [];

  constructor(public userService: GithubServiceService) { }

  ngOnInit(): void {
    this.githubUser('Kipkorir-Gideon');
  }
  githubUser(user: string) {
    this.userService.githubUsers(user).then((success) => {
      this.users = this.userService.users;
    },
    (error) => {
      console.log(error);
    });
    this.userService.findRepositories(user).then((success) => {
      this.repositories = this.userService.repositories;
    });
  }

}

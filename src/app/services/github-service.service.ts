import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUsers } from '../models/github-users';
import { Repositories } from '../models/repositories';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  users!: GithubUsers;
  repositories: Repositories[] = [];

  constructor(private http: HttpClient) { }

  githubUsers(userName: string) {
    interface accountInterface {
      avatar_url:any,
      login:string,
      followers:any,
      following:any,
      public_repos:any,
      location:any
    }
    let urlAccount = 'https://api.github.com/users/' + userName;

    let promise = new Promise((resolve, reject) => {
      this.http.get<accountInterface>(urlAccount).toPromise().then((result) => {
        this.users = result;
        console.log(this.users)
        resolve(result);
      },
      (error) => {
        console.log();
        reject()
      })
    });
    return promise;
  }

  findRepositories(userName: string) {
    interface repoInterface {
      name:String,
      description:string,
      created_at:Date
    }

    let urlRepo = 'https://api.github.com/users/' + userName + '/repos';

    let promise = new Promise((resolve, reject) => {
      this.http.get<repoInterface[]>(urlRepo).toPromise().then((results) => {
        this.repositories = [];
        for (let i = 0; i < results.length; i++) {
          let repo = new Repositories(results[i].name, results[i].description, results[i].created_at);
          this.repositories.push(repo);
        }
        console.log(results);
        resolve(results);
      },
      (error) => {
        console.log();
        reject();
      });
    });
    return promise;

  }
}

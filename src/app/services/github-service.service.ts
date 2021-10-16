import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUsers } from '../models/github-users';
import { Repositories } from '../models/repositories';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  users!: GithubUsers;
  repositories: Repositories[] = [];

  constructor(private http: HttpClient) { }

  githubUsers(userName: string) {
    interface accountInterface {
      avatar:any,
      followers:any,
      following:any,
      publicRepos:any,
      location:any
    }
    let urlAccount = 'https://api.github.com/users/' + userName;

    let promise = new Promise((resolve, reject) => {
      this.http.get<accountInterface>(urlAccount).toPromise().then((result) => {
        this.users = result;
        resolve(result);
      },
      (error) => {
        reject()
      })
    });
    return promise;
  }

  findRepositories()
}

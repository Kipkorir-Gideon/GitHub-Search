import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  githubUsers(userName: string) {

  }
}

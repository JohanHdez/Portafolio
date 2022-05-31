import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/JohanHdez/repos';

  constructor(private httpClient: HttpClient) {  }

  loadRepos = () => this.httpClient.get(`${this.url}`);

}

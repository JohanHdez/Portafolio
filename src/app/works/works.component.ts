import { Component, OnInit } from '@angular/core';
import {GithubService} from "../github.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public repo: any;
  public config: any;
  constructor( private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.loadRepos().subscribe( response => {
      this.repo = response;
    })
  }

}

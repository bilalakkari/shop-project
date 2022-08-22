import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'my-store';
  storeName: string = "Curtis's Store: The Pinnacle of E-Commerce™";

  linkedinImg: string = "assets/linkedin_icon.png";
  githubImg: string = "assets/github_icon.png";

  linkedinUrl: string = "https://www.linkedin.com/in/curtisbabin/";
  repoUrl: string = "https://github.com/CurtisGrayeBabin/my-store";

  constructor() { }
}
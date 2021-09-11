import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article =new Article('','');
  }

    voteUp(): boolean {
      this.article.voteUp();
      return false;
    }
      
    voteDown(): boolean {
      this.article.voteDown();
      return false;
    }

  ngOnInit(): void {
  }

}

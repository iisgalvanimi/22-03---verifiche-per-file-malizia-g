import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post : Post;
  nLike : number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  like()
  {
    this.nLike ++;
  }

  commenta(commento : string)
  {
    this.post.commentList.push(commento);
  }

}

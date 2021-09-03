import { Post } from './../model/Post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('http://localhost:3000/posts')
  }

  postMensagem(post: Post){
    return this.http.post('http://localhost:3000/posts', post)
  }
}

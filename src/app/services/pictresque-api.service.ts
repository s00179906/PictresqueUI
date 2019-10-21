import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictresqueAPIService {
  url: String = 'https://pictresque-api.herokuapp.com';
  fileToUpload: any;
  constructor(private _http: HttpClient) {}

  getAllPosts = () => {
    return this._http.get(`${this.url}/api/feed`);
  };

  uploadImage = (file: FileList, title, desc) => {
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);

    let formData = new FormData();
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('title', title);
    formData.append('description', desc);
    console.log(formData);
    return this._http.post(`${this.url}/api/post`, formData);
  };

  registerUser = (email, password) => {
    const newUser = {
      email,
      password
    };
    return this._http.post(`${this.url}/api/register`, newUser);
  };

  loginUser = (email, password) => {
    const newUser = {
      email,
      password
    };
    return this._http.post(`${this.url}/api/login`, newUser);
  };

  getSinglePost = id => {
    return this._http.post(`${this.url}/api/post/${id}`, null);
  };
}
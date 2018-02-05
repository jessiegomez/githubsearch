import { Injectable }  from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private username: string;
    private client_id: '6c140c73c22829feca61';
    private client_secret: '9646aef49bab65546e78aa45dd3378a8673164cd';

    constructor(private _http: Http){
        console.log("Github Service Ready");
        this.username = 'jessiegomez';        
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret' + this.client_secret)
        .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}

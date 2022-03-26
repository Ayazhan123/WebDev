import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class AlbumsService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get('http://localhost:3000/albums')
    }
}


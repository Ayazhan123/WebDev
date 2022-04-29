import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';

import { AlbumService } from '../../services/album.service';


@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {

    albums!: Album[];

    constructor(private albumService: AlbumService) { }


    ngOnInit() {
        this.getAlbums();
    }


    getAlbums() {
        this.albumService.getAlbums()
            .subscribe(data => this.albums = data.results);
    }


    add(name: string, description: string, price: number) {
        name = name.trim();
        if (!name) { return; }

        description = description.trim();
        if (!description) { return; }

        if (!price) { return; }

        this.albumService.addAlbum({ name, description, price } as Album)
            .subscribe(data => {
                this.albums.push(data);
            });
    }


    delete(album: Album) {
        this.albums = this.albums.filter(p => p !== album);
        this.albumService.deleteAlbum(album).subscribe();
    }
}
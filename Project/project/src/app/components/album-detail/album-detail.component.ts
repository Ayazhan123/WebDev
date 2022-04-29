import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../models/album';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumService } from '../../services/album.service';


@Component({
    selector: 'app-album-detail',
    templateUrl: './album-detail.component.html',
    styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {

    @Input() album!: Album;

    constructor(
        private route: ActivatedRoute,
        private albumService: AlbumService,
        private location: Location
    ) { }


    ngOnInit() {
        this.getAlbum();
    }


    getAlbum() {
        const pk = +this.route.snapshot.paramMap.get('pk');
        this.albumService.getAlbum(pk)
            .subscribe(album => this.album = album);
    }


    goBack() {
        this.location.back();
    }


    save() {
        this.albumService.updateAlbum(this.album)
            .subscribe(() => this.goBack());
    }
}
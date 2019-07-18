import { Component, OnInit } from '@angular/core';


@Component({ 
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  alternate
  shows = [
    {
      "_id": "tt1430509",
      "imdb_id": "tt1430509",
      "tvdb_id": "80226",
      "title": "Inspector George Gently",
      "year": "2008",
      "slug": "inspector-george-gently",
      "num_seasons": 1,
      "images": {
        "poster": "http://image.tmdb.org/t/p/w500/pBYbpf5HpNdXLys6qX99oyL3Wct.jpg",
        "fanart": "http://image.tmdb.org/t/p/w500/2KYnCggAtUHZnqY78m3WvzMIvoM.jpg",
        "banner": "http://image.tmdb.org/t/p/w500/pBYbpf5HpNdXLys6qX99oyL3Wct.jpg"
      },
      "rating": {
        "percentage": 85,
        "watching": 0,
        "votes": 69,
        "loved": 100,
        "hated": 100
      }
    
  },
  {
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg",
      "fanart": "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
      "poster": "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg"
    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  }
  ,{
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg",
      "fanart": "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
      "poster": "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg"
    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  },
  {
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg",
      "fanart": "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
      "poster": "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg"
    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  },
  {
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg",
      "fanart": "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
      "poster": "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg"
    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  },
  {
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg",
      "fanart": "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
      "poster": "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg"
    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  }
 
]
  constructor() { }


  ngOnInit() {
  }

}

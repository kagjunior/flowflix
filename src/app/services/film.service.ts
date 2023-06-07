import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "../models/film";
import {Observable} from "rxjs";
import {Extrait} from "../models/extrait";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  videos  = [
    {
      id_film: 1,
      title: 'Matilda',
      description: 'lorem ipsum dolor unset nor esr et trhheyhzjzlaa',
      disponible: 'Netflix',
      extraits : [
        {
          id_extrait: 1,
          src: '../../../assets/Video_23-05-04_19-45-12.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 2,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        },
        {
          id_extrait: 3,
          src: '../../../assets/Video_23-05-04_19-45-12.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 4,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        }
      ]
    },
    {
      id_film: 2,
      title: 'Youtube',
      description: 'lorem ipsum dolor unset nor esr et trhheyhzjzlaa',
      disponible: 'Amazone prime',
      extraits : [
        {
          id_extrait: 1,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 2,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        },
        {
          id_extrait: 3,
          src: '../../../assets/Video_23-05-04_19-45-12.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 4,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        }
      ]
    },
    {
      id_film: 3,
      title: 'Manifest',
      description: 'lorem ipsum dolor unset nor esr et trhheyhzjzlaa',
      disponible: 'Netflix',
      extraits : [
        {
          id_extrait: 1,
          src: '../../../assets/Video_23-05-07_22-27-46.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 2,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        },
        {
          id_extrait: 3,
          src: '../../../assets/Video_23-05-04_19-45-12.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 4,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        }
      ]
    },
    {
      id_film: 4,
      title: 'Youtube',
      description: 'lorem ipsum dolor unset nor esr et trhheyhzjzlaa',
      disponible: 'Amazone prime',
      extraits : [
        {
          id_extrait: 1,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 2,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        },
        {
          id_extrait: 3,
          src: '../../../assets/Video_23-05-04_19-45-12.mov',
          commentaire: 'Partie 1, le client ne voit pas le danger'
        },
        {
          id_extrait: 4,
          src: '../../../assets/Video_23-05-04_02-02-58.mov',
          commentaire: 'Partie 2, le chien pas le danger'
        }
      ]
    },
  ];
  url = 'http://localhost:3300';
  constructor(private http: HttpClient) { }

  public deleteFilmById(id: any): Observable<Film> {
    return this.http.delete<Film>(this.url + '/film/' + id);
  }
  public deleteExtraitById(id: any): Observable<Extrait> {
    return this.http.delete<Extrait>(this.url + '/extrait/' + id);
  }
  public addVideo(video: any): Observable<Film> {
    return this.http.post<Film>(this.url + '/upload', video);
  }
  public addExtrait(extrait: any): Observable<Extrait> {
    return this.http.post<Extrait>(this.url + '/extrait', extrait);
  }

  public getVideo(): Observable<Film[]>{
    return this.http.get<Film[]>(this.url);
  }

  public getExtraitsFilm(id: any): Observable<Extrait[]> {
    return this.http.get<Extrait[]>(this.url + '/extrait/' + id);
  }
  public getUserVideo(id: any): Observable<Film[]> {
    return this.http.get<Film[]>(this.url + '/user/film/' + id)
  }
}

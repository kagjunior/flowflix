import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  videos = [
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
  @ViewChild('video') videoElement?: HTMLElement;
  public videoNo = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.video?.onplay()
   
  }
  public scrollOff() {
    this.videoNo--;
       if(this.videoNo >= 0) {
        let id = this.videoNo + 'video';
        document.getElementById(id)!.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        }); 
       }         
        if(this.videoNo < 0) {
          this.videoNo = 0;
        }
  }

  public scrollOn() {
      this.videoNo++;
       if(this.videoNo > this.videos.length) {
         this.videoNo = this.videos.length;
       } 
       if(this.videoNo < this.videos.length) {
        let id = this.videoNo + 'video';
        document.getElementById(id)!.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        }); 
       }
  }


  public goToAddVideo() {
    this.router.navigate(['/add-video']);
  }

}

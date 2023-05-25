import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList, ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit, AfterViewInit {

  @Input() videoInput: any
  @ViewChild('flixVideo') element!: ElementRef;
  @ViewChildren('flixVideo') playVideos!: QueryList<any>;
  nowplaying = null;
  public isShadow: boolean = false;
  @HostListener("window:scroll")
  didScroll() {
    if(this.nowplaying && this.isVideoViewPort(this.nowplaying)) return;
    else if(this.nowplaying && !this.isVideoViewPort(this.nowplaying)) {
      // @ts-ignore
      this.nowplaying.pause();
      this.nowplaying = null;
    }
    this.playVideos.forEach(player => {
      //console.log(player);
      if(this.nowplaying) return;
      const nativeElement = player.nativeElement;
      const inView = this.isVideoViewPort(nativeElement);
      if(inView) {
        this.nowplaying = nativeElement;
        // @ts-ignore
        this.nowplaying.play();
        // @ts-ignore
        //this.nowplaying!.on('play')
      }
    })
  }
  public src: string = '';
  constructor() { }

  ngOnInit(): void {
    //console.log(this.videoInput)
    this.isShadow = false;
  }
  close() {
    this.element.nativeElement.style.display = 'none';
  }
  modal(src: string, id:number) {
    this.src = src;
    this.element.nativeElement.style.display = 'block';
  }
  ngAfterViewInit() {
    this.didScroll();
  }

  isVideoViewPort(el: any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}

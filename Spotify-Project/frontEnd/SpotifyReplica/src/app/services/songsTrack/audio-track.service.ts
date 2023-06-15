import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioTrackService {

  constructor() { }
  audio = new Audio();
  playAudio(songPath:string){
    this.audio.src=songPath;
    this.audio.load();
    this.audio.play();
  }
  pauseAudio(){
      this.audio.pause();
  }
}

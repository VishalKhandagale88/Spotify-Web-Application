import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { playlist } from '../model/Playlist';
import { Song } from '../model/Songs';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { NotificationService } from '../services/notification/notification.service';
import { AudioTrackService } from '../services/songsTrack/audio-track.service';

@Component({
  selector: 'app-viewsingleplaylist',
  templateUrl: './viewsingleplaylist.component.html',
  styleUrls: ['./viewsingleplaylist.component.css']
})
export class ViewsingleplaylistComponent implements OnInit{

  constructor(private loginService:UserLogInService,
    private userService:SpotifyUserService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private notificationService:NotificationService,
    private audioService:AudioTrackService ){}
  selectedPalaylist:any|undefined;
  nameOfPlaylist:any;
  noSongsPresentInPlayList:boolean=false;
  songsNotFoundError=null;
  songNotFoundMessage:boolean=false
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((parameter)=>{
       this.nameOfPlaylist = parameter.get('name')??0;
    this.notificationService.displayNotification(`opening ${this.nameOfPlaylist}`,"please wait");
      this.userService.featchAllSongsfromPlayList(this.nameOfPlaylist,this.loginService.loginToken).subscribe(data=>{
        this.selectedPalaylist=data;
        console.log(this.selectedPalaylist.length);
        if(this.selectedPalaylist.length==0){
          this.noSongsPresentInPlayList=true;
          this.songNotFoundMessage=true
        }
      },(error)=>{
        this.songsNotFoundError=error.error;
      });
    });
  }
  deleteSong(songName:string){
    this.userService.removeSongFromPlayLsit(this.nameOfPlaylist,songName,this.loginService.loginToken).subscribe(data=>{`${data.name} is deleted from ${this.nameOfPlaylist}`;});
    this.route.navigateByUrl("viewPlaylist");
  }
  playSelectedSong(songPath:string){
    this.audioService.playAudio(songPath);
  }
  pauseSelectedSong(){
    this.audioService.pauseAudio();
  }
}

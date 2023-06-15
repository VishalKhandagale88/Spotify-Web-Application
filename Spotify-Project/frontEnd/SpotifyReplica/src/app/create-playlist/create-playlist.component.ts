import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { playlist } from '../model/Playlist';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { NotificationService } from '../services/notification/notification.service';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {
  constructor(private userService:SpotifyUserService,
    private loginService:UserLogInService,
    private router:Router,
    private snackBarNotification:NotificationService,
     ){}

  userPlaylist:playlist={
    name: '',
    song: [
      {
        name: "",
        artist: "",
        file: ""
      }
    ]
    }
  songs:any;
  playlistname:any;
  selectedSongObject: any;
  playlistAlreadyExists:boolean=false;
  playlistAlreadyExistsErrorMessage=null;
  getAllSongsToSelect(){
    this.userService.getAllSongsForAllUsers().subscribe(song=>{this.songs=song;console.log(song)});
    console.log(this.selectedSongObject);
  }
  getDetails(){
    console.log(this.playlistname);
    console.log(this.selectedSongObject);
    this.userPlaylist['name']=this.playlistname;
    this.userPlaylist.song[0]=this.selectedSongObject;
    console.log("playlist "+this.userPlaylist);

    if(this.playlistname!=undefined ){
      if( this.selectedSongObject!=undefined){
        if(this.loginService.isLoggendIn && this.loginService.loginToken !=null){
          this.userService.addPlaylist(this.userPlaylist,this.loginService.loginToken).subscribe(data=>{
            this.snackBarNotification.displayNotification(`created playlist is with name ${this.userPlaylist.name} `,"created");
            this.router.navigateByUrl("viewPlaylist")
          },(error)=>{
            console.log(error.error);
            this.playlistAlreadyExists=true;
            this.playlistAlreadyExistsErrorMessage=error.error
          });
        }else{
          this.snackBarNotification.displayNotification("please log in ","log in")
          this.router.navigateByUrl("login");
        }
      }

    }
    this.snackBarNotification.displayNotification("please enter name of playlist and select one song from drop down","playlist name and song are missing");
  }

}

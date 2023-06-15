import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { playlist } from '../model/Playlist';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { Song } from '../model/Songs';
import { MatDialog } from '@angular/material/dialog';
import { DialogeBoxComponent } from '../dialoge-box/dialoge-box.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {

  // properties to display playlistNotFoundError meaasges
  playlistIsEmpty: boolean = false;
  playlistNotFoundError = null;

  hideSnackBar = false;

  usersPlayList: playlist | any;
  constructor(private userService: SpotifyUserService,
    private loginService: UserLogInService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbarNotification: NotificationService,
    private dialog: MatDialog,
  ) { this.getAllPlayListOfUser() }
  noPlaylistWithUser:boolean=false;
  getAllPlayListOfUser() {
      if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null) {
        this.userService.displayPlaylist(this.loginService.loginToken)
          .subscribe(data => {
            this.usersPlayList = data;
            if(this.usersPlayList.length==0){
              this.noPlaylistWithUser=true;
              this.snackbarNotification.displayNotification("no playlists to show","add playlists")
            }else{
              this.noPlaylistWithUser=false;
            }
          }, (error) => {
            console.log(error);
            this.playlistNotFoundError = error.error;
          }
          );
      }
      else {
        this.hideSnackBar = true
        this.snackbarNotification.displayNotification("Log in to check your playlists", "log in to spotify");
        this.router.navigateByUrl("login");
      }
    }

  deletePlayList(playlistname: string) {
    if (this.nameOfSong === "" || this.nameOfSong === undefined) {
      var deleteplaylist = confirm(`confirm that you are deleting ${playlistname}`);
      if (deleteplaylist) {
        this.userService.removePlaylistOfUser(playlistname, this.loginService.loginToken)
        .subscribe(data => {this.snackbarNotification.displayNotification(`deletin ${playlistname}`,"please wait") ;
         this.router.navigateByUrl("viewPlaylist"); });
      }
    } else {
      this.snackbarNotification.displayNotification("You can't delete playlist while adding song", "not allowed");
    }

  }

  songIsAlreadyExistsError=null;
  songExistsMessage:boolean=false;

  selectedSongObj: Song | any;
  addSongHere(playlistName: string) {
    // get the particular song and add here
    if (this.nameOfSong == "") {
      // adding dialog box here
      this.dialog.open(DialogeBoxComponent);
    } else {
      this.userService.getSingleSong(this.nameOfSong).subscribe(data => {
        this.selectedSongObj = data;
        this.userService.addSongToplayList(data, playlistName, this.loginService.loginToken).subscribe(data =>
          { this.snackbarNotification.displayNotification(`${this.nameOfSong} is added in ${playlistName}`,"success") },
        (error)=>{
          console.log(error);
          this.songIsAlreadyExistsError=error.error;
          this.songExistsMessage=true;
          this.snackbarNotification.displayNotification(this.nameOfSong+" song is already exists in "+playlistName,"try adding in other");
        });
      },);
    }
  }

  nameOfSong: undefined | any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameter) => {
      this.nameOfSong = parameter.get('name') ?? '';
    });
  }


}


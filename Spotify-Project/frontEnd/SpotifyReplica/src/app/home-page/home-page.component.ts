import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { NotificationService } from '../services/notification/notification.service';
import { HttpRequest } from '@angular/common/http';
import { AudioTrackService } from '../services/songsTrack/audio-track.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private userService: SpotifyUserService,
    private loginService: UserLogInService,
    private snackbarNotification: NotificationService,
    private audioService: AudioTrackService
  ) { this.getAllSongs() }

  allSongs: any

  getAllSongs() {
    this.userService.getAllSongsForAllUsers().subscribe(data => { this.allSongs = data });
  }

  playSong(songPath: string) {
    if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null) {
      this.audioService.playAudio(songPath);
    } else {
      this.snackbarNotification.displayNotification("please log in to listen song", "log in")
    }
  }
  pauseSongTrack() {
    this.audioService.pauseAudio();
  }


}

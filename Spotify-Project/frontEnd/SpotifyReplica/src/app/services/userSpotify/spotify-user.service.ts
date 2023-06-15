import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { Observable } from 'rxjs';
import { playlist } from 'src/app/model/Playlist';
import { Song } from 'src/app/model/Songs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyUserService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:8079/spotify"

  //Registe user
  registerUserToSpotify(user:User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/registerToSpotify`,user);
  }

  //Add playlist to user
  addPlaylist(playlist:playlist,header:any): Observable<Array<playlist>>{
    // alert(header.get("Authorization"));
    return this.httpClient.post<Array<playlist>>(`${this.baseUrl}/user/addPlaylist`,playlist,{headers:header});
  }

  // fetch all the data of playlist
  displayPlaylist(header:any):Observable<Array<playlist>>{
    return this.httpClient.get<Array<playlist>>(`${this.baseUrl}/user/getAllPlaylist`,{headers:header});
  }

  // fetch all songs of particular playlist
  featchAllSongsfromPlayList(playlistName:any,header:any):Observable<Song>{
    return this.httpClient.get<Song>(`${this.baseUrl}/user/getAllSongsOfPlaylist/${playlistName}`,{headers:header});
  }

  //deleting song form playlist
  removeSongFromPlayLsit(playlistName:any,songname:any,header:any):Observable<Song>{
    return this.httpClient.delete<Song>(`${this.baseUrl}/user/deleteSong/${playlistName}/${songname}`,{headers:header});
  }

  //DeletePlaylist
  removePlaylistOfUser(playListName:string,header:any):Observable<playlist>{
    return this.httpClient.delete<playlist>(`${this.baseUrl}/user/deletePalyList/${playListName}`,{headers:header});
  }

  // get all songs to playlist
  getAllSongsForAllUsers():Observable<Array<Song>>{
    return this.httpClient.get<Array<Song>>("http://localhost:8079/spotify/getALlSongs");
  }
  // get single song
  getSingleSong(songName:string):Observable<Song>{
    return this.httpClient.get<Song>(`${this.baseUrl}/getParticularSong/${songName}`);
  }

  // add song to playlist of user
  addSongToplayList(song:any,playlistName:string,header:any):Observable<Song>{
    return this.httpClient.post<Song>(`${this.baseUrl}/user/addSongsToPlayList/${playlistName}`,song,{headers:header});
  }



}

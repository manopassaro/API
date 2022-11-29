import { ISongModel } from '../model/music.model';
import { SongDto } from './musicDto/musicInput.dto';
import { randomUUID } from 'crypto';
import { PartialSongDto } from './musicDto/partialMusic.dto';

export class SongService {
  private songs: ISongModel[] = [];

  async getAllSongs(): Promise<ISongModel[]> {
    return this.songs;
  }

  async getById(songId: string): Promise<ISongModel> {
    const existSong = this.songs.find((song) => song.id === songId);
    if (!existSong) {
      throw new Error('Song not exist');
    }
    return existSong;
  }

  async createSong(song: SongDto): Promise<ISongModel> {
    const songModel = { ...song, id: randomUUID() };
    this.songs.push(songModel);
    return songModel;
  }

  async updateSong(songData: PartialSongDto): Promise<ISongModel> {
    this.songs.map((song, index) => {
      if (song.id === songData.id) {
        const updatedSong = Object.assign(song, songData);
        this.songs.splice(index, 1, updatedSong);
      }
    });
    const updatedSong = this.songs.find((song) => song.id === songData.id);
    return updatedSong;
  }

  async deleteSong(songId: string): Promise<boolean> {
    const existSong = this.songs.find((song) => song.id === songId);
    if (!existSong) {
      return false;
    }
    this.songs.map((song, index) => {
      if (song.id === songId) {
        this.songs.splice(index, 1);
      }
    });
    return true;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Patch,
  Param,
} from '@nestjs/common';
import { SongService } from '../services/music.service';
import { ISongModel } from 'src/user/model/user.model';
import { SongDto } from '../services/musicDto/musicInput.dto';
import { PartialSongDto } from '../services/musicDto/partialMusic.dto';

@Controller()
export class SongController {
  constructor(private service: SongService) {}

  @Get('/songs')
  async getAllSongs(): Promise<ISongModel[]> {
    try {
      return await this.service.getAllSongs();
    } catch (err) {
      console.log(err);
    }
  }

  @Get('/songs/:id')
  async getById(@Param('id') songId: string): Promise<ISongModel> {
    try {
      return await this.service.getById(songId);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('/songs')
  async createSong(
    @Body() { name, album, albumCover }: SongDto,
  ): Promise<ISongModel> {
    try {
      return await this.service.createSong({
        name,
        album,
        albumCover,
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Patch('/songs')
  async updateUser(@Body() songData: PartialSongDto): Promise<ISongModel> {
    try {
      return await this.service.updateSong(songData);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete('/songs/:id')
  async deleteUser(@Param('id') songId: string): Promise<string> {
    try {
      const songDeleted = await this.service.deleteSong(songId);
      if (songDeleted) {
        return 'Song deleted successfully';
      } else {
        return 'Song not found';
      }
    } catch (err) {
      console.log(err);
    }
  }
}

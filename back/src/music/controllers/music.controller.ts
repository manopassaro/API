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
import { ISongModel } from '../model/music.model';
import { SongDto } from '../services/musicDto/musicInput.dto';
import { PartialSongDto } from '../services/musicDto/partialMusic.dto';

@Controller()
export class SongController {
  constructor(private service: SongService) {}

  @Get('/songs')
  async getAllSongs(): Promise<ISongModel[]> {
    try {
      return await this.service.getAllSongs();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/songs/:id')
  async getById(@Param('id') songId: string): Promise<ISongModel> {
    try {
      return await this.service.getById(songId);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/songs')
  async updateUser(@Body() songData: PartialSongDto): Promise<ISongModel> {
    try {
      return await this.service.updateSong(songData);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  }
}

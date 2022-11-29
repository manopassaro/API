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

  @Get()
  async getAllSongs(): Promise<ISongModel[]> {
    try {
      return await this.service.getAllSongs();
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  async getById(@Param('id') songId: string): Promise<ISongModel> {
    try {
      return await this.service.getById(songId);
    } catch (err) {
      console.log(err);
    }
  }

  @Patch()
  async updateUser(@Body() songData: PartialSongDto): Promise<ISongModel> {
    try {
      return await this.service.updateSong(songData);
    } catch (err) {
      console.log(err);
    }
  }
}

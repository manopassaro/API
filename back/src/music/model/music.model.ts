import { SongDto } from '../services/musicDto/musicInput.dto';

export interface ISongModel extends SongDto {
  id: string;
}

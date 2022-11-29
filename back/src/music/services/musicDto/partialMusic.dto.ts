import { PartialType } from '@nestjs/swagger';
import { SongDto } from './musicInput.dto';

export class PartialSongDto extends PartialType(SongDto) {
  id: string;
}

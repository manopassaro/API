import { ApiProperty } from '@nestjs/swagger';

export class SongDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  album: string;

  @ApiProperty()
  albumCover: string;
}

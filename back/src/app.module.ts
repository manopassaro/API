import { Module } from '@nestjs/common';
import { UserController } from './user/controllers/user.controller';
import { SongController } from './music/controllers/music.controller';
import { UserService } from './user/services/user.service';
import { SongService } from './music/services/music.service';

@Module({
  controllers: [UserController, SongController],
  providers: [UserService, SongService],
})
export class AppModule {}

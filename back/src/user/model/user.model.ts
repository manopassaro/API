import { UserDto } from '../services/dto/userInput.dto';

export interface IUserModel extends UserDto {
  id: string;
}

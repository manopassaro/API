import { UserDto } from '../services/userDto/userInput.dto';

export interface IUserModel extends UserDto {
  id: string;
}

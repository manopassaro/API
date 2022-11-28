import { IUserModel } from '../model/user.model';
import { UserDto } from './dto/userInput.dto';
import { randomUUID } from 'crypto';

export class UserService {
  private users: IUserModel[] = [];

  async createUser(user: UserDto): Promise<IUserModel> {
    const userModel = { ...user, id: randomUUID() };
    this.users.push(userModel);
    return userModel;
  }

  async uptadeUser(user: UserDto): Promise<IUserModel> {}
}

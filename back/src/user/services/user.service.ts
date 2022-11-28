import { IUserModel } from '../model/user.model';
import { UserDto } from './dto/userInput.dto';
import { randomUUID } from 'crypto';
import { PartialUserDto } from './dto/partialUser.dto';

export class UserService {
  private users: IUserModel[] = [];

  async createUser(user: UserDto): Promise<IUserModel> {
    const userModel = { ...user, id: randomUUID() };
    this.users.push(userModel);
    return userModel;
  }

  async uptadeUser(userData: PartialUserDto): Promise<IUserModel> {
    this.users.map((user, index) => {
      if (user.id === userData.id) {
        const updatedUser = Object.assign(user, userData);
        this.users.splice(index, 1, updatedUser);
      }
    });
    const updatedUser = this.users.find((user) => user.id === userData.id);
    return updatedUser;
  }
}

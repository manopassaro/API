import { Body, Controller, Get, Post, Patch } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IUserModel } from '../model/user.model';
import { UserDto } from '../services/dto/userInput.dto';
import { PartialUserDto } from '../services/dto/partialUser.dto';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUser(): Promise<IUserModel[]> {
    return await this.service.getAllUsers();
  }

  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserModel> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Post()
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto,
  ): Promise<IUserModel> {
    try {
      return await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

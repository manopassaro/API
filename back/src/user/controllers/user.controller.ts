import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Patch,
  Param,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IUserModel } from '../model/user.model';
import { UserDto } from '../services/userDto/userInput.dto';
import { PartialUserDto } from '../services/userDto/partialUser.dto';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get('/users')
  async getAllUser(): Promise<IUserModel[]> {
    try {
      return await this.service.getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/users/:id')
  async getById(@Param('id') userId: string): Promise<IUserModel> {
    try {
      return await this.service.getById(userId);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/users')
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserModel> {
    try {
      return await this.service.updateUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('/users')
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
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/users/:id')
  async deleteUser(@Param('id') userId: string): Promise<string> {
    try {
      const userDeleted = await this.service.deleteUser(userId);
      if (userDeleted) {
        return 'User deleted successfully';
      } else {
        return 'User not found';
      }
    } catch (error) {
      console.log(error);
    }
  }
}

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
import { UserDto } from '../services/dto/userInput.dto';
import { PartialUserDto } from '../services/dto/partialUser.dto';
import { throws } from 'assert';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUser(): Promise<IUserModel[]> {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') userId: string): Promise<IUserModel> {
    try {
      return await this.service.getById(userId);
    } catch (err) {
      console.log(err);
    }
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

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<string> {
    try {
      const userDeleted = await this.service.deleteUser(userId);
      if (userDeleted) {
        return 'User deleted successfully';
      } else {
        return 'User not found';
      }
    } catch (err) {
      console.log(err);
    }
  }
}

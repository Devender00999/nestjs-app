import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  getUser(@Param('email') email: string): User {
    return this.userService.getUser(email);
  }

  @Post()
  addUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  deleteUser(@Param('email') email: string): User {
    return this.userService.getUser(email);
  }
}

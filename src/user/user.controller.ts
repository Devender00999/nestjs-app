import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto, UserParamDto } from './dto/user.dto';
import { User } from './interface/user';
import { UserService } from './user.service';
import { HttpExceptionFilter } from './filter';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  @UsePipes(new ValidationPipe())
  getUser(@Param() params: UserParamDto): User {
    return this.userService.getUser(params.email);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(HttpExceptionFilter)
  addUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  @UsePipes(new ValidationPipe())
  deleteUser(@Param() params: UserParamDto): User {
    return this.userService.deleteUser(params.email);
  }
}

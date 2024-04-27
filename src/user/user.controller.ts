import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import * as Joi from 'joi';
import { UserDto, UserParamDto } from './dto/user.dto';
import { User } from './interface/user';
import { JoiValidationPipe } from './pipe';
import { UserService } from './user.service';

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
  @UsePipes(
    new JoiValidationPipe(
      Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().min(6).required(),
      }),
    ),
  )
  // @UseFilters(HttpExceptionFilter)
  addUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  @UsePipes(new ValidationPipe())
  deleteUser(@Param() params: UserParamDto): User {
    console.log(params);
    return this.userService.deleteUser(params.email);
  }
}

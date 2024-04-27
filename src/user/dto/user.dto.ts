import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  username: string;
}

export class UserParamDto {
  @IsEmail()
  @IsDefined()
  email: string;
}

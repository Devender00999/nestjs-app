import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  private users: User[] = [
    { email: 'devender@gmail.com', username: 'devender' },
    { email: 'andrew@gmail.com', username: 'andrew' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): User {
    const user = this.users.find((user) => user.email === email);
    if (!user) throw new NotFoundException('User not found');
    return this.users.find((user) => user.email === email);
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User {
    const user = this.users.find((user) => user.email === email);
    if (!user) throw new BadRequestException('User not found');
    this.users = this.users.filter((user) => user.email !== email);
    return user;
  }
}

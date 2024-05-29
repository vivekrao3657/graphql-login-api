import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'username1',
      password: 'password1',
    },
    {
      id: 1,
      username: 'username2',
      password: 'password2',
    },
  ];

  validateUser(username: string, password: string): boolean {
    for (const user of this.users) {
      if (user.username === username && user.password === password) {
        return true;
      }
    }
    return false;
  }
}

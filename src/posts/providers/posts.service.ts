import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  getPosts(userId: string) {
    const user = this.usersService.findUserById(userId);
    return [
      {
        id: 1,
        userId: userId,
        user: user,
        title: 'First Post',
        content: 'This is the first post.',
      },
      {
        id: 2,
        userId: userId,
        user: user,
        title: 'Second Post',
        content: 'This is the second post.',
      },
    ];
  }
}

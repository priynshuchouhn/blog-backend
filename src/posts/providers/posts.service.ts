import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Posts Service
 */
@Injectable()
export class PostsService {
  /**
   * Constructor
   * @param usersService Users Service
   */
  constructor(
    /**
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
  ) {}

  /**
   * Method to find all posts for a user
   * @param userId User ID
   * @returns List of posts
   */
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Title 2',
        content: 'Test Content 2',
      },
    ];
  }
}

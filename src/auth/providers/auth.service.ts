import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Auth Service
 * authentication related operations
 */
@Injectable()
export class AuthService {
  /**
   * Constructor
   * @param usersService Users Service
   */
  constructor(
    // Injecting UserService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  /**
   * Login method
   * @param email User Email
   * @param password User Password
   * @param id User ID
   * @returns JWT Token
   */
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findOneById(id);
    console.log(user);
    // login
    return 'SAMPLE_TOKEN';
  }

  /**
   * Check if user is authenticated
   * @returns boolean
   */
  public isAuth() {
    return true;
  }
}

import { AuthService } from 'src/auth/providers/auth.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /*
   * Method to find all the users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    console.log(getUsersParamDto, limt, page);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /*
   * Find a user by ID
   */
  public findOneById(id: string) {
    return {
      id: id,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}

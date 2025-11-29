import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  findUserByEmail(email: string) {
    return { id: 1, name: 'John Doe', email: email, password: 'password123' };
  }
  findUserById(userId: string) {
    return { id: userId, name: 'User ' + userId };
  }
  createUser(body: any) {
    return { message: 'User created', user: body };
  }
  getUsers(params: any, limit: number, offset: number) {
    const isAuthenticated = this.authService.isAuthenticated(params.id);
    console.log('Is Authenticated:', isAuthenticated);
    console.log(
      'Fetching users with params:',
      params,
      'limit:',
      limit,
      'offset:',
      offset,
    );
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
  }
}

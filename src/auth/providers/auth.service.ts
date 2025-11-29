import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  login(body: any) {
    const { email, password } = body;
    const user = this.usersService.findUserByEmail(email);
    if (user && user.password === password) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid credentials' };
    }
  }

  isAuthenticated(userId: string) {
    const user = this.usersService.findUserById(userId);
    return !!user;
  }
}

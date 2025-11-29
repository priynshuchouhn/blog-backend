import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser(body: any) {
    return { message: 'User created', user: body };
  }
  getUsers(params: any, limit: number, offset: number) {
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

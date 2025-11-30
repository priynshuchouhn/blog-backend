import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUsersParamDto } from './dtos/get-user-param.dto';

/**
 * Users Controller
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  /**
   * Constructor
   * @param usersService Users Service
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Get Users with Pagination
   * @param params
   * @param limit
   * @param page
   * @returns
   */
  @ApiOperation({ summary: 'Get Users with Pagination' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of users to return',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  @ApiResponse({ status: 200, description: 'List of users' })
  @Get(':id')
  getUsers(
    @Param() params: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(params, limit, page);
  }
}

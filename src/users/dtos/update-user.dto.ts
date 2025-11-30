import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

/**
 * Update User DTO
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}

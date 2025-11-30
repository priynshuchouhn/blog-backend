import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

/**
 * Update Post DTO
 */
export class UpdatePostDto extends PartialType(CreatePostDto) {}

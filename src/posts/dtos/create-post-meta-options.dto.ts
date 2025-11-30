import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Create Post Meta Options DTO
 */
export class CreatePostMetaOptionsDto {
  /**
   * Key
   */
  @IsString()
  @IsNotEmpty()
  key: string;

  /**
   * Value
   */
  @IsNotEmpty()
  value: any;
}

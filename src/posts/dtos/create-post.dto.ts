import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Post Status Enum
 */
export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  REVIEW = 'review',
  PUBLISHED = 'published',
}
/**
 * Post Type Enum
 */
export enum PostType {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
  SERIES = 'series',
}
/**
 * Create Post DTO
 */
export class CreatePostDto {
  /**
   * Title
   */
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;
  /**
   * Post Type
   */
  @ApiProperty({
    enum: PostType,
    description: "Possible values  'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  /**
   * Slug
   */
  @ApiProperty({
    description: "For example 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  /**
   * Status
   */
  @ApiProperty({
    enum: PostStatus,
    description: "Possible values 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  /**
   * Content
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  content?: string;
  /**
   * Schema
   */
  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;
  /**
   * Featured Image URL
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;
  /**
   * Publish On
   */
  @ApiProperty({
    description: 'Must be a valid timestamp in ISO8601',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;
  /**
   * Tags
   */
  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];
  /**
   * Meta Options
   */
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}

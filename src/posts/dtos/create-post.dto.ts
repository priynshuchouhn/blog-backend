export class createPostDto {
  title: string;
  content?: string;
  postType: PostType;
  slug: string;
  status: PostStatus;
  schema?: string;
  tags: string[];
  publishedAt?: Date;
  featuredImageUrl?: string;
  metaOptions?: { key: string; value: string }[];
}

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  SERIES = 'series',
  STORY = 'story',
}

enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
  REVIEW = 'review',
  SCHEDULED = 'scheduled',
}

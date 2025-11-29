import { IsOptional, IsString } from 'class-validator';

export class GetUserParamDto {
  @IsOptional()
  @IsString()
  id: string;
}

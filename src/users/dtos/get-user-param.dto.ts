import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetUserParamDto {
  @ApiPropertyOptional({
    description: 'The ID of the user',
    example: '1245',
  })
  @IsOptional()
  @IsString()
  id?: string;
}

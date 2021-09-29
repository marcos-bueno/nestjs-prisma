import { IsString, IsOptional } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  @IsOptional()
  name?: string | null;

  @IsString()
  email: string;
}

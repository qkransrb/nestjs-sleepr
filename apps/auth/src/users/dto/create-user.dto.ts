import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  // @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  password: string;
}

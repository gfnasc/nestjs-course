import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UniqueEmail } from 'src/validators/email-unique.validator';

export class AtualizaUsuarioDTO {
  @IsOptional()
  nome: string;
  
  @IsOptional()
  @IsEmail()
  @UniqueEmail({ message: 'email ja existe' })
  email: string;
  
  @IsOptional()
  @MinLength(6)
  senha: string;
}
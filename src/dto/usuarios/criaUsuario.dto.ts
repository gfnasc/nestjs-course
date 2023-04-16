import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UniqueEmail } from 'src/validators/email-unique.validator';

export class CriaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' }) //exemplo de utilização da prop 'message'
  @MinLength(3)
  nome: string;
  
  @IsEmail()
  @UniqueEmail({ message: 'email ja existe' })
  email: string;
  
  @MinLength(6)
  senha: string;
}

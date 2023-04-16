import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' }) //exemplo de utilização da prop 'message'
  @MinLength(3)
  nome: string;
  @IsEmail()
  email: string;
  @MinLength(6)
  senha: string;
}

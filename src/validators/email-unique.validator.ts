import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnique implements ValidatorConstraintInterface {
  
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const emailUnique = await this.usuarioRepository.emailUnico(value)
    return !emailUnique
  }

}

export const UniqueEmail = (validations: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validations,
      constraints: [],
      validator: EmailUnique
    })
  }
}


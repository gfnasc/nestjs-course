import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/usuario.controller';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { EmailUnique } from 'src/validators/email-unique.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailUnique],
})

export class UsuarioModule {}

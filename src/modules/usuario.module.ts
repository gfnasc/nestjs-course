import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/usuario.controller';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from 'src/dto/usuarios/criaUsuario.dto';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { v4 as uuid } from 'uuid'

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() data: CriaUsuarioDTO) {
    const usuario = new UsuarioEntity()
    
    usuario.id = uuid()
    usuario.email = data.email
    usuario.nome = data.nome
    usuario.senha = data.senha

    this.usuarioRepository.salvar(usuario);
    return { message: 'created', id: usuario.id }
  }
  
  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}

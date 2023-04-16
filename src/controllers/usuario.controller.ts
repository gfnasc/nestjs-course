import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from 'src/dto/usuarios/criaUsuario.dto';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() data: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(data);
    return data;
  }
  
  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}

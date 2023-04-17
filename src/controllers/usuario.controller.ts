import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ListagemUsuariosDTO } from 'src/dto/listagem/listagemUsuarios.dto';
import { AtualizaUsuarioDTO } from 'src/dto/usuarios/AtualizaUsuario.dto';
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
    
    return { 
      user: new ListagemUsuariosDTO(usuario.id, usuario.nome),
      message: 'created'
    }
  }
  
  @Get()
  async listaUsuarios() {
    const listaUsuarios = await this.usuarioRepository.listar()
    const lista = listaUsuarios.map(
      usuario => new ListagemUsuariosDTO(
        usuario.id,
        usuario.nome
      )
    )

    return lista
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() data: AtualizaUsuarioDTO) {
    const newUser = this.usuarioRepository.atualiza(id, data)
    
    return {
      user: newUser,
      message: 'updated'
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string, @Body() data){
    const user = this.usuarioRepository.delete(id)
    return { user: user, message: 'deleted' }
  }
}

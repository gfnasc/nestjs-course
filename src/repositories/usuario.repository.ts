import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  
  private usuarios = [];
  
  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  
  async listar() {
    return this.usuarios;
  }
  
  async emailUnico(email: string) {
    const user = this.usuarios.find(usuario => usuario.email === email)
    
    return user !== undefined
  }

}

import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from 'src/entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  
  private usuarios: UsuarioEntity[] = [];
  
  async salvar(usuario: UsuarioEntity) {
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

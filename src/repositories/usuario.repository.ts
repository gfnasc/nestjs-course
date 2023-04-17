import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { UsuarioEntity } from 'src/entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  
  private usuarios: UsuarioEntity[] = [];

  private findById(id: string) {
    const user = this.usuarios.find(
      data => data.id === id
    )

    if(!user) {
      throw new Error('user not exists')
    }

    return user
  }
  
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

  async atualiza(id: string, data: Partial<UsuarioEntity>) {
    
    const user = this.findById(id)

    Object.entries(data).forEach(([key, value]) => {
      if(key === 'id'){
        return
      }

      user[key] = value
    })

    return user
  }

  async delete(id: string){
    const user = this.findById(id)
    this.usuarios = this.usuarios.filter((user) => user.id !== id)
    return user
  }

}

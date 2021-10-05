import SequelizeConnection from "../databases";
import Contato from "../models/contato";
import Return from "../models/Return";

class ContatoRepository extends SequelizeConnection {
    constructor() {
      super();
    }

    async get(): Promise<Return<Contato[]>> {
      let contatos = await Contato.findAll({
        attributes: [
            'id', 
            'nome', 
            'celular', 
            'telefone', 
            'ativo'
          ],
      });
  
      if (!contatos) return new Return(400, 'contato não encontrado');
  
      return new Return(200, 'OK', contatos);
    }

    async getById(id: number): Promise<Return<Contato>> {
        let contato = await Contato.findOne({
          attributes: [
              'id', 
              'nome', 
              'celular', 
              'telefone', 
              'ativo'
            ],
          where: { 
              id 
            },
        });
    
        if (!contato) return new Return(400, 'contato não encontrado');
    
        return new Return(200, 'OK', contato);
      }
    
}

export default new ContatoRepository();

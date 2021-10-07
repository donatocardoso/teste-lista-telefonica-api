import { Op } from "sequelize";
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
        'email',
        'celular',
        'telefone'
      ],
      where: {
        ativo: true
      }
    });

    if (!contatos) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contatos);
  }

  async getById(id: number): Promise<Return<Contato>> {
    let contato = await Contato.findOne({
      attributes: [
        'id',
        'nome',
        'email',
        'celular',
        'telefone',
        'ativo'
      ],
      where: {
        id,
        ativo: true
      },
    });

    if (!contato) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contato);
  }

  async getByText(text: string): Promise<Return<Contato[]>> {
    let contatos = await Contato.findAll({
      attributes: [
        'id',
        'nome',
        'email',
        'celular',
        'telefone',
        'ativo'
      ],
      where: {        
        [Op.or]: [
          {
            nome: {
              [Op.like]: `%${text}%`
            }
          },
          {
            celular: {
              [Op.like]: `%${text}%`
            }
          },
          {
            telefone: {
              [Op.like]: `%${text}%`
            }
          }
        ],
        ativo: true,
      },
    });

    if (!contatos) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contatos);
  }

  async post(model: Contato): Promise<Return<Contato>> {
    var contato = await Contato.create(model);

    if (!contato) return new Return(400, 'contato não cadastrado');

    return new Return(200, 'OK', contato);
  }

  async put(id: number, model: Contato): Promise<Return<Contato[]>> {
    var [total, contatos] = await Contato.update(model, {
      where: {
        id
      }
    });

    if (total == 0) return new Return(400, 'contatos não atualizados');

    return new Return(200, 'OK', contatos);
  }

  async remove(id: number): Promise<Return> {
    var [total, contatos] = await Contato.update({
      ativo: false,
    }, {
      where: {
        id
      }
    });

    if (total == 0) return new Return(400, 'contato não deletado');

    return new Return(200, 'OK');
  }
}

export default new ContatoRepository();

import { AbstractRepository, EntityRepository, getCustomRepository } from "typeorm";
import ContatoEntity from "../entities/ContatoEntity";
import ContatoDto from "../dtos/ContatoDto";
import Return from "../dtos/Return";

@EntityRepository(ContatoEntity)
class ContatoRepository extends AbstractRepository<ContatoEntity> {

  async get(): Promise<Return<ContatoEntity[]>> {
    let contatos = await this.repository.find({
      select: [
        'Id',
        'Nome',
        'Email',
        'Celular',
        'Telefone'
      ],
      where: {
        Ativo: true
      }
    });

    if (!contatos) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contatos);
  }

  async getById(id: number): Promise<Return<ContatoEntity>> {
    let contato = await this.repository.findOne({
      select: [
        'Id',
        'Nome',
        'Email',
        'Celular',
        'Telefone'
      ],
      where: {
        Id: id,
        Ativo: true
      },
    });

    if (!contato) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contato);
  }

  async getByText(text: string): Promise<Return<ContatoEntity[]>> {
    let contatos = await this.repository.find({
      select: [
        'Id',
        'Nome',
        'Email',
        'Celular',
        'Telefone'
      ],
      where: [
        {
          Nome: `%${text}%`,
          Ativo: true
        },
        {
          Celular: `%${text}%`,
          Ativo: true
        },
        {
          Telefone: `%${text}%`,
          Ativo: true
        }
      ],
    });

    if (!contatos) return new Return(400, 'contato não encontrado');

    return new Return(200, 'OK', contatos);
  }

  async post(model: ContatoDto): Promise<Return<ContatoEntity>> {
    var contato = await this.repository.save(model);

    if (!contato) return new Return(400, 'contato não cadastrado');

    return new Return(200, 'OK', contato);
  }

  async put(id: number, model: ContatoDto): Promise<Return> {
    var contatos = await this.repository.update(model, {
      Id: id
    });

    if (!contatos.affected) return new Return(400, 'contatos não atualizados');

    return new Return(200, 'OK');
  }

  async remove(id: number): Promise<Return> {
    var contato = await this.repository.update({ Ativo: false }, {
      Id: id
    });

    if (!contato.affected) return new Return(400, 'contato não deletado');

    return new Return(200, 'OK');
  }
}

export default getCustomRepository(ContatoRepository);

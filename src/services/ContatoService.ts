import Contato from "../models/contato";
import Return from "../models/Return";
import ContatoRepository from "../repositories/ContatoRepository";

class ContatoService {
    async get() : Promise<Return<Contato[]>> {
        return ContatoRepository.get();
    }

    async getById(id: number) : Promise<Return<Contato>> {
        return ContatoRepository.getById(id);
    }
}

export default new ContatoService();

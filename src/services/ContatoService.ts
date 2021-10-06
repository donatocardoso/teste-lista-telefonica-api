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

    async getByText(text: string) : Promise<Return<Contato[]>> {
        return ContatoRepository.getByText(text);
    }

    async post(model: Contato) : Promise<Return<Contato>> {
        return ContatoRepository.post(model);
    }

    async put(id: number, model: Contato) : Promise<Return<Contato[]>> {
        return ContatoRepository.put(id, model);
    }

    async remove(id: number) : Promise<Return> {
        return ContatoRepository.remove(id);
    }
}

export default new ContatoService();

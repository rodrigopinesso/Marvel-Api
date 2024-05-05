import personagensModel from "../schemas/personagens.schema"
import { personagensTypes } from "../types/personagens.type"
import axios from "axios"

class personagensService{

        async create(personagens: personagensTypes) {
        const createdPersonagens = await personagensModel.create(personagens)
        return createdPersonagens
        }

        async findAll(){
        const foundPersonagens = await personagensModel.find()
        return foundPersonagens
        }

        async findById(id:any){
        const foundPersonagens = await personagensModel.findById(id)
        return foundPersonagens
        } 

        async update(id:any, personagens:personagensTypes){
        const updatePersonagens = await personagensModel.findByIdAndUpdate(id, {
              nome: personagens.nome,
              descricao: personagens.descricao,
              imagemurl: personagens.imagemurl
            }, {new: true})
        
        return updatePersonagens
        }

        async delete(id:string){
            try {
              await personagensModel.findByIdAndDelete(id)
              return "Personagem removido com sucesso"
            } catch (error) {
              throw new Error(`Ocorreu um erro ao remover o Personagem:${error}`)  
            }
        } 

}

export default new personagensService()
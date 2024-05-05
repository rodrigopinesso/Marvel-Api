import criadoresModel from "../schemas/criadores.schema"
import { criadoressType } from "../types/criadores.type"
import axios from "axios"

class criadoresService{

        async create(criadores: criadoressType) {
        const createdCriadores = await criadoresModel.create(criadores)
        return createdCriadores
        }

        async findAll(){
        const foundCriadores = await criadoresModel.find()
        return foundCriadores
        }

        async findById(id:any){
        const foundCriadores = await criadoresModel.findById(id)
        return foundCriadores
        }

        async update(id:any, criadores:criadoressType){
            const updatedCriadores = await criadoresModel.findByIdAndUpdate(id, {
                nome: criadores.nome,
                funcao: criadores.funcao
            }, {new: true})

            return updatedCriadores
        }
        
        async delete(id:string){
            try {
            await criadoresModel.findByIdAndDelete(id)
            return "Criador removida com sucesso"
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover este Criador:${error}`)  
            }
        }

}



export default new criadoresService()
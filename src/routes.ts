import {Router} from "express"
import comicsController from "./planet-hulk/controllers/comics.controller"

const routes = Router()

//comics
routes.post('/comics', comicsController.create)
routes.get('/comics', comicsController.findAll)
routes.get('/comics/:id', comicsController.findById)
routes.put('/comics/:id', comicsController.update)
routes.delete('/comics/:id', comicsController.delete)

//criadores
routes.post('/criadores', comicsController.create)
routes.get('/criadores', comicsController.findAll)
routes.get('/criadores/:id', comicsController.findById)
routes.put('/criadores/:id', comicsController.update)
routes.delete('/criadores/:id', comicsController.delete)

//personagens
routes.post('/personagens', comicsController.create)
routes.get('/personagens', comicsController.findAll)
routes.get('/personagens/:id', comicsController.findById)
routes.put('/personagens/:id', comicsController.update)
routes.delete('/personagens/:id', comicsController.delete)


//rotas auxiliares

export{
    routes
}
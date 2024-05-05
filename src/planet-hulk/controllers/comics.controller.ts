import {Request, Response} from "express"
import comicsService from "../services/comics.service";

const API_URl = "https://gateway.marvel.com:443/v1/public/series/19625/comics?title=Planet%20Hulk&ts=1&apikey=fefc0bc8c1a9f8b8dfa42d4a941b09b0&hash=7e313b232aea5bbada5d0b9d98dbef5c"

class comicController{ 

        async create (req: Request, res: Response){
        const createdcomic = await comicsService.create(req.body)
        res.status(201)
        return res.json(createdcomic)
    }

        async findAll(req: Request, res:Response){
        const foundComics = await comicsService.findAll()
        res.status(200)
        return res.json(foundComics)
    }
    
        async findById(req: Request, res:Response){
        const foundComics = await comicsService.findById(req.params.id)
        res.status(200)
        return res.json(foundComics)
    }

        async update(req: Request, res:Response){
        const foundComics = await comicsService.update(req.params.id, req.body)
        res.status(200)
        return res.json(foundComics)
    }

        async delete(req: Request, res:Response){
        const deleted = await comicsService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }


}

export default new comicController()
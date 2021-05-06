import { Request, Response } from "express";
import { Item } from '../database/model/Item'

export class Routescontroller {
   /*
   
   */ 
  
	async home(req: Request, res: Response) {
        const items = await Item.find({})
		res.json({
			items
		});
	}

    async post(req: Request, res: Response){
        try {
            const item = await Item.create({
                name: req.body.name
            })
            console.log(item.id)
            res.json({
                item
            })
        } catch (error) {
            res.json(error)
        }
    }

    async modify(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {
        try {
            const deleteditem = await Item.deleteOne({name: req.query.name})
            res.send(deleteditem)
        } catch (error) {
            res.send(error)
        }   
    }
}

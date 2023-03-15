import {Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    public async create(req: Request, res: Response) {
        try{
            const products = productService.createProduct(req.body)
            return res.status(201).send(products)
        } catch(e) {
            console.log(e)
        }
    }

    public async find(req: Request, res: Response) {
        try{
            const products = await productService.findProduct()
            return res.status(201).send(products)
        } catch(e) {
            console.log(e)
        }
    }
}

export default new ProductController()
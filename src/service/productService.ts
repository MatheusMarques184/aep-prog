import {Request, Response} from 'express'
import { writeFile, readFile } from "fs/promises"

class productService {
    public async createProduct(data) {
        try{
            await writeFile("products.json", JSON.stringify(data))
        } catch(e) {
            console.log(e)
        }
    }

    public async findProduct() {
        const getProducts = await readFile("products.json", "utf-8")
        return JSON.parse(getProducts)
    }
}

export default new productService()
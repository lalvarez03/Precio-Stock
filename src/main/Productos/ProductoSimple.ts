import { Producto } from "./Producto";

export class ProductoSimple extends Producto{
    private precioUnitario:number;
    private stockProd:number;
    constructor(unNombre:string, unPrecio:number,stock:number){
        super(unNombre);
        this.precioUnitario=unPrecio;
        this.stockProd=stock;
    }
    public precio(): number {
        return this.precioUnitario;
    }
    public stock(): number {
    return this.stockProd;
    }
    
}
import { Producto } from "./Producto";
export class Combo extends Producto{
    private productos: Array<Producto>;
    constructor(unNombre:string){
        super(unNombre);
        this.productos=[];
    }
    public agregarProducto(producto:Producto){
        this.productos.push(producto);
    }
    public precio(): number {
        /*var precioFinal = 0;
        this.productos.forEach(p => precioFinal += p.precio());
        return precioFinal;*/
        return this.productos.reduce((precioFinal, producto) => precioFinal + producto.precio(),0)
    }
    public stock(): number {
        /*var stockFinal = Number.MAX_SAFE_INTEGER;
        this.productos.forEach(p => {
            if(p.stock()<stockFinal){stockFinal=p.stock()}
        });
        return stockFinal;*/
        return this.productos.reduce((p1, p2) => p1.stock()<p2.stock() ? p1 : p2).stock();
    }
}
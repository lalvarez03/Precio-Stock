export abstract class Producto{
private descripcion:string;
constructor(descripcion:string){
    this.descripcion=descripcion;
}
public abstract precio():number;
public abstract stock():number;
}
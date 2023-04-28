import { create } from "domain";
import { Producto } from "../main/Productos/Producto";
import { ProductoSimple } from "../main/Productos/ProductoSimple";
import { Combo } from "../main/Productos/Combo";

var moto; 
var casco;
var guantes;
var chaleco;
var piloto;
var combo1: Combo;

beforeEach(()=> {
    moto = new ProductoSimple("moto", 10000,4);
    casco = new ProductoSimple("casco", 400,100);
    guantes = new ProductoSimple("guantes", 30,150);
    chaleco = new ProductoSimple("chaleco", 70,10);
    piloto = new ProductoSimple("piloto", 10,100);
    combo1 = new Combo("Pagame rata");
    combo1.agregarProducto(guantes);
    combo1.agregarProducto(casco);
    combo1.agregarProducto(chaleco);
});

test("Combo Vale 500?", () => {
        expect(combo1.precio()).toBe(500);
});

test("Combo Tiene stock 10?", () => {
        expect(combo1.stock()).toBe(10);
});
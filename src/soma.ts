import { Calculo } from "./Calculo.js"

export class Soma extends Calculo{

    calcular(): number {
        return this.numero1 + this.numero2
    }

}
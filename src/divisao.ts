import { Calculo } from "./Calculo.js"

export class Divisao extends Calculo{

    calcular(): number {
        return this.numero1 / this.numero2
    }

}
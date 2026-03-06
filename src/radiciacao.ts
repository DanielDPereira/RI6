import { Calculo } from "./Calculo.js"

export class Radiciacao extends Calculo{

    calcular(): number {
        return Math.pow(this.numero1, 1 / this.numero2)
    }

}
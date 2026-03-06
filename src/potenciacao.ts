import { Calculo } from "./Calculo.js"

export class Potenciacao extends Calculo{

    calcular(): number {
        return Math.pow(this.numero1, this.numero2)
    }

}
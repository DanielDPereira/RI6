import { Calculo } from "./Calculo"

export class Potenciacao extends Calculo{

    calcular(): number {
        return Math.pow(this.numero1, this.numero2)
    }

}
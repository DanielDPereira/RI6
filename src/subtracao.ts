import { Calculo } from "./Calculo"

export class Subtracao extends Calculo{

    calcular(): number {
        return this.numero1 - this.numero2
    }

}
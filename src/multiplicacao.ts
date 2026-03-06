import { Calculo } from "./Calculo"

export class Multiplicacao extends Calculo{

    calcular(): number {
        return this.numero1 * this.numero2
    }

}
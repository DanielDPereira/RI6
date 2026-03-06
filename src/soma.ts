import { Calculo } from "./Calculo"

export class Soma extends Calculo{

    calcular(): number {
        return this.numero1 + this.numero2
    }

}
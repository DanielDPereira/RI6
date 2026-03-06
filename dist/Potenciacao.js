"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potenciacao = void 0;
const Calculo_1 = require("./Calculo");
class Potenciacao extends Calculo_1.Calculo {
    calcular() {
        return Math.pow(this.numero1, this.numero2);
    }
}
exports.Potenciacao = Potenciacao;
//# sourceMappingURL=Potenciacao.js.map
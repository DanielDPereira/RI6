"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
const Calculo_1 = require("./Calculo");
class Radiciacao extends Calculo_1.Calculo {
    calcular() {
        return Math.pow(this.numero1, 1 / this.numero2);
    }
}
exports.Radiciacao = Radiciacao;
//# sourceMappingURL=Radiciacao.js.map
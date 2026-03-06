"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
class Bhaskara {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    calcularBhaskara() {
        const delta = (this.b ** 2) - (4 * this.a * this.c);
        if (delta < 0) {
            return "S = {}\nSem solução dentro do conjunto dos números reais";
        }
        const x1 = (-this.b + delta ** 0.5) / (2 * this.a);
        const x2 = (-this.b - delta ** 0.5) / (2 * this.a);
        return `X1 = ${x1} e X2 = ${x2}`;
    }
}
exports.Bhaskara = Bhaskara;
//# sourceMappingURL=Bhaskara.js.map
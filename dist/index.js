"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Soma_1 = require("./Soma");
const Subtracao_1 = require("./Subtracao");
const Multiplicacao_1 = require("./Multiplicacao");
const Divisao_1 = require("./Divisao");
const Potenciacao_1 = require("./Potenciacao");
const Radiciacao_1 = require("./Radiciacao");
const Mensagens_1 = require("./Mensagens");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
(0, Mensagens_1.Mensagens)();
rl.question("Escolha uma opção: ", (opcao) => {
    rl.question("Digite o primeiro número: ", (n1) => {
        rl.question("Digite o segundo número: ", (n2) => {
            let resultado = 0;
            switch (opcao) {
                case "1":
                    resultado = new Soma_1.Soma(Number(n1), Number(n2)).calcular();
                    break;
                case "2":
                    resultado = new Subtracao_1.Subtracao(Number(n1), Number(n2)).calcular();
                    break;
                case "3":
                    resultado = new Multiplicacao_1.Multiplicacao(Number(n1), Number(n2)).calcular();
                    break;
                case "4":
                    resultado = new Divisao_1.Divisao(Number(n1), Number(n2)).calcular();
                    break;
                case "5":
                    resultado = new Potenciacao_1.Potenciacao(Number(n1), Number(n2)).calcular();
                    break;
                case "6":
                    resultado = new Radiciacao_1.Radiciacao(Number(n1), Number(n2)).calcular();
                    break;
                case "0":
                    console.log("Saindo...");
                    rl.close();
            }
            console.log("O resultado da operação é:", resultado);
            rl.close();
        });
    });
});
//# sourceMappingURL=index.js.map
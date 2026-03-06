import * as readline from "readline"

import { Soma } from "./Soma.js"
import { Subtracao } from "./Subtracao.js"
import { Multiplicacao } from "./Multiplicacao.js"
import { Divisao } from "./Divisao.js"
import { Potenciacao } from "./Potenciacao.js"
import { Radiciacao } from "./Radiciacao.js"
import { Mensagens } from "./Mensagens.js"
import { Bhaskara } from "./Bhaskara.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

Mensagens()

rl.question("Escolha uma opção: ", (opcao)=>{

    if(opcao == "7"){

        rl.question("Digite A: ", (a)=>{
        rl.question("Digite B: ", (b)=>{
        rl.question("Digite C: ", (c)=>{

            const bh = new Bhaskara(Number(a), Number(b), Number(c))
            console.log(bh.calcularBhaskara())

            rl.close()
        })
        })
        })

    }else{

        rl.question("Digite o primeiro número: ", (n1)=>{
        rl.question("Digite o segundo número: ", (n2)=>{

            let resultado:number = 0

            switch(opcao){

                case "1":
                    resultado = new Soma(Number(n1), Number(n2)).calcular()
                    break

                case "2":
                    resultado = new Subtracao(Number(n1), Number(n2)).calcular()
                    break

                case "3":
                    resultado = new Multiplicacao(Number(n1), Number(n2)).calcular()
                    break

                case "4":
                    resultado = new Divisao(Number(n1), Number(n2)).calcular()
                    break

                case "5":
                    resultado = new Potenciacao(Number(n1), Number(n2)).calcular()
                    break

                case "6":
                    resultado = new Radiciacao(Number(n1), Number(n2)).calcular()
                    break

                case "0":
                    console.log("Saindo...")
                    rl.close()
            }

            console.log("O resultado da operação é:", resultado)

            rl.close()

        })
        })

    }

})
import * as readline from "readline"

import { Soma } from "./Soma"
import { Subtracao } from "./Subtracao"
import { Multiplicacao } from "./Multiplicacao"
import { Divisao } from "./Divisao"
import { Potenciacao } from "./Potenciacao"
import { Radiciacao } from "./Radiciacao"
import { Mensagens } from "./Mensagens"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

Mensagens()

rl.question("Escolha uma opção: ", (opcao)=>{

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
            }

            console.log("O resultado da operação é:", resultado)

            rl.close()

        })
        })

    }

)
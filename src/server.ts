import express, { Request, Response } from "express"
import path from "path"
import { fileURLToPath } from "url"
import { Soma } from "./Soma.js"
import { Subtracao } from "./Subtracao.js"
import { Multiplicacao } from "./Multiplicacao.js"
import { Divisao } from "./Divisao.js"
import { Potenciacao } from "./Potenciacao.js"
import { Radiciacao } from "./Radiciacao.js"
import { Bhaskara } from "./Bhaskara.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())

// Rotas de Operações
app.post("/api/soma", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    const resultado = new Soma(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/subtracao", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    const resultado = new Subtracao(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/multiplicacao", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    const resultado = new Multiplicacao(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/divisao", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    if (Number(n2) === 0) {
        return res.status(400).json({ erro: "Divisão por zero não permitida" })
    }
    const resultado = new Divisao(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/potenciacao", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    const resultado = new Potenciacao(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/radiciacao", (req: Request, res: Response) => {
    const { n1, n2 } = req.body
    const resultado = new Radiciacao(Number(n1), Number(n2)).calcular()
    res.json({ resultado })
})

app.post("/api/bhaskara", (req: Request, res: Response) => {
    const { a, b, c } = req.body
    const bh = new Bhaskara(Number(a), Number(b), Number(c))
    const resultado = bh.calcularBhaskara()
    res.json({ resultado })
})

app.listen(PORT, () => {
    console.log(`Calculadora rodando em http://localhost:${PORT}`)
})

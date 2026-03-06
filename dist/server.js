import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Soma } from "./Soma.js";
import { Subtracao } from "./Subtracao.js";
import { Multiplicacao } from "./Multiplicacao.js";
import { Divisao } from "./Divisao.js";
import { Potenciacao } from "./Potenciacao.js";
import { Radiciacao } from "./Radiciacao.js";
import { Bhaskara } from "./Bhaskara.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
// Rotas de Operações
app.post("/api/soma", (req, res) => {
    const { n1, n2 } = req.body;
    const resultado = new Soma(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/subtracao", (req, res) => {
    const { n1, n2 } = req.body;
    const resultado = new Subtracao(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/multiplicacao", (req, res) => {
    const { n1, n2 } = req.body;
    const resultado = new Multiplicacao(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/divisao", (req, res) => {
    const { n1, n2 } = req.body;
    if (Number(n2) === 0) {
        return res.status(400).json({ erro: "Divisão por zero não permitida" });
    }
    const resultado = new Divisao(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/potenciacao", (req, res) => {
    const { n1, n2 } = req.body;
    const resultado = new Potenciacao(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/radiciacao", (req, res) => {
    const { n1, n2 } = req.body;
    const resultado = new Radiciacao(Number(n1), Number(n2)).calcular();
    res.json({ resultado });
});
app.post("/api/bhaskara", (req, res) => {
    const { a, b, c } = req.body;
    const bh = new Bhaskara(Number(a), Number(b), Number(c));
    const resultado = bh.calcularBhaskara();
    res.json({ resultado });
});
app.listen(PORT, () => {
    console.log(`Calculadora rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
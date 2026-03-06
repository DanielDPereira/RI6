// Array para armazenar histórico
let historico = []

// Mudança de abas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove classe active de todos os botões
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'))
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'))
        
        // Adiciona classe active ao botão clicado
        button.classList.add('active')
        document.getElementById(button.getAttribute('data-tab')).classList.add('active')
    })
})

// Função para calcular operações básicas
async function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('numero1').value)
    const n2 = parseFloat(document.getElementById('numero2').value)
    
    if (isNaN(n1) || isNaN(n2)) {
        mostrarResultado('Por favor, preencha ambos os números')
        return
    }
    
    try {
        const response = await fetch(`/api/${operacao}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ n1, n2 })
        })
        
        const data = await response.json()
        
        if (data.erro) {
            mostrarResultado(data.erro)
        } else {
            const nome_operacao = getNomeOperacao(operacao)
            mostrarResultado(`${n1} ${nome_operacao} ${n2} = <strong>${data.resultado}</strong>`)
            adicionarAoHistorico(`${n1} ${nome_operacao} ${n2} = ${data.resultado}`)
        }
    } catch (error) {
        mostrarResultado('Erro ao calcular: ' + error.message)
    }
}

// Função para calcular Bhaskara
async function calcularBhaskara() {
    const a = parseFloat(document.getElementById('coefA').value)
    const b = parseFloat(document.getElementById('coefB').value)
    const c = parseFloat(document.getElementById('coefC').value)
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        mostrarResultado('Por favor, preencha todos os coeficientes')
        return
    }
    
    if (a === 0) {
        mostrarResultado('O coeficiente A não pode ser zero')
        return
    }
    
    try {
        const response = await fetch('/api/bhaskara', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ a, b, c })
        })
        
        const data = await response.json()
        mostrarResultado(`Bhaskara(${a}, ${b}, ${c}):<br><strong>${data.resultado}</strong>`)
        adicionarAoHistorico(`Bhaskara(${a}, ${b}, ${c}): ${data.resultado.replace('<br>', ' ')}`)
    } catch (error) {
        mostrarResultado('Erro ao calcular: ' + error.message)
    }
}

// Função auxiliar para pegar nome da operação
function getNomeOperacao(operacao) {
    const operacoes = {
        'soma': '+',
        'subtracao': '-',
        'multiplicacao': '×',
        'divisao': '÷',
        'potenciacao': '^',
        'radiciacao': '√'
    }
    return operacoes[operacao] || operacao
}

// Função para mostrar resultado
function mostrarResultado(texto) {
    const elemento = document.getElementById('resultadoTexto')
    elemento.innerHTML = texto
}

// Função para adicionar ao histórico
function adicionarAoHistorico(calculo) {
    const agora = new Date().toLocaleTimeString('pt-BR')
    historico.unshift(`${agora} - ${calculo}`)
    
    if (historico.length > 10) {
        historico.pop()
    }
    
    atualizarHistorico()
}

// Função para atualizar a exibição do histórico
function atualizarHistorico() {
    const lista = document.getElementById('historicopacientes')
    
    if (historico.length === 0) {
        lista.innerHTML = '<li>Nenhum cálculo realizado ainda</li>'
        return
    }
    
    lista.innerHTML = historico.map(item => `<li>${item}</li>`).join('')
}

// Função para limpar histórico
function limparHistorico() {
    if (confirm('Tem certeza que deseja limpar o histórico?')) {
        historico = []
        atualizarHistorico()
        mostrarResultado('Histórico limpo')
    }
}

// Event listeners para Enter nas inputs
document.getElementById('numero1')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.getElementById('numero2').focus()
})

document.getElementById('numero2')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcular('soma')
})

document.getElementById('coefC')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcularBhaskara()
})

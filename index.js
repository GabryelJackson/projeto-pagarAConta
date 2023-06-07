function meuEscopo() {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    function calcular(evento) {
        evento.preventDefault();

        let inputTotal = form.querySelector('.total');
        let inputDesconto = form.querySelector('.desconto');
        let total = Number(inputTotal.value);
        let desconto = Number(inputDesconto.value)
        console.log(total, desconto);

        let resposta = total + ((desconto / 100) * total);
        console.log(resposta);

        resultado.innerHTML += `<p>O total a se pagar da conta + taxa do garçon é R$${resposta.toFixed(2)}.</p>`
    }
    form.addEventListener('submit', calcular);
}

meuEscopo();



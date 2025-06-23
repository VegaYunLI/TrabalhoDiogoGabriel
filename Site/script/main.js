		function adicionarAoCarrinho(nome, preco) {
			let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

			let itemExistente = carrinho.find(item => item.nome === nome);

			if (itemExistente) {
				itemExistente.quantidade += 1;
			} else {
				carrinho.push({ 'nome': nome, 'preco': preco, 'quantidade': 1 });
			}

			localStorage.setItem('carrinho', JSON.stringify(carrinho));
		}
		
  async function consultarCep() {
  const cep = document.getElementById('cep').value.trim().replace('-', '');
  const resultadoDiv = document.getElementById('resultado');

  if (!cep.match(/^\d{8}$/)) {
    resultadoDiv.innerHTML = ' Digite um CEP válido (Ex: 20040000)';
    return;
  }

  resultadoDiv.innerHTML = ' Consultando...';
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) {
      resultadoDiv.innerHTML = ' CEP não encontrado.';
      return;
    }

    const { logradouro, bairro, localidade, uf } = data;

    let fretePAC = 0;
    let freteSedex = 0;
    let prazoPAC = 0;
    let prazoSedex = 0;

    switch (uf) {
      case 'SP':
      case 'RJ':
      case 'MG':
      case 'ES':
        fretePAC = 20;
        prazoPAC = 3;
        freteSedex = 35;
        prazoSedex = 1;
        break;
      case 'PR':
      case 'SC':
      case 'RS':
        fretePAC = 25;
        prazoPAC = 4;
        freteSedex = 40;
        prazoSedex = 2;
        break;
      case 'BA':
      case 'PE':
      case 'CE':
      case 'RN':
      case 'PB':
      case 'AL':
      case 'SE':
      case 'MA':
        fretePAC = 35;
        prazoPAC = 5;
        freteSedex = 50;
        prazoSedex = 3;
        break;
      case 'DF':
      case 'GO':
      case 'MT':
      case 'MS':
        fretePAC = 30;
        prazoPAC = 5;
        freteSedex = 45;
        prazoSedex = 2;
        break;
      default:
        fretePAC = 50;
        prazoPAC = 7;
        freteSedex = 65;
        prazoSedex = 4;
    }

    resultadoDiv.innerHTML = `
      <h4> Endereço encontrado:</h4>
      <p>Rua: ${logradouro || '(Não disponível)'}</p>
      <p>Bairro: ${bairro || '(Não disponível)'}</p>
      <p>Cidade: ${localidade} - ${uf}</p>
      <hr>
      <h4> PAC</h4>
      <p> Valor: <strong>R$ ${fretePAC.toFixed(2)}</strong></p>
      <p> Prazo: <strong>${prazoPAC} dias úteis</strong></p>
    `;

  } catch (error) {
    console.error('Erro:', error);
    resultadoDiv.innerHTML = 'Erro na consulta do CEP.';
  }
}
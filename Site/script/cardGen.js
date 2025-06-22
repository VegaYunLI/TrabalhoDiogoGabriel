function innerHtmlCard(nome, desc, imgSrc, preco) {
	let cardHtml = `
	  <div class="card mb-3 shadow-sm border-0 rounded col-lg-3 col-md-4 col-sm-6">
	  <img
		src="${imgSrc}"
		class="card-img-top"
		alt="${nome}"
	  />
	  <div class="card-body">
		<h5 class="card-title">${nome}</h5>
		<p class="card-text">${desc}</p>
		<div class="d-flex justify-content-between flex-row align-items-center">
		  <p class="card-text bold">R$ ${preco.toFixed(2)}</p>
		  <button class="btn btn-primary" onclick="adicionarAoCarrinho('${nome}', ${preco})">
		  Add to Cart
		  </button>
		</div>
	  </div>
	  </div>
	`;

	let cardContainer = document.getElementById('card-container');
	cardContainer.innerHTML += cardHtml;
}
innerHtmlCard("Camiseta Preta e Branca", "Camiseta confortavel estampa branca elegante", "style/image/camisas/camisa1.webp", 49.99);
innerHtmlCard("Camiseta Preta e Branca", "Camiseta confortavel estampa branca elegante", "style/image/camisas/camisa2.webp", 49.99);

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
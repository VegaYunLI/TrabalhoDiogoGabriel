function innerHtmlCard(nome, desc, imgSrc, imgSrc2, preco) {
	let cardHtml = `
		<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex border-0">
			<div class="card shadow-sm rounded flex-fill h-100">
				<img
					src="${imgSrc}"
					data-img1="${imgSrc}"
					data-img2="${imgSrc2}"
					class="card-img-top transition-img"
					alt="${nome}"
					onmouseover="this.src=this.getAttribute('data-img2');"
					onmouseout=" this.src=this.getAttribute('data-img1');"
				/>
				<div class="card-body d-flex flex-column align-items-start col-12">
					<h5 class="card-title bolder mb-0">${nome}</h5>
					<p class="card-text mt-3">${desc}</p>
					<div class="mt-auto d-flex justify-content-between col-12 align-items-center">
						<p class="card-text fw-bold m-0">R$ ${preco.toFixed(2)}</p>
						<button class="btn btn-primary m-0" onclick="adicionarAoCarrinho('${nome}', ${preco})">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	`;

	let cardContainer = document.getElementById('card-container');
	cardContainer.innerHTML += cardHtml;
}

innerHtmlCard(
	"Camisa Polo Azul",
	"Camisa polo azul em algodão, confortável e estilosa.",
	"./style/image/camisas/camisa1a.png",
	"./style/image/camisas/camisa1b.png",
	79.90
);
innerHtmlCard(
	"Camisa Social Branca",
	"Camisa social branca clássica, ideal para ocasiões formais.",
	"./style/image/camisas/camisa2a.png",
	"./style/image/camisas/camisa2b.png",
	99.90
);
innerHtmlCard(
	"Camisa Xadrez Vermelha",
	"Camisa xadrez vermelha, perfeita para um visual casual.",
	"./style/image/camisas/camisa3a.png",
	"./style/image/camisas/camisa3b.png",
	89.90
);
innerHtmlCard(
	"Camisa Preta Slim",
	"Camisa xadrez vermelha, perfeita para um visual casual.",
	"./style/image/camisas/camisa4a.png",
	"./style/image/camisas/camisa4b.png",
	109.90
);
innerHtmlCard(
	"Camisa Jeans",
	"Camisa jeans resistente, ótima para o dia a dia.",
	"./style/image/camisas/camisa5a.png",
	"./style/image/camisas/camisa5b.png",
	119.90
);
innerHtmlCard(
	"Camisa Estampada Tropical",
	"Camisa estampada com tema tropical, leve e divertida.",
	"./style/image/camisas/camisa6a.png",
	"./style/image/camisas/camisa6b.png",
	89.90
);
innerHtmlCard(
	"Camisa Manga Longa Cinza",
	"Camisa manga longa cinza, versátil para várias ocasiões.",
	"./style/image/camisas/camisa7a.png",
	"./style/image/camisas/camisa7b.png",
	99.90
);
innerHtmlCard(
	"Camisa Listrada Azul e Branca",
	"Camisa listrada azul e branca, estilo clássico renovado.",
	"./style/image/camisas/camisa8a.png",
	"./style/image/camisas/camisa8b.png",
	94.90
);
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
function innerHtmlCard(nome, desc, imgSrc, imgSrc2, preco) {
	let cardHtml = `
		<div class="col-8 col-sm-6 col-md-4 col-lg-3 d-flex border-0">
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

const camisasData = {
	"Camisa1": {
		nome: "Camisa",
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa1a.png",
		imgSrc2: "./style/image/camisas/camisa1b.png",
		preco: 79.90
	},
	"Camisa2": {
		nome:"Camisa",
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa2a.png",
		imgSrc2: "./style/image/camisas/camisa2b.png",
		preco: 99.90
	},
	"Camisa3": {
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa3a.png",
		imgSrc2: "./style/image/camisas/camisa3b.png",
		preco: 89.90
	},
	"Camisa4": {
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa4a.png",
		imgSrc2: "./style/image/camisas/camisa4b.png",
		preco: 109.90
	},
	"Camisa5": {
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa5a.png",
		imgSrc2: "./style/image/camisas/camisa5b.png",
		preco: 119.90
	},
	"Camisa6": {
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa6a.png",
		imgSrc2: "./style/image/camisas/camisa6b.png",
		preco: 89.90
	},
	"Camisa7": {
		desc: "Camisa",
		imgSrc: "./style/image/camisas/camisa7a.png",
		imgSrc2: "./style/image/camisas/camisa7b.png",
		preco: 99.90
	},
	"Camisa8": {
		desc: "Camisa listrada azul e branca, estilo classico renovado.",
		imgSrc: "./style/image/camisas/camisa8a.png",
		imgSrc2: "./style/image/camisas/camisa8b.png",
		preco: 94.90
	}
};
const calcasData = {
	"Calca1": {
		nome: "Calça Jeans",
		desc: "Calça jeans azul tradicional.",
		imgSrc: "./style/image/calcas/calca1a.jpg",
		imgSrc2: "./style/image/calcas/calca1b.jpg",
		preco: 129.90
	},
	"Calca2": {
		nome: "Calça Sarja",
		desc: "Calça de sarja bege confortável.",
		imgSrc: "./style/image/calcas/calca2a.jpg",
		imgSrc2: "./style/image/calcas/calca2b.jpg",
		preco: 139.90
	},
	"Calca3": {
		nome: "Calça Jogger",
		desc: "Calça jogger preta esportiva.",
		imgSrc: "./style/image/calcas/calca3a.jpg",
		imgSrc2: "./style/image/calcas/calca3b.jpg",
		preco: 119.90
	},
	"Calca4": {
		nome: "Calça Social",
		desc: "Calça social cinza para ocasiões formais.",
		imgSrc: "./style/image/calcas/calca4a.jpg",
		imgSrc2: "./style/image/calcas/calca4b.jpg",
		preco: 159.90
	},
};
const blusasData = {
	"Blusa1": {
		nome: "Blusa Básica",
		desc: "Blusa básica branca, algodão.",
		imgSrc: "./style/image/blusas/blusa1a.png",
		imgSrc2: "./style/image/blusas/blusa1b.png",
		preco: 59.90
	},
	"Blusa2": {
		nome: "Blusa Manga Longa",
		desc: "Blusa manga longa azul marinho.",
		imgSrc: "./style/image/blusas/blusa2a.png",
		imgSrc2: "./style/image/blusas/blusa2b.png",
		preco: 69.90
	},
	"Blusa3": {
		nome: "Blusa Estampada",
		desc: "Blusa estampada floral, tecido leve.",
		imgSrc: "./style/image/blusas/blusa3a.png",
		imgSrc2: "./style/image/blusas/blusa3b.png",
		preco: 79.90
	},
	"Blusa4": {
		nome: "Blusa Moletom",
		desc: "Blusa de moletom cinza, capuz.",
		imgSrc: "./style/image/blusas/blusa4a.png",
		imgSrc2: "./style/image/blusas/blusa4b.png",
		preco: 99.90
	}
};

Object.values(camisasData).forEach(camisa => {
	innerHtmlCard(
		camisa.nome,
		camisa.desc,
		camisa.imgSrc,
		camisa.imgSrc2,
		camisa.preco
	);
});

Object.values(calcasData).forEach(calca => {
	innerHtmlCard(
		calca.nome,
		calca.desc,
		calca.imgSrc,
		calca.imgSrc2,
		calca.preco
	);
});

Object.values(blusasData).forEach(blusa => {
	innerHtmlCard(
		blusa.nome,
		blusa.desc,
		blusa.imgSrc,
		blusa.imgSrc2,
		blusa.preco
	);
});



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
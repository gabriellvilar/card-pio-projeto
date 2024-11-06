
const menuItems = [
  {
      name: "Pizza Marguerita",
      description: "Deliciosa pizza com molho de tomate, mozzarella e manjericão.",
      price: "R$ 35,00",
      image: "https://media.istockphoto.com/id/910195988/pt/foto/pizza-margarita.jpg?s=612x612&w=0&k=20&c=KkQ__eysJHYpmABBMUiRqmExVxan25NmmNTn2GBgy-c="
  },
  {
      name: "Churrasco Misto",
      description: "Carnes variadas assadas no ponto perfeito, acompanhadas de farofa e vinagrete.",
      price: "R$ 50,00",
      image: "https://santorei.menuudigital.com.br/_core/_uploads/144/2023/11/1523221123g2kbgfh5gb.jpeg"
  },
  {
      name: "Prato Executivo",
      description: "Um prato completo com arroz, feijão, bife, batata frita  e salada.",
      price: "R$ 25,00",
      image: "https://cdn.deliway.com.br/blog/base/1aa/c9c/a41/bife-bovino.jpg"
  },
  {
      name: "Feijoada Completa",
      description: "Feijoada tradicional servida com arroz, couve e laranja.",
      price: "R$ 45,00",
      image: "https://i.ytimg.com/vi/vkGRTvqvrkA/maxresdefault.jpg"
  },
  {
      name: "Salada Caesar",
      description: "Salada fresca com alface, frango grelhado, croutons e molho caesar.",
      price: "R$ 20,00",
      image: "https://static.itdg.com.br/images/1200-675/3f0787cb6db2f0db10269fc45bd8abee/shutterstock-1078415420.jpg"
  },
  {
      name: "Petit gâteau",
      description: "Deliciosa sobremesa de chocolate com sorvete de creme.",
      price: "R$ 25,00",
      image: "https://img.cybercook.com.br/receitas/434/petit-gateau.jpeg"
  }
];


function displayMenu() {
  const menuSection = document.getElementById("menu");

  menuItems.forEach(item => {
      
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      
      menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price}</p>
      `;

      
      menuSection.appendChild(menuItem);
  });
}


window.onload = displayMenu;

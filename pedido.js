// Recupera o item selecionado do localStorage
const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));

// Verifica se o item existe e exibe as informações
if (selectedItem) {
    document.getElementById("itemName").innerText = selectedItem.name;
    document.getElementById("itemDescription").innerText = selectedItem.description;
    document.getElementById("itemPrice").innerText = selectedItem.price;
    document.getElementById("itemImage").src = selectedItem.image;
}

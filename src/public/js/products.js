const socket = io();
console.log("hola mundo");

const addProductBtn = document.getElementById("addProductBtn");
const deleteProductBtn = document.getElementById("deleteProductBtn");

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault ();
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const price = document.getElementById("price");
  const thumbnail = document.getElementById("thumbnail");
  const code = document.getElementById("code");
  const stock = document.getElementById("stock");
  //console.log(title, description, price, thumbnail, code, stock);
  const product = {
    title: title.value,
    description: description.value,
    price: price.value,
    thumbnail: thumbnail.value,
    code: code.value,
    stock,
  };

  socket.emit("addProduct", product);
  title: title.value = "";
  description: description.value = "";
  price: price.value = "";
  thumbnail: thumbnail.value = "";
  code: code.value = "";
  stock: stock.value = "";
});

deleteProductBtn.addEventListener("click", (e) => {
  e.preventDefault ();
  const productId = document.getElementById("productId");
  socket.emit("deleteProduct", productId.value);
  productId.value = "";
  alert("producto eliminado");
});

socket.on("updateProducts", (products) => {
  //recomendacion: usar innerHTML e insertarel nuevo productos que tien como parametro
  console.log("entro aca");
  //window.location.reload();
});

socket.on ("error", (data) => {
  console.log (data);
})
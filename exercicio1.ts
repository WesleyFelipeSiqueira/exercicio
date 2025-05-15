// Defini��o da interface Produto 
interface Produto { 
nome: string; 
preco: number; 
disponivel: boolean; 
} 
// Implementa��o de um objeto do tipo Produto 
const produto: Produto = {
nome: "Notebook", 
preco: 3499.99, 
disponivel: true 
}; 
// Impress�o do resultado no console 
console.log("Detalhes do Produto:"); 
console.log(`Nome: ${produto.nome}`); 
console.log(`Pre�o: R$ ${produto.preco.toFixed(2)}`); 
console.log(`Dispon�vel: ${produto.disponivel ? "Sim" : "N�o"}`);
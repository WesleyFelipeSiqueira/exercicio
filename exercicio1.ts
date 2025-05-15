// Definição da interface Produto 
interface Produto { 
nome: string; 
preco: number; 
disponivel: boolean; 
} 
// Implementação de um objeto do tipo Produto 
const produto: Produto = {
nome: "Notebook", 
preco: 3499.99, 
disponivel: true 
}; 
// Impressão do resultado no console 
console.log("Detalhes do Produto:"); 
console.log(`Nome: ${produto.nome}`); 
console.log(`Preço: R$ ${produto.preco.toFixed(2)}`); 
console.log(`Disponível: ${produto.disponivel ? "Sim" : "Não"}`);
function imprimirId(id: string | number): void { 
//
console.log(id.toUpperCase()); // Erro: Property 'toUpperCase' does not exist on type 'string | number'. 
// Property 'toUpperCase' does not exist on type 'number'. 
if (typeof id === "string") { 
console.log(id.toUpperCase()); // OK, TS entende que aqui 'id' é string (narrowing) 
} else { 
console.log(id); // Aqui 'id' é number 
} 
} 
imprimirId("abc"); 
imprimirId(123); 
// imprimirId(true); // Erro 
type Resultado = "sucesso" | "erro" | "pendente"; 
let statusoperacao: Resultado "sucesso"; 
// statusoperacao = "falha"; 
// Erro
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i <= products.length - 1; i++) {
    if (products[i].includes('Camiseta')) {
        console.log(products[i]);
    }
}

console.log();
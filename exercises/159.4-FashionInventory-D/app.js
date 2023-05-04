let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function getLaceNameDataForShoes(inventory) {
  // your code here
  let aux = [];
  inventory.map((designer) => {
    designer.shoes.map((shoe) => {
      let splited = shoe.name.split(' ');
      let counter = 0;
      splited.map((stringSplit) => {
        if (stringSplit.startsWith('lace'))
          aux.push({ nameWords: splited, targetWordIndex: counter });
        else counter++;
      });
    });
  });
  return aux;
}

console.log(getLaceNameDataForShoes(inventory));

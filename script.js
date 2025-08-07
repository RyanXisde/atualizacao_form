const pasteis = [
  { nome: 'Pastel de Frango', Preço: 15, Acompanhante: 'Molho de Alho' },
  { nome: 'Pastel de carne', Preço: 15, Acompanhante: 'Ketchup' },
  { nome: 'Pastel de Presunto', Preço: 15, Acompanhante: 'Ketchup' },
  { nome: 'Pastel de Chocolate', Preço: 20, Acompanhante: 'Cobertura' }
];

function pastelfrango() {
  document.getElementById('infos').textContent = ' Pastel de Frango R$ ' + pasteis[0].Preço + 'wfeww' + pasteis[0].Acompanhante;
}
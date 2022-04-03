const card_imagem = document.getElementById('card-img');
const card_status = document.getElementById('card-text');
const card_skill = document.getElementById('card-skill');
const card_options = document.getElementsByClassName('card-button');

const contexts = [
  {
    img: './img/bulbasaur.png',
    Hp: 'Hp: 200',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    Tipo: 'Tipo: Planta',
    habilidadeprincipal: 'Folhas navalha',
    habilidadesecundaria: 'Raio solar',
  },
  {
    img: './img/charmander.png',
    Hp: 'Hp: 150',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    Tipo: 'Tipo: Fogo',
    habilidadeprincipal: 'Brasa',
    habilidadesecundaria: 'Lança chamas',
  },
  {
    img: './img/pikachu.png',
    Hp: 'Hp: 160',
    Ataque: 'Ataque: 700',
    Defesa: 'Defesa: 300',
    Velocidade: 'Velocidade: 150',
    Total: 'Total: 1.200',
    Tipo: 'Tipo: Eletrico',
    habilidadeprincipal: 'Bola elétrica',
    habilidadesecundaria: 'Choque do trovão',
  },
  {
    img: './img/gengar.png',
    Hp: 'Hp: 200',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    Tipo: 'Tipo: Sombrio',
    habilidadeprincipal: 'Lambida',
    habilidadesecundaria: 'Bola sombria',
  },
  {
    img: './img/gyarados.png',
    Hp: 'Hp: 500',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    Tipo: 'Tipo: Voador',
    habilidadeprincipal: 'Furacão',
    habilidadesecundaria: 'Hidro bomba',
  },
  {
    img: './img/dragonite.png',
    Hp: 'Hp: 800',
    Ataque: 'Ataque: 510',
    Defesa: 'Defesa: 200',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.500',
    Tipo: 'Tipo: Dragão',
    habilidadeprincipal: 'Dança do Dragão',
    habilidadesecundaria: 'Hiper Raio',
  },
  {
    img: './img/mewtwo.png',
    Hp: 'Hp: 700',
    Ataque: 'Ataque: 510',
    Defesa: 'Defesa: 200',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.500',
    Tipo: 'Tipo: Psíquico',
    habilidadeprincipal: 'Choque psíquico',
    habilidadesecundaria: 'Bola sombria',
  },
];

for (const key in contexts) {
  const context = contexts[key];
  card_options[key].onclick = () => {
    card_imagem.src = context.img;
    card_status.innerHTML =
      '<li>' +
      context.Hp +
      '</li>' +
      '<li>' +
      context.Ataque +
      '</li>' +
      '<li>' +
      context.Defesa +
      '</li>' +
      '<li>' +
      context.Velocidade +
      '</li>' +
      '<li>' +
      context.Total +
      '</li>' +
      '<li>' +
      context.Tipo +
      '</li>';
    card_skill.innerHTML =
      '<li>' +
      context.habilidadeprincipal +
      '</li>' +
      '<li>' +
      context.habilidadesecundaria +
      '</li>';
  };
}

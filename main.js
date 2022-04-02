const card_imagem = document.getElementById('card-img');
const card_status = document.getElementById('card-text');
const card_skill = document.getElementById('card-skill');
const card_options = document.getElementsByClassName('card-button');

const contexts = [
  {
    img: './img/dragonite.png',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    habilidadeprincipal: 'Dança do Dragão',
    habilidadesecundaria: 'Hiper Raio',
  },
  {
    img: './img/pikachu.png',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    habilidadeprincipal: 'Bola elétrica',
    habilidadesecundaria: 'Choque do trovão',
  },
  {
    img: './img/gengar.png',
    Ataque: 'Ataque: 700',
    Defesa: 'Defesa: 300',
    Velocidade: 'Velocidade: 150',
    Total: 'Total: 1.200',
    habilidadeprincipal: 'Lambida',
    habilidadesecundaria: 'Bola sombria',
  },
  {
    img: './img/gyarados.png',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    habilidadeprincipal: 'Furacão',
    habilidadesecundaria: 'Hidro bomba',
  },
  {
    img: './img/charmander.png',
    Ataque: 'Ataque: 600',
    Defesa: 'Defesa: 500',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.700',
    habilidadeprincipal: 'Brasa',
    habilidadesecundaria: 'Lança chamas',
  },
  {
    img: './img/bulbasaur.png',
    Ataque: 'Ataque: 510',
    Defesa: 'Defesa: 200',
    Velocidade: 'Velocidade: 300',
    Total: 'Total: 1.500',
    habilidadeprincipal: 'Folhas navalhaa',
    habilidadesecundaria: 'Raio solar',
  },
];

for (const key in contexts) {
  const context = contexts[key];
  card_options[key].onclick = () => {
    card_imagem.src = context.img;
    card_status.innerHTML =
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

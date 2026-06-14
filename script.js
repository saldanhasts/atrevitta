// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Form -> WhatsApp
const WA = '5531988351274';
document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const nome = f.nome.value.trim();
  const tel = f.tel.value.trim();
  const msg = f.msg.value.trim() || 'Quero saber mais sobre os atendimentos.';
  const text = `Olá, Atrevittá! Sou ${nome}. Telefone: ${tel}.\n\n${msg}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  f.reset();
});

/* DORES */

const dores = document.querySelectorAll('.card');
const doresDots = document.querySelectorAll('.dores-dot');

let dorAtual = 0;

function trocarDor() {

  dores.forEach(card =>
    card.classList.remove('active')
  );

  doresDots.forEach(dot =>
    dot.classList.remove('active')
  );

  dores[dorAtual].classList.add('active');
  doresDots[dorAtual].classList.add('active');

  dorAtual++;

  if (dorAtual >= dores.length) {
    dorAtual = 0;
  }
}

/* inicia */
trocarDor();

/* autoplay */
setInterval(trocarDor, 5000);

/* DEPOIMENTOS */

const depoimentos = document.querySelectorAll('.depo');
const dots = document.querySelectorAll('.dot');

let current = 0;

function trocarDepoimento() {

  depoimentos.forEach(item =>
    item.classList.remove('active')
  );

  dots.forEach(dot =>
    dot.classList.remove('active')
  );

  depoimentos[current].classList.add('active');
  dots[current].classList.add('active');

  current++;

  if(current >= depoimentos.length){
    current = 0;
  }
}

/* inicia */
trocarDepoimento();

setInterval(trocarDepoimento, 5000);


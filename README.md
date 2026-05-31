# Atrevittá — Landing Page

Site estático em HTML/CSS/JS puro, pronto para hospedar ou vender.

## Estrutura

```
atrevitta/
├── index.html      # Marcação semântica
├── style.css       # Design system + responsividade + animações
├── script.js       # Reveal on scroll + form → WhatsApp
└── assets/
    ├── hero-atrevitta.jpg
    ├── about-claudia.jpg
    └── lotus.png   (favicon)
```

## Como usar

1. Abra `index.html` no navegador (ou suba a pasta inteira em qualquer hospedagem: Netlify, Vercel, Hostinger, GitHub Pages, etc.).
2. Substitua os `href="#"` dos cards do carrossel 3D pelos links reais dos seus Reels do Instagram.
3. Troque as imagens em `assets/` pelas fotos definitivas (mantendo os mesmos nomes).
4. O número de WhatsApp (`5531988351274`) e o e-mail (`claudiaifdias@yahoo.com.br`) já estão configurados.

## Personalização rápida

- **Cores**: edite as variáveis no topo de `style.css` (`--bordeaux`, `--champagne`, etc.).
- **Tipografia**: trocada via `<link>` do Google Fonts no `index.html`.
- **WhatsApp**: troque a constante `WA` em `script.js`.

## Responsivo

Mobile-first com breakpoints em 600px, 768px e 900px. Testado em mobile, tablet e desktop.

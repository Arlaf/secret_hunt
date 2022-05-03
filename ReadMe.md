https://secret-hunt.herokuapp.com/

Pour déployer une autre branche que main :
`git push heroku testbranch:main`
Mail heroku : akroo-...

- Position absolute, bon choix ?
- Hiérarchie dans le CSS : pour le bouton recouvert de 4 zones
- Limiter les calculs pour diminuer le délai entre les calculs : comment stocker la position des éléments
- Pourquoi ça a cassé quand j'ai mis le bouton dans "move_area"
  - Comment débugger le javascript ?
- Structure du fichier javascript ? (function() {}) ? function test() { alert("Argh!"); }
- Des formes en trapèzes plutôt qu'en rectangle ?
- Des variables en CSS pour ne pas avoir à changer les tailles de toutes les formes à la main une à une
- Coordonnées des cellules d'un tableau ? Pour ne pas avoir à les nommer à la main
- Bordure des cases du tableau


/* VARS /

    :root{
        --header-height: 60px;
        --footer-height: 60px;
        --main-min-height: calc(100vh - var(--header-height) - var(--footer-height));
        --text-color: #E3E3E9;
        --yellow: #F2A900;
        --blue: #00A3E0;
        --grey1: #18181C;
        --grey3: #38383C;
        --grey9: #99999F;
        --color-1: #000000;
        --color-2: #267d46;
        --color-3: #ffc03f;
        --grey1: #18181C;
        --bg-color-2: #000000;
        --bg-color-3: #ffc03f;
        --container-padding: 20px;
        --container-max-width: 1440px;
        --column-gap:  10px;
        --ff: 'Titillium Web';
        --radius: 10px;
        --section-padding: 50px;
        --transition: 0.2s all ease;
        --zoom: 110%;
    }
/ GLOBAL */

    body, html{
        background-color: var(--grey1);
        overflow-x: hidden;
    }




$('table tr:nth-of-type('+ i +') td:nth-of-type(3) ')
$('#my-table tr:first-of-type td:last-of-type ')

https://www.cssportal.com/css-clip-path-generator/
https://api.jquery.com/position/
Tracker la souris : https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
Position d'un élément : https://stackoverflow.com/questions/6146027/using-javascript-how-to-get-the-position-of-an-element
Déploiement Heroku : https://www.younup.fr/blog/heroku-pour-deployer-votre-application-python-flask-dans-le-cloud
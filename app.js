// selecting classes
const gallery = document.querySelector('.gallery');
const overlay  = document.querySelector('.overlay');
const overlayImage = document.querySelector('img');
const overlayButton = document.querySelector('.close');


function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img src="img/${randomNumber(102)}.jpg" />
            <div class="item__overlay">
                <button>View →</button>
            </div>
        </div>
    `;
}

function randomNumber (limit) {
    return Math.floor(Math.random() * limit) + 1
}

function handleClick (e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close () {
    overlay.classList.remove('open')
}

// function to generate random spanning values
const spanValues = Array.from({ length: 100}, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

const html = spanValues.map(generateHTML).join('');

gallery.innerHTML = html;


const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayButton.addEventListener('click', close);

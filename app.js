let button = document.getElementById('button');
let image = document.getElementById('pokemon-image')

let images = ['311.png', '321.png', '642.png', '869.png']
let counter = 0;


button.addEventListener('click', function() {
    console.log('image')
    counter++;

    if (counter >= images.length) {
        counter = 0;
    }

    console.log(counter);
    image.src = images[counter];


})
/*
let data = {
    photo: './Pictures/1.jpg',
    title: 'My Title',
    description: 'My Description'
};

$('#valtozo').attr('src', data.photo);
*/

let currentPhoto = 0;

// itt tarolom a kepeket es a hozzajuk tartozo szovegeket
imagesData = [{
    photo: './Pictures/1.jpg',
    title: 'First Picture',
    description: 'How nice the first picture!'
},
{
    photo: './Pictures/2.jpg',
    title: 'Second Picture',
    description: 'How nice the second picture!'
},
{
    photo: './Pictures/3.jpg',
    title: 'Third Picture',
    description: 'How nice the third picture!'
},
{
    photo: './Pictures/4.jpg',
    title: 'Fourth Picture',
    description: 'How nice the fourth picture!'
}]

// a 'valtozo' az a mindig valtozo kep id-ja --> itt alapbol betoltom a 0. kepet ha megnyitom az oldalt
$('#valtozo').attr('src', imagesData[currentPhoto].photo);


let loadphoto = (photonumber) => {
    $('#valtozo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title)
    $('#photo-description').text(imagesData[currentPhoto].description)
}

loadphoto(currentPhoto);

// a nyilakra kattintas novelje vagy csokkentse a 'currentPhoto' erteket
$('#rightarrow').click(() => {
    if (currentPhoto < 5) {
    currentPhoto++;}
    loadphoto(currentPhoto);
});

$('#leftarrow').click(() => {
    if (currentPhoto  > 0) {
    currentPhoto--;}
    loadphoto(currentPhoto);
});

loadphoto(currentPhoto);

// probalom eltarolni vhogy a thumbnail-eket (nem vagyok biztos benne, h ez igy jo)
let thumbnailData = [{
    id: '#tb1',
    value: '0',
},
{
    id: '#tb2',
    value: '1',
},
{
    id: '#tb3',
    value: '2',
},
{
    id: '#tb4',
    value: '3',
}]

/*
//NOT WORKING --> Elvileg az egyes thumbnail-ekre valo kattintassal meg kene valtoztatnia a 'currentPhonot' erteket
// elsonek legalabb 0-ra kene vissza allitania 
// --> ha mukodne, akkor mennek tovabb, h a 'thumbnailData' value adataival legyen egyenlo a 'currentPhoto;

thumbnailData.forEach((thumb) => {
    $('thumbButton').click(() => {
        let currentPhoto = 0;
    })
})
*/


// mivel nem mukodik a fenti forEash loop, igy kenytelen vagyok egyenkent bealliatni a gombokat
$('#tb1').click(() => {
    $('#tb1').css('border', '5px solid white')
    $('#tb2').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb3').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb4').css('border', '3px solid rgb(185, 184, 184)');
    currentPhoto = 0;
    loadphoto(currentPhoto);
})

$('#tb2').click(() => {
    $('#tb2').css('border', '5px solid white');
    $('#tb1').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb3').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb4').css('border', '3px solid rgb(185, 184, 184)');
    currentPhoto = 1;
    loadphoto(currentPhoto);
})

$('#tb3').click(() => {
    $('#tb3').css('border', '5px solid white');
    $('#tb1').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb2').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb4').css('border', '3px solid rgb(185, 184, 184)');
    currentPhoto = 2;
    loadphoto(currentPhoto);
})

$('#tb4').click(() => {
    $('#tb4').css('border', '5px solid white');
    $('#tb1').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb2').css('border', '3px solid rgb(185, 184, 184)');
    $('#tb3').css('border', '3px solid rgb(185, 184, 184)');
    currentPhoto = 3;
    loadphoto(currentPhoto);
})



//  TODO
//  1. Fix changePicture/updatePicture functions
const climbingImages = [
    'images/rock-climbing-gym/1s.jpg',
    'images/rock-climbing-gym/2s.jpg',
    'images/rock-climbing-gym/3s.jpg',
    'images/rock-climbing-gym/4s.jpg',
    'images/rock-climbing-gym/5s.jpg'
]
const changelingImages = [
    'images/changeling/1s.png',
    'images/changeling/2s.png',
    'images/changeling/3s.png',
    'images/changeling/4s.png'
]

let imageContainer = document.getElementById('rock-climbing-images');
let imageCollection = climbingImages;
let lastIndex = 1;
let imgSrc = imageCollection[0];

function changePictureRight(pImageContainer, pImageCollectionString)
{
    setImageCollection(pImageCollectionString);
    imageContainer = pImageContainer;

    if (lastIndex > (imageCollection.length - 1))
    {
        lastIndex = 1;
    } else {
        lastIndex++;
    }
    updatePicture(lastIndex);
}

function changePictureLeft(pImageContainer, pImageCollectionString)
{
    setImageCollection(pImageCollectionString);
    imageContainer = pImageContainer;

    if (lastIndex < 2)
    {
        lastIndex = imageCollection.length;
    } else {
        lastIndex--;
    }
    updatePicture(lastIndex);
}

function updatePicture(index)
{
    imgSrc = imageCollection[(index - 1)];
    imageContainer.src = imgSrc;
}

function setImageCollection(pImageCollectionString)
{
    switch(pImageCollectionString)
    {
        case "climbingImages":
            imageCollection = climbingImages;
            break;
        case "changelingImages":
            imageCollection = changelingImages;
            break;
        default:
            imageCollection = climbingImages;
            break;
    }
}
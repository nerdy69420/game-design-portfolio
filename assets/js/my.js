const images = [
    'images/rock-climbing-gym/1s.jpg',
    'images/rock-climbing-gym/2s.jpg',
    'images/rock-climbing-gym/3s.jpg',
    'images/rock-climbing-gym/4s.jpg',
    'images/rock-climbing-gym/5s.jpg'
]

const imageContainer = document.getElementById('rock-climbing-images');

lastIndex = 1;

function changePictureRight()
{
    if (lastIndex > 4)
    {
        lastIndex = 1;
    } else {
        lastIndex++;
    }
    updatePicture(lastIndex);
}

function changePictureLeft()
{
    if (lastIndex < 2)
    {
        lastIndex = 5;
    } else {
        lastIndex--;
    }
    updatePicture(lastIndex);
}

function updatePicture(index)
{
    const img_src = images[index-1];
    imageContainer.src = img_src;
}
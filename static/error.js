function getErrorImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('errorImage').src = data.message;
        })
        .catch(error => {
            console.error('Error fetching error image:', error);
        });
};

document.onload(getErrorImage);
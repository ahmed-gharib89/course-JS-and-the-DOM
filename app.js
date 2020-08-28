document.addEventListener('click', function(){
    const mainHeading = document.querySelector('h1');
    mainHeading.style.backgroundColor = '#00ffff'
});

document.body.addEventListener('keypress', function(){
    console.log('Removing first child');
    document.querySelector('#contain-all').firstElementChild.remove()
});
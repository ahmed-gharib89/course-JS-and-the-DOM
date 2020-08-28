document.addEventListener('click', function(event){
    console.log('x: ' + event.pageX + ', y: ' + event.pageY)
});

document.body.addEventListener('keypress', function(){
    console.log('Removing first child');
    document.querySelector('#contain-all').firstElementChild.remove()
});

const myCustomDiv = document.createElement('div');
function respondToClick(){
    console.log('A paragraph was clicked.');
};

for (let i=1; i<=200; i++){
    const newEelement = document.createElement('p');
    newEelement.textContent = 'This is paragraph number' + i;

    myCustomDiv.appendChild(newEelement);
};
myCustomDiv.addEventListener('click', respondToClick);
document.body.appendChild(myCustomDiv);
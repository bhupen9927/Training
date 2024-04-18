document.getElementById('note').textContent='this is pure DOM manipulation content';

let circle= document.getElementById('circle');
circle.addEventListener('click', changeColor);

function changeColor(){
    let randomColor=Math.floor(Math.random()*16777216).toString(16);
    // console.log(randomColor);
    randomColor.padStart(6,0);
    circle.style.backgroundColor=`#${randomColor}`;
}


// for form

let button=document.getElementById('button');
button.addEventListener('click', getDetails);

function getDetails(){
    let name=document.getElementById('name').value;
    let animal=document.getElementById('animal').value;
    let message=document.getElementById('message');

    message.textContent=`Hi ${name} can i have your ${animal}`;    
}

// set interval
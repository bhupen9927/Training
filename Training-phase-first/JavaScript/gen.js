function* gen(){
    let x=100;
    yield "first step";
    yield x;
    let y="last one";
    yield y;
    console.log("function complete");
}

let g=gen();
console.log(g.next());
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());

function* simpleGenerator(){
    let i=100;
    while(true){
        i++;
        yield i;
    }
}

let sG=simpleGenerator();

function getNewId(){
    //console.log(sG.next());
    document.getElementById('newId').innerText=sG.next().value;
}
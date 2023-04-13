function Fines(){

    const blocco = document.querySelector("div.fine")

    riavviascelta();

    for(const box of boxes){
        box.addEventListener('click', SelectImage);
    }
    
    blocco.classList.add("hidden");

 }


 function Winner(vincitore){

    const titolo = document.querySelector("h1.testo");

    titolo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].title;

    const testo = document.querySelector("div.testo");

    testo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].contents;

    const finalblock = document.querySelector("div.fine")
    
    finalblock.classList.remove("hidden");
    
}




function Ris(check){

    if(check[1].dataset.choiceId === check[2].dataset.choiceId){
            return Winner(check[1]);
        }
    
    return Winner(check[0])

}



function Controllaris(){

    const check = document.querySelectorAll(".checked");

    if(check.length === 3){
        for(const box of boxes){
            box.removeEventListener('click', SelectImage);
        }

        Ris(check);
    }
}

function riavviascelta(){

    const unchecked = document.querySelectorAll(".unchecked");
    const checked = document.querySelectorAll(".checked");

        for(const check of checked){
            check.classList.remove("checked");
            check.querySelector(".checkbox").src= "images/unchecked.png";
        }

        for(const notcheck of unchecked){

        notcheck.classList.remove("unchecked");

        }
}

function Scelta(section){

    const unchecked = section.querySelectorAll(".unchecked");
    const checked = section.querySelector(".checked");

    if(checked){
        checked.classList.remove("checked");
        checked.querySelector(".checkbox").src= "images/unchecked.png";
    }

        for(const check of unchecked){

        check.classList.remove("unchecked");

        }
}

function SelectImage(event){

    Scelta(event.currentTarget.parentNode);
    const checkbox = event.currentTarget.querySelector(".checkbox");
    checkbox.src = "images/checked.png";
    event.currentTarget.classList.add("checked");

    const boxes = event.currentTarget.parentNode.querySelectorAll(".choice-grid div");

    for(const box of boxes){

        if(box !== event.currentTarget){
            box.classList.add("unchecked");
        }

    }

    Controllaris();
}

const boxes = document.querySelectorAll(".choice-grid div");
for(const box of boxes){
    box.addEventListener('click', SelectImage);
}

document.querySelector("button").addEventListener('click', Fines);

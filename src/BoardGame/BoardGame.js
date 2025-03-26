let questions = [];

async function loadQuestions() {
    try {
        const response = await fetch('./questions.json');
        questions = await response.json();
        console.log("Questions loaded:", questions.length);

    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

let cells = document.querySelectorAll('.cell');

//keep modal as variable
let modal = document.querySelector('.modal-question');
let currentQuestion = null;

function generateQuestion(){
    let random = 0;
    if(questions.length > 1){
        random = Math.floor(Math.random() * questions.length);
        currentQuestion = random;
        console.log(questions[currentQuestion].answer)
    }
    modal.innerHTML = questions[random].body;
}

function createPawn(number){
    let obj = document.createElement('i')
    obj.setAttribute("id", number)
    obj.classList.add("fas")
    obj.classList.add("fa-chess-pawn")
    obj.classList.add(`pawn-${number}`)
    return obj;
}
let pawn1 = {
    id:1,
    element: createPawn(1),
    currentPos: 0,
}
let pawn2 = {
    id:2,
    element: createPawn(2),
    currentPos: 0,
}
let pawn3 = {
    id:3,
    element: createPawn(3),
    currentPos: 0,
}
let pawn4 = {
    id:4,
    element: createPawn(4),
    currentPos: 0,
}

function putPawns(pawns){
    pawns.forEach(pawn => {
        cells[pawn.currentPos].appendChild(pawn.element)
    });
}

function movePawnForward(pawn) {
    if(pawn !== null){
        pawn.element.remove();
        pawn.currentPos++;
        document.querySelector(`#cell-${pawn.currentPos}`).appendChild(pawn.element)
    }
}


// Setup
let turn=0;
let pawnsToPlay = [pawn1, pawn2]
let pawnToMove = 0

window.onload = () => {
    loadQuestions()
    putPawns(pawnsToPlay);
};



let submit_button = document.querySelector('.btn-primary');
let input = document.querySelector('#question').value

let button = document.querySelector('#question-picker')
button.addEventListener('click', function(){
    if(questions.length >= 1){
        generateQuestion();
    }
})

submit_button.addEventListener('click', function(){
        if(input.value === questions[currentQuestion].answer){
            movePawnForward(pawnsToPlay[pawnToMove])
        }
        turn++;

        //set next pawn to move
        if(pawnToMove < pawnsToPlay.length - 1){
            pawnToMove++;
        }else{
            pawnToMove = 0
        }
        
        //deletes the questions form the array
        questions.splice(currentQuestion, 1);
        //clear form
        document.querySelector(".modal-question").innerHTML = "";
        document.querySelector("#question").value = "";
        console.log(questions.length)


        // check if pawn is at the Finish
        let finish = document.querySelector(".finish__cell").children;
        if(finish.length > 0) {
            window.alert(`PAWN ${finish[0].id} has WON!`)
        }
      

        //disables the button if there are no more questions
        if(questions.length === 0){
            button.disabled = true;
        }    
})








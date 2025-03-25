let cells = document.querySelectorAll('.cell');

let testQuestion1 = {
    body: "<strong>Who is the author of ,,The Fellowship of the Ring“?</strong> <br> a) Charles Dickens <br> b) J.R.R. Tolkien <br> c) William Shakespeare <br> d) Mark Twain",
    answer: "b"
}
let testQuestion2 = {
    body: "<strong>What kind of world does J.R.R Tolkien emphasize in his novels?</strong> <br> a) fantastic world <br> b) real world <br> c) romantic world <br> d) ancient world",
    answer: "a"
}
let testQuestion3 = {
    body: "<strong>What kind of beings does J.R.R. Tolkien include in his works?</strong>",
    answer: "mythological"
}
let testQuestion4 = {
    body: "<strong>Which other famous fantasy novel is J.R.R. Tolkien known for?</strong> <br> а) Oliver Twist <br> b) Hamlet <br> c) A Midsummer Night's Dream <br> d) The Hobbit",
    answer: "d"
}
let testQuestion5 = {
    body: "<strong>J.R.R. Tolkien is a/an .......writer, poet and academic.</strong> <br> a) American <br> b) Indian <br> c) Enlish <br> d) Australian",
    answer: "c"
}
let testQuestion6 = {
    body: "<strong>Who is the author of ,,Hamlet“?</strong> <br> a) William Shakespeare <br> b) Doris Lessing <br> c) Jane Austen <br> d) Nathaniel Hawthorne",
    answer: "a"
}
let testQuestion7 = {
    body: "<strong>Where is William Shakespeare born?</strong> <br> a) Manchester, England <br> b) Ohio, USA <br> c) Salem, Massachusetts <br> d) Stratford-upon-Avon, England",
    answer: "d"
}
let testQuestion8 = {
    body: "<strong>William Shakespeare was the father of the English.........</strong>",
    answer: "drama"
}
let testQuestion9 = {
    body: "<strong>Shakespeare's works are still enormously popular even today.</strong> <br> a) True <br> b) False",
    answer: "a"
}
let testQuestion10 = {
    body: "<strong>In which town did Shakespeare pursue a career in the theatre?</strong> <br> a) Oxford <br> b) London <br> c) Manchester <br> d) Edinburgh",
    answer: "b"
}
let testQuestion11 = {
    body: "<strong>How many plays in total did Shakespeare write?</strong> <br> a) 38 <br> b) 71 <br> c) 55 <br> d) 29",
    answer: "a"
}
let testQuestion12 = {
    body: "<strong>How many sonnets in total did Shakespeare write?</strong> <br> a) 45 <br> b) 134 <br> c) 154 <br> d) 90",
    answer: "c"
}
let testQuestion13 = {
    body: "<strong>Where were Shakespeare's plays frequently staged?</strong>",
    answer: "globe theatre"
}
let testQuestion14 = {
    body: "<strong>When were Shakespeare's most productive years?</strong> <br> a) 1569-1578 <br> b) 1601-1613 <br> c) 1552-1560 <br> d) 1589-1613",
    answer: "d"
}
let testQuestion15 = {
    body: "<strong>Which title was NOT created by Shakespeare?</strong> <br> a) Hamlet <br> b) Hard Times <br> c) King Lear <br> d) Macbeth",
    answer: "b"
}
let testQuestion16 = {
    body: "<strong>Where did Shakespeare die?</strong> <br> a) Stratford <br> b) Kenilworth <br> c) Alcester <br> d) Rugby",
    answer: "a"
}
let testQuestion17 = {
    body: "<strong>How did Claudius murder King Hamlet?</strong> <br> a) by stabbing him through an arras <br> b) by ordering him to be hanged <br> c) by pouring poison into his ear <br> d) by poisoning his wineglass",
    answer: "c"
}
let testQuestion18 = {
    body: "<strong>Whose skull does Hamlet discover in the churchyard?</strong> <br> a) The former court jester's <br> b) Ophelia's <br> c) Reynaldo's <br> d) His father's",
    answer: "a"
}
let testQuestion19 = {
    body: "<strong>Where do Hamlet and Laertes fight during Ophelia's funeral?</strong> <br> a) in the nearby woods <br> b) inside the church <br> c) beside Ophelia's grave <br> d) inside the grave itself",
    answer: "d"
}
let testQuestion20 = {
    body: "<strong>Which of the following characters survive the play?</strong> <br> a) Horatio <br> b) Claudius <br> c) Prince Hamlet <br> d) Ophelia",
    answer: "a"
}
let testQuestion21 = {
    body: "<strong>How does Ophelia die?</strong> <br> a) Claudius stabs her <br> b) She slits her wrists <br> c) Hamlet strangles her <br> d) She drowns in the river",
    answer: "d"
}
let testQuestion22 = {
    body: "<strong>Why, according to Polonious, has Hamlet gone mad?</strong> <br> a) he grieves too much for his father <br> b) he is in love with Ophelia <br> c) he despises Claudius for marrying Getrude <br> d) he is jealous Laertes and longs to return Wittenberg",
    answer: "b"
}
let testQuestion23 = {
    body: "<strong>Who is the last character that died in the play?</strong> <br> a) Horation <br> b) Claudius <br> c) Hamlet <br> d) Fortinbras",
    answer: "c"
}
let testQuestion24 = {
    body: "<strong>Who says the famous \"To be, or not be\" soliloguy?</strong> <br> a) Claudius <br> b) The ghost <br> c) Hamlet <br> d) Laertes",
    answer: "c"
}
let testQuestion25 = {
    body: "<strong>Why does Hamled decide not to kill Claudius after the travelling players' play?</strong> <br> a) Claudius is praying <br> b) Claudius pleads for mercy <br> c) Claudius is asleep <br> d) Getrude is in the next room",
    answer: "a"
}
let testQuestion26 = {
    body: "<strong>Which of Claudius and Laerte's traps for Hamlet succeeds in killing him?</strong> <br> a) the poisoned cup <br> b)the poisoned dagger <br> c) the sharpened sword <br> d) the poisoned sword",
    answer: "d"
}
let testQuestion27 = {
    body: "<strong>The following words are part of a rhyming couplet - \"The time is out of joint. O cursed spite, That ever I was born to set it right!\"</strong> <br> a) True <br> b) False",
    answer: "a"
}
let testQuestion28 = {
    body: "<strong>Black verse is .........</strong> <br> a) rhymed <br> b) unrhymed",
    answer: "b"
}
let testQuestion29 = {
    body: "<strong>In Shakespeare's plays, .......... are used to sum up the end of a character's speech, very often right at the end of a scene.</strong> <br> a) rhyming couplets <br> b) blank verses",
    answer: "a"
}
let testQuestion30 = {
    body: "<strong>Most of Shakespeare's plays were written in the style of .......... drama.</strong>",
    answer: "poetic"
}
let testQuestion31 = {
    body: "<strong>What did the ring look to be made of?</strong>",
    answer: "gold"
}
let testQuestion32 = {
    body: "<strong>What effect does Bilbo's ring have on its wearer?</strong> <br> a) it makes him invisible <br> b) it gives him strength <br> c) it enables him to see in the dark <br> d) it has seemingly no effect",
    answer: "a"
}
let testQuestion33 = {
    body: "<strong>What is the name of the fiery mountain where the One ring was forged?</strong> <br> a) Caradhras <br> b) Orodruin <br> c) Orthanc <br> d) Dúnedain",
    answer: "b"
}
let testQuestion34 = {
    body: "<strong>Which terrible creature does Gandalf battle during the journey through Moria?</strong> <br> a) The Barrow-wight <br> b) The Uruk-hai <br> c) The Balrog <br> d) The Nazgûl",
    answer: "c"
}
let testQuestion35 = {
    body: "<strong>Boromir suggests the Fellowship to go to the city of Minas Tirith.</strong> <br> a) True <br> b) False",
    answer: "a"
}
let testQuestion36 = {
    body: "<strong>\"It's enough to make a cat laugh\" is an example of ........... personification.</strong> <br> a) object <br> b) animal <br> c) abstract idea <br> d) none",
    answer: "b"
}
let testQuestion37 = {
    body: "<strong>What kind of personification is \"it\" that is underlined in the first paragraph?</strong> <br> a) none <br> b) abstract idea <br> c) animal <br> d) object",
    answer: "d"
}
let testQuestion38 = {
    body: "<strong>\"Opportunity was knocking at her door\" is an example of object personification.</strong> <br> a) True <br> b) False",
    answer: "b"
}
let testQuestion39 = {
    body: "<strong>What is the synonym of the of the word \"toad\"?</strong> <br> a) a frog <br> b) a lion <br> c) bird <br> d) none of the mentioned",
    answer: "a"
}
let testQuestion40 = {
    body: "<strong>What does the word  \"shears\" mean?</strong>",
    answer: "scissors"
}
let testQuestion41 = {
    body: "<strong>Continue the sentence: \"springing up like a dog.......\".</strong> <br> a) ready for a walk <br> b) discouraged for a walk <br> c) invited for a walk <br> d) not ready for a walk",
    answer: "c"
}
let testQuestion42 = {
    body: "<strong>The antonym of the word \"weakening\" is phrase \"getting strong\".</strong> <br> a) False <br> b) True",
    answer: "b"
}

const questions = [
    testQuestion1, testQuestion2, testQuestion3, testQuestion4, testQuestion5,
    testQuestion6, testQuestion7, testQuestion8, testQuestion9, testQuestion10,
    testQuestion11, testQuestion12, testQuestion13, testQuestion14, testQuestion15,
    testQuestion16, testQuestion17, testQuestion18, testQuestion19, testQuestion20,
    testQuestion21, testQuestion22, testQuestion23, testQuestion24, testQuestion25,
    testQuestion26, testQuestion27, testQuestion28, testQuestion29, testQuestion30,
    testQuestion31, testQuestion32, testQuestion33, testQuestion34, testQuestion35,
    testQuestion36, testQuestion37, testQuestion38, testQuestion39, testQuestion40,
    testQuestion41, testQuestion42
];


//keep modal as variable
let modal = document.querySelector('.modal');
let currentQuestion = null;
function generateQuestion(){
    let random = 0;
    if(questions.length > 1){
        random = Math.floor(Math.random() * questions.length);
        currentQuestion = random;
    }
    document.querySelector(".modal-question").innerHTML = questions[random].body;
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

function putPawns(){
    cells[pawn1.currentPos].appendChild(pawn1.element);
    cells[pawn2.currentPos].appendChild(pawn2.element);
}

function movePawnForward(pawn) {
    if(pawn !== null){
        pawn.element.remove();
        pawn.currentPos++;
        document.querySelector(`#cell-${pawn.currentPos}`).appendChild(pawn.element)
    }
}

let button = document.querySelector('#question-picker')

button.addEventListener('click', function(){
    if(questions.length >= 1){
        generateQuestion();
    }
    console.log(modal)
})

window.onload = (event) => {
    putPawns();
  };

submit_button = document.querySelector('.btn-primary');
let input = document.querySelector('#question').value
let turn=1;
submit_button.addEventListener('click', function(){
        if(currentQuestion !== null){
            if(questions[currentQuestion].answer === document.querySelector('#question').value){
                if(turn%2){
                    if(true){
                        movePawnForward(pawn1)
                    }
                }else{
                    if(true){
                        movePawnForward(pawn2)
                    }
                }
                turn+=1;
            }
            //deletes the questions form the array
            questions.splice(currentQuestion, 1);
        }
        //clear form
        document.querySelector(".modal-question").innerHTML = "";
        document.querySelector("#question").value = "";
        console.log(questions.length)
        //disables the button if there are no more questions
        if(questions.length === 0){
            button.disabled = true;
        }    
})








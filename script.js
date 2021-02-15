const buttons = document.getElementsByClassName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',game)
}


/*console.log(currentRound.innerHTML);
currentRound.innerHTML = number;
console.log(currentRound);*/





function computerChoice() {
    var value = Math.floor(Math.random() * 3); ;
    if (value == 0) {
        return "rock";
    } else if (value == 1) {
        return "paper";
    } else {
        return "scissor"
    }
}

function compareAns(player,comp) {

    if (player == "rock" && comp == "scissor" || player == "paper" && comp == "rock" || player == "scissor" && comp == "paper") {
        return 1;
    } else if (player == comp) {
        return 2;
    } else {
        return 0;
    }
}

function increaseRound() {
    const currentRound = document.getElementsByClassName("round");
    var number = parseInt(currentRound[0].innerHTML);
    number++;
    currentRound[0].innerHTML = number;
    
}

function playAgain() {
    //Lägg till Play again button
    //Lägg till event att "reset" spelet
    //Announcera vinnaren 
    //Ta bort css.pointer och event från buttons
}

function setScore(result) {
    const player = document.getElementsByClassName("p1");
    const computer = document.getElementsByClassName("computer");
    

    if (result == 0) {
        var number = parseInt(computer[0].innerHTML);
        number++
        computer[0].innerHTML = number;
    } else if (result == 1) {
        var number = parseInt(player[0].innerHTML);
        number++
        player[0].innerHTML = number;
    }

    if (number == 5) {
        playAgain();
    }

    
}

function printResult(result) {
    var para = document.createElement("P");   
    var cw = document.createTextNode("Computer won, P1 lost");
    var pw = document.createTextNode("P1 won, Computer lost");
    var d = document.createTextNode("It's a draw");
    if (result == 0) {
        para.appendChild(cw)
    } else if (result == 1) {
        para.appendChild(pw)
    } else {
        para.appendChild(d)
    }

    document.getElementsByClassName("output")[0].appendChild(para);

    setScore(result)


}


function game() {
    const player = this.getAttribute("value");
    const comp = computerChoice();
    var result = compareAns(player,comp)

    increaseRound();
    printResult(result);

    
 
}







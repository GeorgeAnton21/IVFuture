// Declararea variabilelor
//Variabilele signX si sign0 sunt pentru situatia in care atunci cand se alege 0 sa inceapa calculatorul cu X
let signX = 'X';
let sign0 = '0';
let sign='X';
let sign2='0';

// Declaram functia winner cu un parametru game
function winner(game) {

    // Setting DOM to all boxes or input field
    let gameType = game === 'single' ? 'b' : 'c'; ///daca este single foloseste b ul, daca nu, c ul
    let cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9;
//Dupa ce le am declarat le atribuim o valoare cell-urilor
    cell1 = document.getElementById(`${gameType}1`).value;
    cell2 = document.getElementById(`${gameType}2`).value;
    cell3 = document.getElementById(`${gameType}3`).value;
    cell4 = document.getElementById(`${gameType}4`).value;
    cell5 = document.getElementById(`${gameType}5`).value;
    cell6 = document.getElementById(`${gameType}6`).value;
    cell7 = document.getElementById(`${gameType}7`).value;
    cell8 = document.getElementById(`${gameType}8`).value;
    cell9 = document.getElementById(`${gameType}9`).value;



    // Checking if Player X won or not and after
    // that disabled all the other fields
    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;
    if(player2==''&&player1==''){
        player2='Computer ';
        player1='Player ';
    }
    ///Verificam toate variantele posibile de castig
    if ((cell1 == sign ) && (cell2 == sign ) && (cell3 == sign )) {

        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 4; i <= 9; i++) {
            document.getElementById(`${gameType}${i}`).disabled = true;
        }
        
        window.alert(player1 + ' won!');
    } else if ((cell1 == sign ) && (cell4 == sign ) && (cell7 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 2; i <= 9; i++) {
            if (i != 4 && i != 7) {
                document.getElementById(`${gameType}${i}`).disabled = true;
                
            }


        }

        window.alert(player1 + ' won!');

    } else if ((cell7 == sign ) && (cell8 == sign ) && (cell9 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`${gameType}${i}`).disabled = true;
        }
        window.alert(player1 + ' won!');

    } else if ((cell3 == sign ) && (cell6 == sign ) && (cell9 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 1; i <= 8; i++) {
            if (i != 3 && i != 6) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player1 + ' won!');

    } else if ((cell1 == sign ) && (cell5 == sign ) && (cell9 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 2; i <= 8; i++) {
            if (i != 5) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player1 + ' won!');

    } else if ((cell3 == sign ) && (cell5 == sign ) && (cell7 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 3 && i != 5 && i != 7) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player1 + ' won!');

    } else if ((cell2 == sign ) && (cell5 == sign ) && (cell8 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 2 && i != 5 && i != 8) {
                document.getElementById(`${gameType}${i}`).disabled = true; 
            }
        }
        window.alert(player1 + ' won!');

    } else if ((cell4 == sign ) && (cell5 == sign ) && (cell6 == sign )) {
        document.getElementById('print').innerHTML = player1 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 4 && i != 5 && i != 6) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player1 + ' won!');

    }

        // Checking of Player X finsh
        // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((cell1 == sign2 ) && (cell2 == sign2 ) && (cell3 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 4; i <= 9; i++) {
            document.getElementById(`${gameType}${i}`).disabled = true;
        }


        window.alert(player2 + ' won!');
    } else if ((cell1 == sign2 ) && (cell4 == sign2 ) && (cell7 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 2; i <= 9; i++) {
            if (i != 4 && i != 7) {
                document.getElementById(`${gameType}${i}`).disabled = true;   
            }
        }

        window.alert(player2 + ' won!');
    } else if ((cell7 == sign2 ) && (cell8 == sign2 ) && (cell9 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`${gameType}${i}`).disabled = true;
        }
        window.alert(player2 + ' won!');
    } else if ((cell3 == sign2 ) && (cell6 == sign2 ) && (cell9 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 1; i <= 8; i++) {
            if (i != 3 && i != 6) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player2 + ' won!');
    } else if ((cell1 == sign2 ) && (cell5 == sign2 ) && (cell9 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 2; i <= 8; i++) {
            if (i != 5) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }

        window.alert(player2 + ' won!');
    } else if ((cell3 == sign2 ) && (cell5 == sign2 ) && (cell7 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 3 && i != 5 && i != 7) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }

        window.alert(player2 + ' won!');
    } else if ((cell2 == sign2 ) && (cell5 == sign2 ) && (cell8 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 2 && i != 5 && i != 8) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }

        window.alert(player2 + ' won!');
    } else if ((cell4 == sign2 ) && (cell5 == sign2 ) && (cell6 == sign2 )) {
        document.getElementById('print').innerHTML = player2 + ' won!';
        for (let i = 1; i <= 9; i++) {
            if (i != 4 && i != 5 && i != 6) {
                document.getElementById(`${gameType}${i}`).disabled = true;
            }
        }
        window.alert(player2 + ' won!');
    }

        // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((cell1 == sign || cell1 == sign2)
     && (cell2 == sign || cell2 == sign2) && 
     (cell3 == sign || cell3 == sign2) && 
     (cell4 == sign || cell4 == sign2) && 
     (cell5 == sign || cell5 == sign2) && 
     (cell6 == sign || cell6 == sign2) && 
     (cell7 == sign || cell7 == sign2) && 
     (cell8 == sign || cell8 == sign2) && 
     (cell9 == sign || cell9 == sign2)) {
        document.getElementById('print').innerHTML = 'Tie!';
        window.alert('Tie!');
    } else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print').innerHTML = `It's ` + player1 + `'s turn.`;
        } else {
            document.getElementById('print').innerHTML = `It's ` + player2 + `'s turn.`;
        }
    }
}

///reseteaza jocul
function reset() {
    location.reload();
    /*document.getElementById('player1').value='';  
    document.getElementById('player2').value='';*/
    document.getElementById('print').innerHTML = '';
    document.getElementById('player1').innerHTML='';
    document.getElementById('player2').innerHTML='';
}

// functie sa dezactivam tabla 
function disableBoard() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).disabled = true;
        document.getElementById(`c${i}`).disabled = true;
    }
}

//functie sa activam tabla 
function enableBoard(){
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).disabled = false;
        document.getElementById(`c${i}`).disabled = false;
    }
}

///functie de selectare a elementului 0 pt singleplayer
function choose0() {

    if (document.getElementById('btn0').innerText === sign2) {

        sign = sign0;
        sign2=signX;
        enableBoard();
        AI();
        document.getElementById('btn0').disabled=true;
        document.getElementById('btnX').disabled=true;
    }

}

///functie de selectare a elementului X pt singleplayer
function chooseX() {

    if (document.getElementById('btnX').innerText === sign) {

        sign=signX;
        sign2= sign0;
        enableBoard();

        document.getElementById('btnX').disabled=true;
        document.getElementById('btn0').disabled=true;
    }

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
//functiile sign_check sunt folosite pentru a verifica daca celula este ocupata sau nu

flag = 1;

function sign_check_3() {
    if (flag == 1) {
        document.getElementById('b1').value = sign;
        document.getElementById('b1').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b1').value = sign2;
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function sign_check_4() {
    if (flag == 1) {
        document.getElementById('b2').value = sign;
        document.getElementById('b2').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b2').value = sign2;
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function sign_check_5() {
    if (flag == 1) {
        document.getElementById('b3').value = sign;
        document.getElementById('b3').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b3').value = sign2;
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function sign_check_6() {
    if (flag == 1) {
        document.getElementById('b4').value = sign;
        document.getElementById('b4').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b4').value = sign2;
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function sign_check_7() {
    if (flag == 1) {
        document.getElementById('b5').value = sign;
        document.getElementById('b5').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b5').value = sign2;
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function sign_check_8() {
    if (flag == 1) {
        document.getElementById('b6').value = sign;
        document.getElementById('b6').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b6').value = sign2;
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function sign_check_9() {
    if (flag == 1) {
        document.getElementById('b7').value = sign;
        document.getElementById('b7').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b7').value = sign2;
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function sign_check_10() {
    if (flag == 1) {
        document.getElementById('b8').value = sign;
        document.getElementById('b8').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b8').value = sign2;
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function sign_check_11() {
    if (flag == 1) {
        document.getElementById('b9').value = sign;
        document.getElementById('b9').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b9').value = sign2;
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}
///initializam mutarile calculatorului cu 0
let moves = 0;

let IDs =['c1','c2','c3','c4','c5','c6','c7','c8','c9'];
///functie de debifare
function unclick()
{
    for (let i = 1; i<10; i++) {
        document.getElementById(`c${i}`).onclick=null;
    }
}
///functie prin intermediul careia verificam ce celule au fost selectate si apelam functia AI; 
function clickerAI(id)
{    let player2 = 'computer';
    document.getElementById(id).value=sign;
    document.getElementById(id).onclick=null;
    let index = IDs.indexOf(id);
    IDs.splice(index,   1);
    moves++;
    if (moves < 8) {
        AI();
    }
    if (moves === 9) {
        document.getElementById('print_singleplayer').innerHTML=`TIE`;
        unclick();

    }
    moves++;
    winner('c');
}
///functia pentru logica de mutare a calculatorului (random)
function AI()
{
    let len = IDs.length - 1;
    let rand = Math.random();
    let random = Math.round(rand * len);
    let target = IDs[random];
    document.getElementById(target).value = sign2;
    document.getElementById(target).onclick = null;
    let index = IDs.indexOf(target);
    IDs.splice(index, 1);
}
function removeString(){
    document.getElementById('player2').value ='';
    document.getElementById('player1').value ='';
}
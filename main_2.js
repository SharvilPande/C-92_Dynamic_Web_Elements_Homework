Player_1 = localStorage.getItem("player1_name");
Player_2 = localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=Player_1 + ":";
document.getElementById("player2_name").innerHTML=Player_2 + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML= "Question Turn - " + Player_1;
document.getElementById("answer_turn").innerHTML =  "Answer Turn - " + Player_2;

function send() {
    get_number1 = document.getElementById("n1").value;
    get_number2 = document.getElementById("n2").value;
    console.log(get_number1);
    console.log(get_number2);

    number_multiplication = get_number1 + "x" + get_number2;
    console.log(number_multiplication);

    question = "<h4> Q. " + number_multiplication + "</h4>";
    input_box = "<h4> Answer: </h4>" + "<input class = 'form-control' id = 'input_answer' type = 'text'> <br>";
    button = "<button class='btn btn-primary' onclick ='check()'>Check</button>"
    column = question + input_box + button;
    document.getElementById("questions").innerHTML=column;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {

    number_product = get_number1 * get_number2;
    console.log(number_product);
  
    input_answer = document.getElementById("input_answer").value;

    if (input_answer == number_product) {

        console.log(question_turn);
        console.log(answer_turn);

        if (answer_turn == "player_1") {
           
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        } else {
          
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        } 

    }

    if (question_turn == "player_1") {

        question_turn = "player_2";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + Player_2;
      
    } else {

        question_turn = "player_1";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + Player_1;

    }

    if (answer_turn == "player_2") {

        answer_turn = "player_1";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player_1;
        
    } else {

        answer_turn = "player_2";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player_2;
        
    }

    document.getElementById("questions").innerHTML = "";

} 


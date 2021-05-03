var player_1_name = localStorage.getItem("player_1");
var player_2_name = localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML=player_1_name + ": ";
document.getElementById("player2_name").innerHTML=player_2_name + ": ";
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question Turn: " + player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: " + player_2_name;

function send() {
    var get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    var second_letter = word.charAt(1);
    console.log(second_letter);

    var middle_position = Math.floor(word.length/2);
    var middle_letter = word.charAt(middle_position);
    console.log(middle_letter);

    var last_position = word.length - 1;
    var last_letter = word.charAt(last_position);
    console.log(last_letter);

    var remove_second_letter = word.replace(second_letter , "_");
    var remove_middle_letter = remove_second_letter.replace(middle_letter , "_");
    var remove_last_letter = remove_middle_letter.replace(last_letter , "_");

    var question = "<h4 id = 'word_display'>Q: " + remove_last_letter + "</h4> <br>"
    var answer = "Answer: <input id = 'input_check_box' type = 'text' placeholder = 'Enter your answer here'> <br><br>"
    var check = "<button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    var row = question + answer + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word) {
        if(answer_turn == "player_1") {
            player_1_score = player_1_score + 1;
            console.log(player_1_score);
            document.getElementById("player1_score").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score + 1;
            console.log(player_2_score);
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
        window.alert("Correct !!! 🏆🏆🏆")
    }else{
        window.alert("Wrong !!! Better luck next time 😐😑")
    }

    if(question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_2_name;
    }else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_1_name;
    }

    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_2_name;
    }else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_1_name;
    }
    document.getElementById("output").innerHTML = ""
}
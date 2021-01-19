function addUser() {
    player1 = document.getElementById("input_1").value;
    player2 = document.getElementById("input_2").value;

    var empty = "";

    if (player1 == empty || player2 == empty) {
        window.alert("Please enter a valid name for either players");
        return;
    }

    localStorage.setItem("player1_name", player1);
    localStorage.setItem("player2_name", player2);

    window.location="index_2.html";

    var checkBox1 = document.getElementById("checkbox_input_1");
    var checkBox2 = document.getElementById("checkbox_input_2");

    if (checkBox1.checked == true) {
        localStorage.setItem("remember_flag_p1", "yes");   
    } else {
        localStorage.setItem("remember_flag_p1", "no"); 
    }

    if (checkBox2.checked == true) {
        localStorage.setItem("remember_flag_p2", "yes");   
    } else {
        localStorage.setItem("remember_flag_p2", "no"); 
    }
}

function load_users() {

    flag_status_p1 = localStorage.getItem("remember_flag_p1");
    flag_status_p2 = localStorage.getItem("remember_flag_p2");

    if (flag_status_p1=="yes") {

    player_no_1 = localStorage.getItem("player1_name");

    document.getElementById("input_1").value=player_no_1;
}

    if (flag_status_p2=="yes") {

    player_no_2 = localStorage.getItem("player2_name");

    document.getElementById("input_2").value=player_no_2;

}
}









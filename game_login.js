function addUser() {
    var value_1 = document.getElementById("input_login_1").value;
    localStorage.setItem("player_1" , value_1);
    var value_2 = document.getElementById("input_login_2").value;
    localStorage.setItem("player_2" , value_2);
    window.location = "game_page.html"
}
function logout_yes(){
    localStorage.removeItem("room_name");
    window.location = "chatty-login.html"
}

function logout_no(){
    window.location = "chatty-login.html"
}
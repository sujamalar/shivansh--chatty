function submit(){
    user_name = document.getElementById("username_input").value;
    localStorage.setItem("username",user_name);
    window.location = "student-or-teacher.html";
}
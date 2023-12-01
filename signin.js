function myFunction() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
  
    if(user == "feiner" && pass == "fe-dev") {
      window.sessionStorage.setItem("user", "user1"); 
      window.location.href="questioinsfeed.html"
    } else if(user == "user2" && pass == "xxzz") {
      window.sessionStorage.setItem("user", "user2");
      window.location.href="about2.html"
    } else {
      alert("Incorrect username or password");
    }
    
}
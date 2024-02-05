function myFunction() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
  
    if(user == "admin" && pass == "shapee") {
      window.sessionStorage.setItem("user", "user1"); 
      window.location.href="../dashboard.html"
    } else if(user == "function" && pass == "let") {
      window.sessionStorage.setItem("user", "user2");
      window.location.href="../dashboard.html"
      
    } else {
      alert("Incorrect username or password");
    }
    
}
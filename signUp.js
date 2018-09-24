function checkForm() {


    if (!testEspace() && !checkEmail() && !checkDateofBirth() && myFunction()) {

        var q = document.getElementById("lien").innerHTML = window.location.href = "authentification.html";

    }
    else {
        alert("Please fill in all the fields correctly");
    }
}




function testEspace() {

    var x = document.getElementById("userName").value;
    var tab = " ";

    if (x.match(tab)) {

        var r = document.getElementById("message1").innerHTML = " White Space Detected !";
    }
    else {

        return false;
    }

}

function mail(chaine) {

    a = "@";

    for (i = 0; i < chaine.length; i++) {

        if (chaine.indexOf(a) !== -1) {
            return true;

        }
        return false;
    }

}

function checkEmail() {

    var x = document.getElementById("mail").value;

    if (!mail(x)) {

        var r = document.getElementById("message2").innerHTML = "Invalid email address ! ";
    }

}



function getAge() {
    var birthDay = document.getElementById("date").value;
    var DOB = new Date(birthDay);
    var today = new Date();
    var age = today.getTime() - DOB.getTime();
    age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}

function checkDateofBirth() {
    var date = document.getElementById("date").value;

    if (getAge(date) < 18) {
        var p = document.getElementById("message3").innerHTML = "You are under 18 !"
    }
    else {

        return false;
    }
}

function myFunction() {
    var x = document.getElementById("myInput").value;
    console.log(x);

    var reg = /[|\\/~^:,;?!&%$*@+âäãçéìïòôöõùûüñ]/;

    if (x.match(reg)) {

        console.log(x.match(reg));
        var s = document.getElementById("message").innerHTML = "Invalid password"
    }

    else {
        if (hasUpperCase(x) && hasLowerCase(x) && x.length > 8 && checkStringForNumbers(x)) {
            var y = document.getElementById("message4").innerHTML = "Strong password";
        }
        else {

            if (hasUpperCase(x) && checkStringForNumbers(x) || hasLowerCase(x) && x.length > 8 ||
                hasUpperCase(x) && hasLowerCase(x) || checkStringForNumbers(x) && x.length > 8 ||
                hasUpperCase(x) && x.length(x) || hasLowerCase(x) && checkStringForNumbers(x)) {
                var d = document.getElementById("message5").innerHTML = "Average password";
            }

            else {
                var c = document.getElementById("message").innerHTML = " Poor password";
            }
        }
    }
}

function hasUpperCase(chaine) {

    for (i = 0; i < chaine.length; i++) {
        if (chaine[i] === chaine[i].toUpperCase()) {
            return true;
        }

    }
    return false;
}

function hasLowerCase(chaine) {

    for (i = 0; i < chaine.length; i++) {
        if (chaine[i] === chaine[i].toLowerCase()) {
            return true;
        }

    }
    return false;
}

function checkStringForNumbers(str) {

    for (var i = 0; i < str.length; i++) {
        // console.log(str.charAt(i));
        if (!isNaN(str.charAt(i))) {
            return true;
        }
    }
    return false;
}

var tab = [{ "userName": "henda", "mail": "ouni_henda@live.fr", "dateNaissance": "28/08/1988", "password": "henda123" }];

function storage() {

    var c = document.getElementById("userName").value;
    var r = document.getElementById("mail").value;
    var s = document.getElementById("date").value;
    var d = document.getElementById("myInput").value;

    // enregister les inputs dans le tableau tab
    tab.push({ "userName": c, "mail": r, "dateNaissance": s, "password": d });

    // enregister le tableau dans le localstorage 
    localStorage.setItem("tab2", JSON.stringify(tab));

    // donner une variable pour appeler le tableau
    var z = JSON.parse(localStorage.getItem("tab2"));

    console.log(z);
}

function log() {

    var h = JSON.parse(localStorage.getItem("tab2"));
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;

    for (i = 0; i < h.length; i++) {
        if (a == h[i].userName && b == h[i].password) {
            console.log("true");

            alert("welcome !");
            var d = document.getElementById("message").innerHTML = "welcome !";
            break;
        }
        else {
            console.log("false");
            alert("error ! Please check your user name or password !");
            var e = document.getElementById("message").innerHTML = " error ! Please check your user name or password !";
        }
    }
}


function print() {
    var w = window.open('','','width=450,height=550,scrollbars=no,menubar=no,toolbar=no');
    var dd = JSON.parse(localStorage.getItem("tab2"));
   w.document.write("<form><table> ");
   w.document.write("<tr> ");
   w.document.write("<td>User Name :</td>");
   w.document.write("<td>"+JSON.stringify(dd[0].userName)+"</td></tr> ");
   w.document.write("<tr>");
   w.document.write("<td>E-mail :</td>");
   w.document.write("<td>"+ JSON.stringify(dd[0].mail) +"</td></tr> ");
   w.document.write("<td>Date of Birth :</td>");
   w.document.write("<td>"+ JSON.stringify(dd[0].dateNaissance) +"</td></tr> ");
   w.document.write("<td>Password :</td>");
   w.document.write("<td>"+ JSON.stringify(dd[0].password) +"</td></tr></table></form> ");
   w.document.write("<input type='button' onclick='window.print()'; value = 'print' />");
   w.document.write("<input type='button' onclick='window.close();' value='Cancel' />"); 

}




    


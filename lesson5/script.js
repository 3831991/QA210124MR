function welcome() {
    alert("ברוכים הבאים");
}

function welcome2() {
    console.log("שלום לכולם");
}

function welcomeMessage() {
    var name = document.getElementById("userName").value;

    alert("אהלן " + name + ". נחמד!");
}

function multi50() {
    var n = document.getElementById("num1").value;

    alert(n * 50);
}

function plus() {
    var n1 = +document.getElementById("num2").value;
    var n2 = +document.getElementById("num3").value;

    alert(n1 + n2);
}
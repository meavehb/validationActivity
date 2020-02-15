function samePW(){
    let password = document.getElementById("primepw").value;
    let confirmed = document.getElementById("confirmpw").value;

    if(password !== confirmed){
        alert("Passwords do not match. Please try again.");
    }
}

function sameName(){
    if(sameFullname.checked == true){
        cfname.value = fname.value;
        clname.value = lname.value;
    }
}

function sameAdd(){
    if(sameAddress.checked == true){
        caddress.value = address.value;
    }
}
window.onload = () => {
    document.getElementById("submit").onclick = onClickSubmit;
}

// 2. In your html form markup code from task 1, include a
//  feature such that the User can only submit the form 
//  if the Password field is at least 10 characters in length 
//  and contain at least one number and one uppercase and lowercase letter).



function onClickSubmit() {

    let checked = document.getElementById("check1").checked;

    if(!checked){
        return;
    }

    let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
    let passTxt = document.getElementById("password").value;
    if (!regexp1.test(passTxt)) {
        alert('Password field is at least 10 characters in length and contain at least one number and one uppercase and lowercase letter');
    }

    //2
    let regexp2 = new RegExp("https?://.+|http?://.+ ");
    let webURL = document.getElementById("web").value;
    if (!regexp2.test(webURL)) {
        alert('Please enter a URL.');
    }
}
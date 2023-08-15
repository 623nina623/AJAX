let p =  document.getElementById("data");
let xhr = new XMLHttpRequest();

xhr.open('GET' , 'https://reqres.in/api/users?page=2' );

xhr.onreadystatechange  = function () {

    if(xhr.status == 200 && xhr.readyState == 4) {
        let t = JSON.parse(xhr.responseText);
        showText(t.data);
    }
};

xhr.send();

function showText(obj) {
    let value = "";

    for (let i = 0 ;  i < obj.length ;  i++) {
        value += "<li>" + "The ID is: " + obj[i].id + "</li>"; 
        value += "<li>" + "The Name is: " + obj[i].first_name + "</li>";
        value += "<li>" + "With the Email of: " + obj[i].email + "</li>";
    }
    document.getElementById("data").innerHTML = value;
}



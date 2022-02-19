function btnLogIn(parameter){
    if(parameter.innerText == "Login"){
        parameter.innerText = "LogOut"
    }else if(parameter.innerText == "LogOut"){
        parameter.innerText = "Login"
    }
    
}

function btnAddDefinition(parameter){
    parameter.remove();
}

function btnAddLike(parameter){
    let numberOfLikes = parseInt(parameter.innerText.substring(0,parameter.innerText.indexOf(" ")));
    numberOfLikes+=1;
    parameter.innerText = `${numberOfLikes} likes`;
    const template = document.querySelector("#like-announcement")
    const body = document.querySelector("body")
    const clone = document.importNode(template.content, true);
    body.appendChild(clone);
}
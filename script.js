function workingClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if(minute<10) minute = '0' + minute; else minute;
    if(second<10) second = '0' + second; else second;

    time.innerHTML = hour + ':' + minute + ':' + second;
}

document.getElementById("info-link").onclick = function() {
    const navs = document.getElementsByClassName("nav");
    for(let i = 0; i < navs.length; i++) {
        navs[i].style.fontWeight = "500";
        navs[i].style.textShadow = 'none';
    }
    var element = document.getElementById("info-link");
    element.style.fontWeight = "550";
    element.style.textShadow = "1px 1px #000000";
    const articles = document.getElementsByClassName("article-spot");
    for(let i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
    }
    document.getElementById("my-info").style.display = "block";
    
};
document.getElementById("hobby-link").onclick = function() {
    const navs = document.getElementsByClassName("nav");
    for(let i = 0; i < navs.length; i++) {
        navs[i].style.fontWeight = "500";
        navs[i].style.textShadow = 'none';
    }
    var element = document.getElementById("hobby-link");
    element.style.fontWeight = "550";
    element.style.textShadow = "1px 1px #000000";
    const articles = document.getElementsByClassName("article-spot");
    for(let i = 0; i < articles.length; i++){
        if (articles[i].style.display != "none"){
            articles[i].style.display = "none";
        }
    }
    document.getElementById("my-hobby").style.display = 'block';
};
document.getElementById("recom-link").onclick = function() {
    const navs = document.getElementsByClassName("nav");
    for(let i = 0; i < navs.length; i++) {
        navs[i].style.fontWeight = "500";
        navs[i].style.textShadow = 'none';
    }
    var element = document.getElementById("recom-link");
    element.style.fontWeight = "550";
    element.style.textShadow = "1px 1px #000000";
    const articles = document.getElementsByClassName("article-spot");
    for(let i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
    }
    document.getElementById("my-recom").style.display = 'block';
};
document.getElementById("contact-link").onclick = function() {
    const navs = document.getElementsByClassName("nav");
    for(let i = 0; i < navs.length; i++) {
        navs[i].style.fontWeight = "500";
        navs[i].style.textShadow = 'none';
    }
    var element = document.getElementById("contact-link");
    element.style.fontWeight = "550";
    element.style.textShadow = "1px 1px #000000";
    const articles = document.getElementsByClassName("article-spot");
    for(let i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
    }
    document.getElementById("my-contact").style.display = 'block';
};

document.getElementById("submit-button").onclick = function(){
    var flag = 0;
    var firstName = document.getElementById("fname").value;
    if(firstName == ""){
        alert("Proszę podaj swoje imię");
        flag = 1;
    }
    var surName = document.getElementById("sname").value;
    if(surName == ""){
        alert("Proszę podaj swoje nazwisko");
        flag = 1;
    }
    if( document.getElementById("email").validity.valid){

    } else {
        alert("Podano niewłaściwy email");
        flag = 1;
    }

    if(flag == 0){
        document.getElementById("cross").style.display = "none";
        document.getElementById("check").style.display = "block";
    }
}



workingClock()
setInterval(workingClock,1000)
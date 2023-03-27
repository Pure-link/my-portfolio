let mode = document.getElementById("mode");
let bod = document.getElementById("bod");
let about = document.getElementById("about");
let bars = document.getElementsByClassName("bar");

// about.style.color = "#3EC70B";


function work(){
    if (bod.style.backgroundColor == "black"){
        bod.style.backgroundColor = "white"
        mode.classList.remove('fa-sun')
        mode.classList.add("fa-moon")
        
    }else{
        bod.style.backgroundColor = "black"
        mode.classList.remove('fa-moon')
        mode.classList.add("fa-sun")
    }
    if (bod.style.backgroundColor == "black"){
        about.style.color = "white"
        k = about.style.color
        
    }else if(bod.style.backgroundColor == "white"){
        about.style.color = "black"
        k = about.style.color
    }
}

abilities = document.getElementsByClassName("abilities")

function change(tabname){
    for(bar of bars){
        bar.classList.remove("p");
    }
    event.currentTarget.classList.add("p")
    // skills = document.getElementsByClassName("skills")
    // experience = document.getElementsByClassName("experience")
    // skills.classList.remove("b")
    // experience.classList.remove("b")
    // document.getElementsByClassName(tabname).classList.add("b")

    for(abilitie of abilities){
        abilitie.classList.remove("b")
    }
    document.getElementById(tabname).classList.add("b")
}
games = document.getElementsByClassName("games")
function carryout(tabname){
    for(game of games){
        game.classList.add("off");
    }
    document.getElementById(tabname).classList.remove("off")
}
// console.log(pic_count)
pict = document.getElementById("pict")
let bar_count = 0;
bar = document.getElementById("bars")
pict.addEventListener("click", function(){
    if (bar_count % 2 == 0){
        pict.src = "pic/o.png"
        bar_count += 1
        bar.style.top = 40 + "px"
    }else{
        pict.src = "pic/x.png"
        bar_count += 1
        bar.style.top = -2000 + "px"
    }
    return bar_count
})

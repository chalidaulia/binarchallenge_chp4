// alert("tes")
var userChoose = document.getElementsByClassName("user-choose");
var elementFinalResult = document.getElementById("final-result");
var userChooseFinal = 0;
var round = 0;
Array.from(userChoose).forEach(function(element){
    element.addEventListener("click", function(){
        // alert("user memilih!")
        // alert(`user memilih ${this.getAttribute("data-item")}`);
        if(round == 0){
            this.classList.add("active");
            userChooseFinal = this.getAttribute("data-item");
            compChooseFinal = compChoose();
            resultFinal = winner(userChooseFinal, compChooseFinal); //ganti function

            elementFinalResult.innerText = resultFinal;
            console.log("pilihan user", userChooseFinal)
            console.log("pilihan comp", compChooseFinal)
            console.log("result final", resultFinal)
            round = round+1;
            // console.log(`This is round ${round}`);
        }
    })
})

//pilihan computer (randomized)
function compChoose(){
    var compChooseFinal = Math.floor(Math.random() * 3);
    console.log(`comp chose: ${compChooseFinal}`); //testing which element of the array is chosen and to find out whether  the array starts with 0 or 1
    
    var elementCompChoose = document.getElementById(`comp-${compChooseFinal}`);
    elementCompChoose.classList.add("active");
    return compChooseFinal;
}

function winner(userChooseFinal, compChooseFinal){
    console.log(`userChooseFinal = ${userChooseFinal}`);
    console.log(`compChooseFinal = ${compChooseFinal}`);
    var resultFinal = " ";
    if(userChooseFinal == compChooseFinal){
        resultFinal = "Draw";
    }
    else if(userChooseFinal+1==compChooseFinal){
        resultFinal = "Computer wins";
        // console.log(`current value of userChooseFinal = ${userChooseFinal}`);
    }
    else if(userChooseFinal==2 && compChooseFinal==0 || userChooseFinal==1&&compChooseFinal==2){
        resultFinal = "Computer wins";
    }
    else{
        resultFinal = "You win!"
    }
    console.log(`resultFinal = ${resultFinal}`) //Who won?
    return resultFinal;
}

//reset
const refreshElement = document.getElementsByClassName("refresh-image");
refreshElement[0].addEventListener("click", function(){
    Array.from(userChoose).forEach(function(el){
        el.classList.remove("active");
    })
    elementFinalResult.innerText = " ";
    round = 0;
})
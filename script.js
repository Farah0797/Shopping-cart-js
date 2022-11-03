//like icons

//1- select icons ( return tab fih l icons el lkol)
let likes = document.querySelectorAll(".fa")
//queryselectorall() --> return tab
console.log(likes);
//2- parcours du tab (pour pouvoir acceder lel 9alb wehed)
for ( let i = 0; i<likes.length; i++)
{
    //3- addEventListener'click' ( k ysir click bech tsir fct )
    likes[i].addEventListener("click", function()
    {
        if(likes[i].style.color === "black")
        {
            likes[i].style.color = "red";
        }
        else
        {
            likes[i].style.color = " black";
        }
    
    });
}

//incrementation 

//1- select btnplus
let btnplus = document.getElementsByClassName("plus-btn");
//select input eli feha l value
let qt = document.getElementsByClassName("qt");
console.log(btnplus);

//2-parcours du tab (pour pouvoir acceder lel bouton + wehed)
for ( let i = 0; i<btnplus.length; i++)
{
    btnplus[i].addEventListener("click", function()
    {
        qt[i].value++;
        totalPrice();
    });
}
//3-addeventlistener 'click' ( k tsir click bech tsir fct increment)

//decrementation
let btnminus = document.getElementsByClassName("minus-btn");
//qte deja selecitonner
//2- parcours tab
for (let i = 0; i<btnminus.length; i++)
{
    btnminus[i].addEventListener("click", function()
    {
        if (qt[i].value > 1)
        {
            qt[i].value--;
            totalPrice();
        }
    });
}

// delete

let deletebtn= document.getElementsByClassName("delete");
for(let i = 0; i< deletebtn.length; i++){
    deletebtn[i].addEventListener("click", function(){
        deletebtn[i].parentNode.remove();
       
    });
}

//function totalPrice

function totalPrice(){
 let sum = 0;
 let prices = document.querySelectorAll("#prix");
 let qte = document.querySelectorAll(".qt");

 for ( let i = 0; i<prices.length; i++)
 {
     sum = sum + prices[i].innerHTML * qte[i].value;
 }
document.getElementById("finalPrice").innerHTML = sum;
}



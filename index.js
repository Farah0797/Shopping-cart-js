let likes = document.querySelectorAll(".fa");
console.log(likes);

for ( let i = 0; i<likes.length; i++)
{
    likes[i].addEventListener("click", function()
    {
        if ( likes[i].style.color === "black")
        {
              likes[i].style.color = "red";
        }
        else
        {
            likes[i].style.color = "black";
        }
    }
)
}


let btnplus = document.getElementsByClassName("plus-btn");
let qte = document.getElementsByClassName("qt");
console.log(btnplus);

for ( let i = 0; i<btnplus.length; i++)
{
    btnplus[i].addEventListener("click", function()
    {
        qte[i].value++;
        totalPrice();
    })
}


let btnminus = document.getElementsByClassName("minus-btn");


for ( let i = 0; i<btnminus.length; i++)
{
    btnminus[i].addEventListener("click", function()
    {
        if ( qte[i].value >0)
        {
            qte[i].value--;
            totalPrice();
        }
    })
}

let btndel = document.getElementsByClassName("delete");

for ( let i = 0; i<btndel.length; i++)
{
    btndel[i].addEventListener("click", function()
    {
        btndel[i].parentNode.remove();
    });
}

function totalPrice()
{
    let sum = 0;
    let prices = document.querySelectorAll("#prix");
    let qte = document.querySelectorAll(".qt");

    for ( let i = 0; i<prices.length; i++)
    {
        sum = sum + prices[i].innerHTML * qte[i].value;
    }
document.getElementById("finalPrice").innerHTML = sum;
}
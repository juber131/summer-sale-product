let tittleCount =1;
let totalprice =0;
const cards =document.querySelectorAll(".card");
// console.log('cards');
for( let i=0;i<cards.length; i=i+1){
    let card =cards[i];
    // console.log(card);

 card.addEventListener("click",function(){
        // console.log("jubaer");
const tittle = card.querySelector("h3").innerText;
const price =parseFloat(card.querySelector("span").innerText.split(" ")[1]);
console.log(price)
const tittlecontainer =document.getElementById("title-container");
// console.log(tittlecontainer)
 const p =document.createElement("p");
 p.innerText= tittleCount+"."+tittle;

 tittlecontainer.appendChild(p);

 tittleCount++;
 totalprice+=price;
//  console.log(totalprice)
document.getElementById("totalPrice").innerText=totalprice.toFixed(2)
//  const p1 =document.createElement("p")
// p1.innerText=totalprice.toFixed(2)
// totalprice1.appendChild(p1)
    });
 
}
const btn =document.getElementById('apply-btn');
 btn.addEventListener('click', function(){
    // console.log('clicked')
    const couponelement =document.getElementById('input-field').value;
    // console.log(couponelement.value);

    const couponcode=couponelement.split(" ").join("").toUpperCase();
    // console.log(couponcode)
    if(totalprice>=200){
     if(couponcode === "SELL200"){
    // discountamount
        const discountelement =document.getElementById('discountPrice');
        const discountamount =totalprice*0.2;
        discountelement.innerText=discountamount.toFixed(2)
     // rest total price;
     const allprice=document.getElementById("total");
      allprice.innerText=totalprice-discountamount.toFixed(2);
      document.getElementById('input-field').value ="";
      
     
       }else{
            alert("invalid code.please try again");
      }

    }else{
        alert('you have to buy another products');
      }
});

function purchase(){

 
  const setaddelement = document.getElementById("remove-element").classList.add("hidden")
  const hideelement = document.getElementById('remove-element2').classList.add('hidden');
  const setremoveelement =document.getElementById("congratulations").classList.remove('hidden');
  const colorchabge =document.getElementById("color").classList.add("bg-orange-400")
  
  // console.log('setremoveelement')
}
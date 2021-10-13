var pNameInpute = document.getElementById("pNameId");
var pPriceInput = document.getElementById("pPriceId");
var pCatInpute = document.getElementById("pCatId");
var pDescInpute = document.getElementById("pDescId");
var allProducts =[];
if(localStorage.getItem("myOnlineStore")!=null){
  allProducts = JSON.parse(localStorage.getItem("myOnlineStore"));
displayProudects()


}
function addProduct(){
var pNameValue =pNameId.value;
var pPriceValue =pPriceId.value;
var pCatValue =pCatId.value;
var pDescValue =pDescId.value;
var oneProudect ={ name: pNameValue , price:pPriceValue, cat:pCatValue,desc:pDescValue};
allProducts.push(oneProudect);
localStorage.setItem("myOnlineStore" , JSON.stringify(allProducts));
console.log(allProducts)
clearInputs()
displayProudects()




}
function clearInputs(){
    pNameInpute . value="";
    pPriceInput .  value="";
    pCatInpute  . value="";
    pDescInpute. value="";


}

function displayProudects(){

var hasala =``;
for(var i=0;i<allProducts.length;i++){
    hasala+=`<tr> 
   
    <td>` + allProducts[i].name + `</td>
    <td>` + allProducts[i].price + `</td>
    <td>` + allProducts[i].cat + `</td>
    <td>` + allProducts[i].desc + `</td>
    <td> <button onClick="upDateRow(`+i+`)" class="btn btn-outline-info";>Update</button></td>
    <td> <button onClick="deleteproudect(`+i+`)" class="btn btn-outline-danger";>Delete</button></td>

    -
  </tr>  ` 



}

document.getElementById("tBody").innerHTML = hasala 
}


function deleteproudect( proIndex){
  allProducts.splice(proIndex , 1);
  displayProudects()
  localStorage.setItem("myOnlineStore" , JSON.stringify(allProducts))
}










// Dell
function searchProduct( userWord  )
{

    var kopia = [];

    for( var i =0 ; i< allProducts.length ; i++)
    {
        if( allProducts[i].name.toLowerCase().includes(   userWord.toLowerCase()  )    )
        {
            var x = allProducts[i] // name , price , cat , Desc
            x["newIndex"] = i

                kopia.push(  x )
        }

    }
//========================gbt kol el matched products======================
        var hasalah = ``;

        // hlf 3la el array kolo agm3 mgmo3a mn el trs
        for( var i= 0 ; i < kopia.length ; i++     )
        {
            
            hasalah = hasalah + `<tr>
            <td>`+  kopia[i].newIndex   +`</td>  
            <td>`+  kopia[i].name +`</td>
            <td>`+  kopia[i].price +`</td>
            <td>`+  kopia[i].cat +`</td>
            <td>`+  kopia[i].desc +`</td>
            <td>  <button class="btn btn-outline-warning">Update</button>       </td>
            <td>  <button onclick="deleteProduct(`  +kopia[i].newIndex+ `)" class="btn btn-outline-danger">Delete</button>       </td>
                        
        </tr>`

        }

        document.getElementById("tBody").innerHTML = hasalah


}



function upDateRow (proIndex)
{
  pNameInpute . value="name";
  pPriceInput .  value="price";
  pCatInpute  . value="cat";
  pDescInpute. value="desc";
  displayProudects()
  

}
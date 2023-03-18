menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                   "Pizza de frango" ,
                    "Pizza Portuguesa" ,
                    "Pizza Quatro Queijos" ,
                    "Pizza de Calabresa",
                    "Pizza Extravaganza"];

function getMenu(){
var htmldata = "";
menuListaArray.sort();
for(var i=0;i<menuListArray.lenght;1++) {
    htmldata=htmldata= menuListArray[i] + '<br>'
//Completar o código
}
    document.getElementById("dispayMenu").innerHTML = htmldata;
}
function addItem(){
var htmldata;
var imgtags='<img id="im1"  src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.lenght;i++) {

    htmldata=htmldata=imgtags+ menuListArray[i]+ '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
//Completar o código

}

function addTop(){
//Completar o código
var item=document.getElementById("addItem").value
menuListArray.push(item);
addItem();


}
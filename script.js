menuListArray = ["Pizza Vegetariana",
    "Pizza de Calabresa",
    "Pizza Quatro Queijos",
    "Pizza Portuguesa",
    "Pizza de Frango",
    "Pizza de Milho e Queijo"];

function getMenu(){
var nomedaPizza="";
menuListArray.sort();
        for(var i=0;i<menuListArray.length;i++){
            nomedapizza=nomedapizza+ menuListArray[i] + '<br>'
        }
        document.getElementById("displayMenu").innerHTML = nomedapizza; 
    }


function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort(); 
        htmldata=""
        for(var i=0;i<menuListArray.length;i++){
            htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
        }
         document.getElementById("displayAddedMenu").innerHTML = htmldata;
    
    }


function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item); 
   addItem();
}

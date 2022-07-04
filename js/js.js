let ddlcategory=document.getElementById("ddlcategory")
let Category=document.getElementById("Category")
let product=document.getElementById("product")
let quntity=document.getElementById("quntity")
let Price=document.getElementById("Price")
let Discount=document.getElementById("Discount")
let Total=document.getElementById("Total")

let CategoryArr;
localStorage.Category !=null ? CategoryArr=JSON.parse(localStorage.Category) : CategoryArr=[];
// save Category
function SaveCategory(){
    let objCategory={
        Category:Category.value
    };
    CategoryArr.push(objCategory)
    localStorage.setItem("Category",JSON.stringify(CategoryArr))
    reset()
    showCategory()
}
//reset category
function reset(){
    Category.value='';
}
//show data
function showCategory(){
    let items="";
    items +=` 
    <option>Select Category .... </option>`
    for(let i =0;i<CategoryArr.length;i++){
        items+=`
        <option value="${i}">${CategoryArr[i].Category}</option>
        `
    }
    ddlcategory.innerHTML= items;
}
//show table category
//delete category
//count category
//validation category


/////////////////////
//save product
//count total
//reset data
//show data in table
//delete product
//update product
//count product
//validation




















$(document).ready(function () {
    showCategory()
    $('#tablePro').DataTable();
});

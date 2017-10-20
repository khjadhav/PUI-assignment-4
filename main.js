
// -------------Jquery-----------


$(document).ready(function() {

var desiredBun = JSON.parse(localStorage.getItem("savedNewBun"));

function Bun(cost, quant, flava1, flava2, img){
    this.cost=cost;
    this.quant=quant;
    this.flava1=flava1;
    this.flava2=flava2;
    this.img=img;
}

$("#flavour1").hide();
$("#flavour2").hide();

var price,location;
$("#packs").change(function(){
        if (this.value == "Pack_of_1"){
            $("#singlepack").attr("src", "assets/original(gluten-free).png");
            $("#price").text("$ 1.00");
            price=1.00;
            location="assets/original(gluten-free).png";
            $("#flavour1").hide();
            $("#flavour2").hide();
        }
        else if (this.value == "Pack_of_6"){
            $("#singlepack").attr("src", "assets/Pack_of_6.jpg");
            $("#price").text("$ 6.00");
            price=6.00;
            location="assets/Pack_of_6.jpg";
            $("#flavour1").show();
            $("#flavour2").show();
        }
        else{
            $("#singlepack").attr("src", "assets/Pack_of_12.jpg");
            $("#price").text("$ 12.00");
            price=12.00;
            location="assets/Pack_of_12.jpg";
            $("#flavour1").show();
            $("#flavour2").show();
        }
    })

$(".add-to-cart-button").click(function(){
    var packs= $("#packs").val();
    var flav1= $("#flavour1").val();
    var flav2= $("#flavour2").val();
    var BunBun=new Bun(price, packs, flav1, flav2, location);
    localStorage.setItem("savedNewBun", JSON.stringify(BunBun));
    // console.log(localStorage.getItem("savedNewBun"));

})





})


// create a constructor


// ------------------Javascript---------------------------
// /create an empty array that will hold the shopping cart

var cart=[];

// The cart needs to hold the name, price and count of the items,
// add these as objects in the array
var Item= function(name, price, count){
    this.name=name;
    this.price=price;
    this.count=count
}

//function addItemToCart(name, price, count)
function addItemToCart(name, price, count){
    for (var i in cart){
        if (cart[i].name === name){
            cart[i].count+= count;
            return;
        }
    }
    var item=new Item(name, price, count);
    cart.push(item);
}

//removeItemFromCart(name)//Removes one item
function removeItemFromCart(name){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count--;
            return;
        }
    }
}


addItemToCart("Apple", 1.22, 2);
addItemToCart("Pear", 1.72, 3);
addItemToCart("Apple", 1.22, 5);
addItemToCart("Apple", 1.22, 3);
addItemToCart("Banana", 1.00, 3);
addItemToCart("Car", 34.00, 1);
addItemToCart("Plush Toy", 5.82, 1);
addItemToCart("Sticky Notes", 4.00, 3);

//removesAllItemFromCart(name)
function removeAllItemsFromCart(name){
    for (var i in cart){
        if (cart[i].name===name){
            cart.splice(i,1);
            break;
            }
        }
    }


function clearCart(){
    cart=[];
}


// -----------image manipulation-----------





//function jsDropDown(imgid, newimg){
//    document.getElementById(imgid).src="assets"+"/"+newimg+".jpg";
//}

// console.log(cart.length);
// console.log(cart);
// removeAllItemsFromCart("Car");
// console.log(cart.length);
// console.log(cart);
// clearCart();
// console.log(cart);
//countCart() -> return total count

//totalCart() -> return total cost

//listCart() -> arrat of Items


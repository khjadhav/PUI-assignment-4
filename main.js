
// -------------Jquery-----------
$(document).ready(function() {



$(".add-to-cart-button").click(function(event){
    event.preventDefault();
    var name=$(product-text).attr("data-name");
    var price=Number($(product-text).attr("data-price"));

    addItemToCart(name, price, 1);
    console.log(cart);
});


$("#packs").change(function(){
        if (this.value == "Pack_of_1"){
            $("#singlepack").attr("src", "assets/original(gluten-free).png");
        }
        else if (this.value == "Pack_of_6"){
            $("#singlepack").attr("src", "assets/Pack_of_6.jpg");
        }
        else{
            $("#singlepack").attr("src", "assets/Pack_of_12.jpg");
        }
    })
})


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


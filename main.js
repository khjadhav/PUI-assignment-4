
function Bun(name, cost, quant, amount, flava1, flava2, img){
    this.name=name;
    this.cost=cost;
    this.quant=quant;
    this.amount=amount;
    this.flava1=flava1;
    this.flava2=flava2;
    this.img=img;
}


$(document).ready(function() {

// localStorage.setItem("cartArray", JSON.stringify([])); //TESTING
// $​(​".delete-item"​).​click​(​function​()​​​{​​​​​​​​$​(​this​).​parent​().​remove​();});

var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];


    $("#numForCart").text(cartArray.length);

for (var i=0; i<cartArray.length; i++){
    var desiredBun = cartArray[i];
    var container = $("<div></div>", {class: 'checkout-product-div'});
    $("<img />", {class: 'checkout-image-super', src: desiredBun.img, css:{"width":"160px","margin-left":"262px", "margin-right":"30px"}} ).appendTo(container);
    // $(".checkout-image-super").;
    console.log($('.checkout-image-super').length);


    var deleteButton = $("<button id=delete-item"+i+">X</button>");
    deleteButton.appendTo(container);

    deleteButton.click(function(){console.log("clicked!");$(this).parent().remove();});
    container.append(desiredBun.name);
    container.append("$ "+desiredBun.cost);
    container.append(desiredBun.quant);
    container.append("Quantity: "+desiredBun.amount);
    container.append("Chosen Flavours: "+desiredBun.flava1);
    container.append(", "+desiredBun.flava2);

    $(".checkout-cart").append(container);
}

$("#flavour1").hide();
$("#flavour2").hide();


var price=1.00,location="assets/original(gluten-free).png", number=1, amountOfProduct=1;
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

// if(desireBun.img=="assets/Pack_of_6.jpg"){
//     desireBun.img="assets/pack_of_6_checkout.jpg";
// }

$(".add-to-cart-button").click(function(){
    var packs= $("#packs").val();
    var flav1= $("#flavour1").val();
    var flav2= $("#flavour2").val();
    var amountOfProduct=$("#number-input").val();
    var BunBun=new Bun("Original (Gluten-Free)", price, packs, amountOfProduct, flav1, flav2, location);
    console.log(location);

    // || means put the things in an Array
    var existingCartItems=JSON.parse(localStorage.getItem("cartArray")) || [];
    existingCartItems.push(BunBun);
    localStorage.setItem("cartArray", JSON.stringify(existingCartItems));
    console.log(JSON.parse(localStorage.getItem("cartArray")));

    var numForCart = parseInt($("#numForCart").text());
    console.log(numForCart);
    numForCart+= parseInt($("#number-input").val());
    $("#numForCart").text(numForCart);
})



})


//create a new variable called exiting cart items




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
    var container = $("<div></div>",{class:'checkout-product-div', css:{"margin-top":"120"}});
    $("<img/>",{class:'checkout-image-super',src:desiredBun.img, css:{"width":"160", "margin":"80"}}).appendTo(container);
    console.log($('.checkout-image-super').length);


    var deleteButton = $("<button id=delete-item"+i+">X</button>");
    deleteButton.appendTo(container);

    deleteButton.click(function(){console.log("clicked!");$(this).parent().remove();});
    $("<div id=product-name>"+desiredBun.name+"</div>").appendTo(container);
    // container.append(desiredBun.name);
    $("<div id=product-cost>"+"Cost: "+desiredBun.cost+"</div>").appendTo(container);
    // container.append("$ "+desiredBun.cost);
    $("<div id=product-quant>"+"Chosen Pack: "+desiredBun.quant+"</div>").appendTo(container);
    // container.append(desiredBun.quant);
    $("<div id=product-amount>"+"Quantity: "+desiredBun.amount+"</div>").appendTo(container);
    // container.append("Quantity: "+desiredBun.amount);
        $("<div id=additionalFlavours>"+"Additional Flavours"+"</div>").appendTo(container);
    $("<div id=product-flava1>"+desiredBun.flava1+"</div>").appendTo(container);
    // container.append("Chosen Flavours: "+desiredBun.flava1);
    $("<div id=product-flava2>"+desiredBun.flava2+"</div>").appendTo(container);
    // container.append(", "+desiredBun.flava2);

    $(".checkout-cart").append(container);
}

$("#select-text").hide();
$("#flavour1").hide();
$("#flavour2").hide();


var price=1.00,location="assets/original(gluten-free).png", number=1, amountOfProduct=1;
$("#packs").change(function(){
        if (this.value == "Pack of 1"){
            $("#singlepack").attr("src", "assets/original(gluten-free).png");
            $("#price").text("$ 1.00");
            price=1.00;
            location="assets/original(gluten-free).png";

            $('#select-text').hide();
            $("#flavour1").hide();
            $("#flavour2").hide();
        }
        else if (this.value == "Pack of 6"){
            $("#singlepack").attr("src", "assets/Pack_of_6.jpg");
            $("#price").text("$ 6.00");
            price=6.00;
            location="assets/Pack_of_6.jpg";
            $('#select-text').show();
            $("#flavour1").show();
            $("#flavour2").show();
        }
        else{
            $("#singlepack").attr("src", "assets/Pack_of_12.jpg");
            $("#price").text("$ 12.00");
            price=12.00;
            location="assets/Pack_of_12.jpg";

            $('#select-text').show();
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



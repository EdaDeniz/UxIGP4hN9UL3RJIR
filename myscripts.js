$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

var hr = 0;
var mi = 0;
var se = 0;
var deadline = new Date();
deadline.setTime(new Date().getTime() + (10*60*60*1000));
var x = setInterval(function() {
    var now = new Date().getTime()
    var t = deadline - now;


    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML =  hours + "h | " + minutes + "m | " + seconds + "s";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME EXPIRED";
    }
}, 1000);
function addHour() {
    deadline.setHours(deadline.getHours() + 1);
}
function subHour() {
    deadline.setHours(deadline.getHours() - 1);
}

function addMin() {
    deadline.setMinutes(deadline.getMinutes() + 1);
}
function subMin() {
    deadline.setMinutes(deadline.getMinutes() - 1);
}
function addSec() {
    deadline.setSeconds(deadline.getSeconds() + 1);

}
function subSec() {
    deadline.setSeconds(deadline.getSeconds() - 1);
}

//Function for bitcoin dashboard


fetch("currentprice.json")
    .then((response) => response.json())
    .then(appendData)
    .catch(console.error);

function appendData(data) {
    const dataFragment = document.createDocumentFragment();
    for (const price of Object.values(data.bpi)) {
        dataFragment.appendChild(createPriceElement(price));
    }
    document.getElementById("myData").appendChild(dataFragment);
}

function createPriceElement(price) {
    const div = document.createElement("div");
    div.innerHTML = `<table class="table table-bordered" "><tr><th>Code</th><th>Symbol</th><th>Rate</th><th>Description</th><th>Rate float</th></tr><tr>
            <td> ${price.code}   <td>   ${price.symbol}<td>  ${price.rate}</td><td>  ${price.description} </td><td> ${price.rate_float}</td>
        </tr></table> <br>` ;

    return div;
}


setInterval(function(){
    reload() // this will run after every 5 seconds
}, 5000);



//Function used to shrink nav bar removing paddings and adding black background -->


$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});


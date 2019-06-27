// VARIABLES

//randomly gen. goal number
var goalnumber = 52;

//randomly gen. object number
var numberOptions = [10, 5, 3, 7];

// user counter
var counter = 0;

// HTML references

// OBJECT  BUTTONS (Creating)

// each number associated with object
var imgNumber = [0, 1, 2, 3]

for (var number of imgNumber) {
    // inserting image
    var objectImage = $("<img>");
    objectImage.attr("src", "assets/img/obj_" + number + ".png");
    objectImage.appendTo('.objectstopress');
    objectImage.addClass('indobj');

    // Associating a Number to an Object button
    for (var increaseNumber of numberOptions) {
        $(objectImage).attr("objectvalue", increaseNumber);
    }
}



// on click increasing user number
$('indobj').on("click", function () {
    var objectValue = ($(this).attr("objectValue"));
    objectValue = parsInt(objectValue);
    counter = function () {
        $('#counternumber') = ("#counternumber" + objectValue);
    }
});





// FUNCTIONS

// Play Button
$('#startbutton').on("click", function () {
    $('.game').show();
    $('#startbutton').hide();
    $('.objectstopress').hide();
    //insert play function
});

// Generate Number Button
$('#showbutton').on("click", function () {
    $('#showbutton').hide();
    $('#randomanswer').text(goalnumber);
    $('.objectstopress').show();
    //insert play function
});
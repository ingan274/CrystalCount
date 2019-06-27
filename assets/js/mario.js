// VARIABLES

var goalnumber = 52;

var counter = 0;
$('#usernumber').text(counter);

var numberOptions = [10, 5, 3, 7];

// HTML references

// BUTTONS (Creating)

for (var increaseNumber of numberOptions) {

    // each number associated with object
    var imgNumber = [0, 1, 2, 3];
    // inserting image
    var objectImage = $("<img>");
    for (var number of imgNumber) {
        objectImage.attr("src", "assets/img/obj_" + number + ".png");
    };

    objectImage.addClass('indobj');
    objectImage.appendTo('.objectstopress');

    var objectButton = ('<button>' + objectImage + '</button>');

}


// FUNCTIONS

// Play Button
$('#startbutton').on("click", function () {
    $('.game').show();
    $('#startbutton').hide();
    //insert play function
});

// Generate Number Button
$('#showbutton').on("click", function () {
    $('#showbutton').hide();
    $('#randomanswer').text(goalnumber);
    //insert play function
});
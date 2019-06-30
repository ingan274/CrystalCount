// Game controls:
// 1. Generate a random number for the user to "get"
// 2. Assign a points to each object
// 3. Display object points only when clicked on
// 4. After a object is clicked, add points together and display total score.
// 5. When added score reaches the same number as the random score, user wins.
// 6. When addes score reaches over the same number as the random score,, user losses.
// 7. Each time when the game starts, the game will change the values of each crystal.


$(document).ready(function () {
    // 0. Fun Game Set Up
    // Play Button
    $('#startbutton').on("click", function () {
        $('.game').show();
        $('#startbutton').hide();
        $('.objectstopress').hide();
        $('.winlose').hide();
    });

    // Generate Number Button
    $('#showbutton').on("click", function () {
        $('#showbutton').hide();
        $('#randomanswer').text(goalNumber);
        $('.objectstopress').show();
        $('.winlose').show();
    });

    // 0.1 Creating buttons
    // creating images

    // each number associated with object
    var imgNumber = [0, 1, 2, 3]
    // inserting image

    for (var number of imgNumber) {
        // inserting image
        var objectImage = $("<img>");
        objectImage.attr("src", "assets/img/obj_" + number + ".png");
        objectImage.addClass('indObject');
        objectImage.appendTo('.objectstopress');
        objectImage.attr("id", "obj_" + number)
    };

    // 1. Generate a random number for the user to "get"
    var goalNumber = Math.floor(Math.random() * 61) + 40;

    // 2. Assign a points to each object

    function randomObjectNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    var shellValue = randomObjectNumber();
    var starValue = randomObjectNumber();
    var mushroomValue = randomObjectNumber();
    var bananaValue = randomObjectNumber();

    // 3. Display object points only when clicked on
    $(function () {
        $("#obj_0").attr("value", shellValue);
        $("#obj_1").attr("value", starValue);
        $("#obj_2").attr("value", mushroomValue);
        $("#obj_3").attr("value", bananaValue);
    })

    // 4. After a object is clicked, add points together and display total score
    // user counter
    var counter = 0;
    // Win/Lose Variables
    var gameWin = 0;
    // showing in HTML
    $("#yay").text(gameWin);
    var gameLose = 0;
    $("#nay").text(gameLose);

    $('.indObject').click(function () {
        var counterNumber = parseInt(counter);
        var objectValue = $(this).attr("value");

        counter = counterNumber + parseInt(objectValue);
        
        $("#usernumber").text(counter);

        // 5. When added score reaches the same number as the random score, user wins
        if (counter === goalNumber) {
            gameWin++;
            reset()
            $("#yay").text(gameWin);
            alert("Great Job! You Won!")
        }

        // 6. When addes score reaches over the same number as the random score,, user losses
        else if (counter >= goalNumber) {
            gameLose++;
            reset()
            $("#nay").text(gameLose);
            alert("Oops! You went too far over! Try again next time.")
        }
    });

    // 7. Each time when the game starts, the game will change the values of each crystal
    function reset() {
        // 1. Reset number for the user to "get"
        goalNumber = Math.floor(Math.random() * 61) + 40;
        $('#randomanswer').text(goalNumber);

        // 2. Reassign a points to each object
        shellValue = Math.floor(Math.random() * 10) + 1;
        starValue = Math.floor(Math.random() * 10) + 1;
        mushroomValue = Math.floor(Math.random() * 10) + 1;
        bananaValue = Math.floor(Math.random() * 10) + 1;

        // 3. setting counter to 0
        counter = 0
        $("#usernumber").text(counter);

    }
});
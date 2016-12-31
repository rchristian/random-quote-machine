(function() {
    "use strict";

    document.getElementById("tweet").addEventListener("click", function(e) {
        e.preventDefault();
        var text = document.getElementById("text").value;
        var author = document.getElementById("author").value;
        var quote = text + " " + "—" + " " + author;

        var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote);

        if (quote.length <= 140) {
            window.open(tweetURL, "_blank");
        } else {
            window.alert("This quote is too long to Tweet.");
        }
    });
})();



// (function($) {

//     "use strict";

//     getQuotes();

//     function getQuotes() {
//         var quotes = [{
//             quote:,
//             name:
//         }, {
//             quote:,
//             name: "Charles Dickens"
//         }, {
//             quote:,
//             name: "Ernest Hemingway"
//         }, {
//             quote: "The wound is the place where the Light enters you.",
//             name: "Rumi"
//         }, {
//             quote:,
//             name: "Ursula K. Le Guin"
//         }, {
//             quote: ,
//             name: "Victor Hugo"
//         }, {
//             quote: ,
//             name: "Bram Stoker"
//         }, {
//             quote: ,
//             name: "Harper Lee"
//         }, {
//             quote: ,
//             name: "Howard Zinn"
//         }, {
//             quote: ,
//             name: "Vincent van Gogh"
//         }];

//         var ran = Math.floor(Math.random() * quotes.length);

//         $("#text").text(quotes[ran].quote);
//         $("#author").text(quotes[ran].name);
//     }

//     $("#new").on("click", function() {
//         getQuotes();
//     });
// }(jQuery));


/*
api.forismatic.com/api/1.0/?method=getQuote&format=xml&lang=en
*/

// function animation()
//             {
//                 var elm = document.getElementById('circle');
//                 elm.style.animation='selectss 2s ease-out';
//                 var newone = elm.cloneNode(true);
//                 elm.parentNode.replaceChild(newone, elm);
//             }

//                         OR

// function animation()
//         {
//             var elm = document.getElementById('circle');
//             elm.style.animation='';
//             setTimeout(function () {elm.style.animation='selectss 2s ease-out';},10)
//         }

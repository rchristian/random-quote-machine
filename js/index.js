(function($) {

    'use strict';

    getQuotes();

    function getQuotes() {
        var quotes = [{
            quote: "Every gun that is made, every warship launched, every rocket fired signifies in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of its children. This is not a way of life at all in any true sense. Under the clouds of war, it is humanity hanging on a cross of iron.",
            name: "Dwight D. Eisenhower"
        }, {
            quote: "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but - I hope - into a better shape.",
            name: "Charles Dickens"
        }, {
            quote: "The world breaks everyone, and afterward, many are strong at the broken places.",
            name: "Ernest Hemingway"
        }, {
            quote: "The wound is the place where the Light enters you.",
            name: "Rumi"
        }, {
            quote: "The trouble is that we have a bad habit, encouraged by pedants and sophisticates, of considering happiness as something rather stupid. Only pain is intellectual, only evil interesting. This is the treason of the artist; a refusal to admit the banality of evil and the terrible boredom of pain.",
            name: "Ursula K. Le Guin"
        }, {
            quote: "Teach the ignorant as much as you can; society is culpable in not providing a free education for all and it must answer for the night which it produces. If the soul is left in darkness sins will be committed. The guilty one is not he who commits the sin, but he who causes the darkness.",
            name: "Victor Hugo"
        }, {
            quote: "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.",
            name: "Bram Stoker"
        }, {
            quote: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
            name: "Harper Lee"
        }, {
            quote: "There is no flag large enough to cover the shame of killing innocent people.",
            name: "Howard Zinn"
        }, {
            quote: "A great fire burns within me, but no one stops to warm themselves at it, and passers-by only see a wisp of smoke.",
            name: "Vincent van Gogh"
        }];

        var ran = Math.floor(Math.random() * quotes.length);

        $("#text").text(quotes[ran].quote);
        $("#author").text(quotes[ran].name);
    }

    $("#new").on("click", function() {
        getQuotes();
    });

    $("#tweet").on("click", function() {
        var text = $("#text").text();
        var author = $("#author").text();
        var quote = text + " " + "—" + " " + author;

        var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote);

        if (text.length < 140) {
            window.open(tweetURL, "_blank");
        } else {
            window.alert("This quote is too long to Tweet.");
        }
    });
}(jQuery));


/*
api.forismatic.com/api/1.0/?method=getQuote&format=xml&lang=en
*/
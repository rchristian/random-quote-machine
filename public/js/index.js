(function() {
    "use strict";

    fetchQuotes();

    function displayQuotes(obj) {
        var quoteInfo = obj.body.replace(/\\/ig, "");
        var quoteText = quoteInfo.substring(quoteInfo.indexOf("\"quoteText\":\"") + "\"quoteText\":\"".length, quoteInfo.indexOf("\", \"quoteA"));
        var quoteAuthor = quoteInfo.substring(quoteInfo.indexOf("teAuthor\":\"") + "teAuthor\":\"".length, quoteInfo.indexOf("\", \"senderName\":"));
        document.getElementById("text").innerHTML = quoteText;
        if (quoteAuthor === "") {
            document.getElementById("author").innerHTML = "Unknown";
        } else {
            document.getElementById("author").innerHTML = quoteAuthor;
        }
    }

    function fetchQuotes() {
        var xml = new XMLHttpRequest();

        xml.onreadystatechange = function() {
            if (xml.readyState === XMLHttpRequest.DONE) {
                if (xml.status == 200) {
                    var obj = JSON.parse(xml.responseText);
                    setTimeout(function() {
                        displayQuotes(obj);
                    }, 20);
                } else if (xml.status >= 400 && xml.status < 500) {
                    return "Error:" + xml.status;
                } else {
                    return "Error:" + xml.status;
                }
            }
        };

        xml.open("GET", "/api/quotes/connect", true);
        xml.send();
    }

    function animationRerun() {
        setTimeout(function() {
            var textArea = document.getElementById("text");
            var newText = textArea.cloneNode(true);
            textArea.parentNode.replaceChild(newText, textArea);

            var authorArea = document.getElementById("author");
            var newAuthor = authorArea.cloneNode(true);
            authorArea.parentNode.replaceChild(newAuthor, authorArea);
        }, 370);
    }

    function newQuote() {
        fetchQuotes();
        animationRerun();
    }

    function tweetQuote() {
        var text = document.getElementById("text").innerHTML;
        var author = document.getElementById("author").innerHTML;
        var quote = text + " " + "—" + " " + author;

        var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote);

        if (quote.length <= 140) {
            window.open(tweetURL, "_blank");
        } else {
            window.alert("This quote is too long to Tweet.");
        }
    }

    function addEventListeners() {
        var newQuoteBtn = document.getElementById("new");
        newQuoteBtn.addEventListener("click", newClick);

        function newClick(e) {
            var elementClicked = event.target;

            if (elementClicked.className === "btn-area__new") {
                newQuote(elementClicked.parentNode.id);
            }
        }

        var tweetBtn = document.getElementById("tweet");
        tweetBtn.addEventListener("click", tweetClick);

        function tweetClick(e) {
            var elementClicked = event.target;

            if (elementClicked.className === "btn-area__tweet") {
                tweetQuote(elementClicked.parentNode.id);
            }
        }
    }

    addEventListeners();

})();

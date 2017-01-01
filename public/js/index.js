(function() {
    "use strict";

    fetchQuotes();

    function fetchQuotes() {
    	var xml = new XMLHttpRequest();

    	xml.onreadystatechange = function() {
    		if(xml.readyState === XMLHttpRequest.DONE) {
    			if(xml.status == 200) {
    				var obj = JSON.parse(xml.responseText);
    				var quoteInfo = obj.body.replace(/\\/ig, '');
    				console.log(obj.body);
    				//.replace(/xmas/i, 'Christmas')
    				var quoteText = quoteInfo.substring(quoteInfo.indexOf("\"quoteText\":\"") + "\"quoteText\":\"".length, quoteInfo.indexOf("\", \"quoteA"));
    				var quoteAuthor = quoteInfo.substring(quoteInfo.indexOf("teAuthor\":\"") + "teAuthor\":\"".length, quoteInfo.indexOf("\", \"senderName\":"));
    				document.getElementById("text").innerHTML = quoteText;
    				if(quoteAuthor === "") {
    					document.getElementById("author").innerHTML = "Unknown";
    				} else {
    					document.getElementById("author").innerHTML = quoteAuthor;
    				}
    				
    			}
    		}
    	}
    	xml.open("GET", "/api/quotes/connect", true);
    	xml.send();
    }

    document.getElementById("new").addEventListener("click", function(e) {
    	e.preventDefault();
    	fetchQuotes();
    })

    document.getElementById("tweet").addEventListener("click", function(e) {
        e.preventDefault();
        var text = document.getElementById("text").innerHTML;
        var author = document.getElementById("author").innerHTML;
        var quote = text + " " + "—" + " " + author;

        var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote);

        if (quote.length <= 140) {
            window.open(tweetURL, "_blank");
        } else {
            window.alert("This quote is too long to Tweet.");
        }
    });
})();

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

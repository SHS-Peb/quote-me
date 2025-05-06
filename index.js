function getQuote() {
    const script = document.createElement('script');
    script.src = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=handleQuote';
    document.body.appendChild(script);
  }

function handleQuote(response) {
    document.getElementById('quote').textContent = response.quoteText;
    document.getElementById('author').textContent = response.quoteAuthor || 'Unknown';
  }
  
  document.getElementById('new-quote').addEventListener('click', getQuote);

  getQuote();
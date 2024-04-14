let quote=document.getElementById("quote");
let author=document.getElementById("author");
let changeQuoteBtn=document.getElementById("changeQuoteBtn");

let section=document.getElementById("section");



  let  quoteList = [
        {
          quote: "Be yourself; everyone else is already taken.",
          authorName: "Oscar Wilde ,,",
        },
        {
          quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.    ",
          authorName: "Albert Einstein ,,",
        },
        {
          quote:
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams.    ",
          authorName: "Dr. Seuss ,,",
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          authorName: "Mae West ,,",
        },
        {
          quote: "Be the change that you wish to see in the world.",
          authorName: "Mahatma Gandhi ,,",
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          authorName: "Robert Frost ,,",
        },
        {
          quote: "If you tell the truth, you don't have to remember anything.",
          authorName: "Mark Twain ,,",
        },
        {
          quote:
            "I am so clever that sometimes I don't understand a single word of what I am saying.",
          authorName: " Oscar Wilde  ,,",
        },
      ];
let lastQuote=0;


  function DisplayQuote(){
do{
    var curentQuote=quoteList[ Math.trunc(Math.random()*quoteList.length)];
}
while(curentQuote === lastQuote){
    //   console.log(curentQuote.authorName);
 section.classList.remove("d-none")
  quote.innerHTML=curentQuote.quote;
 author.innerHTML=curentQuote.authorName;
 lastQuote=curentQuote;
}

      
    //   console.log(curentQuote)


  }
  changeQuoteBtn.onclick=DisplayQuote;
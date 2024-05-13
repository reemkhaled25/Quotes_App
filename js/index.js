var quotes=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"― Marilyn Monroe"
    },
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost"
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },
    {
        quote:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche"
    },
    {
        quote:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky"
    },
    {
        quote:"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
        author:"― Martin Luther King Jr"
    },
    {
        quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author:"― Maya Angelou"
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
    },
    {
        quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        author:"― William W. Purkey"
    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:"― Dr. Seuss"
    },
    {
        quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author:"― Ralph Waldo Emerson"
    }
];
var quote=document.getElementById("quote");
var author=document.getElementById("author");
function getquote(){
    var arr_index=Math.floor(Math.random()*quotes.length+1);
    quote.innerHTML=quotes[arr_index].quote;
    author.innerHTML=quotes[arr_index].author;
}

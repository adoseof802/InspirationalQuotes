var quote = document.querySelector('.quote');
var author = document.querySelector('.author');
var nextQuote = document.getElementById('quote-btn');

var quotes = [{
        quote: 'Act as if what you do makes a difference. It does.',
        author: 'William James'
    },
    {
        quote: 'You are never too old to set another goal or to dream a new dream.',
        author: 'C.S. Lewis'
    },
    {
        quote: 'Nothing is impossible. The word itself says \'I\'m possible!\'',
        author: 'Audrey Hepburn'
    },
    {
        quote: 'Sometimes you will never know the value of a moment until it becomes a memory.',
        author: 'Dr. Seuss'
    },
    {
        quote: 'They key to success is to start before you are ready.',
        author: 'Marie Forleo'
    },
    {
        quote: 'The most wasted of days is one without laughter.',
        author: 'E. E. Cummings'
    },
    {
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot'
    },
    {
        quote: 'Believe you can and you\'re halfway there.',
        author: 'Theodore Roosevelt'
    },
    {
        quote: 'If you cannot do great things, do small things in a great way.',
        author: 'Napoleon Hill'
    },
    {
        quote: 'Don\'t count the days, make the days count.',
        author: 'Muhammad Ali'
    },
    {
        quote: 'The most beautiful discovery true friends make is that they can grow separately without growing apart.',
        author: 'Elizabeth Foley'
    },
    {
        quote: 'To appreciate the beauty of a snowflake it is necessary to stand out in the cold.',
        author: 'Aristotle'
    },
    {
        quote: 'Tell me and I forgot. Teach me and I remember. Involve me and I learn.',
        author: 'Benjamin Franklin'
    },
    {
        quote: 'Acknowledging the good that you already have in your life is the foundation for all absence.',
        author: 'Eckhart Tolle'
    },
    {
        quote: 'One word frees us of all the weight and pain of life: That world is love.',
        author: 'Sophocles'
    },
    {
        quote: 'Never say \'No\', never say \'I cannot\', for you are infinite. All the power is within you. You can do anything.',
        author: 'Swami Vivekananda'
    },
    {
        quote: 'Make your life a masterpiece. Imagine no limitations on what you can be, have or do.',
        author: 'Brian Tracy'
    },
    {
        quote: 'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
        author: 'Roy T. Bennett'
    },
    {
        quote: 'Discipline is the bridge between goals and accomplishment',
        author: 'Jim Rohn'
    },
    {
        quote: 'Learning to ignore things is one of the great paths to inner peace.',
        author: 'Robert J. Sawyer'
    },
    {
        quote: 'A true hero isn\'t measured by the size of his strength but by the strength of his heart.',
        author: 'Hercules'
    },
    {
        quote: 'Setting goals is the first step into turning the invisible into the visible.',
        author: 'Tony Robbins'
    },
    {
        quote: 'Flawed, we\'re truly interesting, truly memorable and yes, truly beautiful.',
        author: 'Justina Chen Headley'
    },
    {
        quote: 'I can\'t think of any better representation of beauty than someone who is unafraid to be herself.',
        author: 'Emma Stone'
    }
];

var generateQuote = () => {
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
};

window.addEventListener('load', generateQuote);
nextQuote.addEventListener('click', generateQuote);
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articleData = Object.values(response.data.articles);
        console.log(articleData)
        articleData.map(item1 => {
            item1.map(item2 => {
                cardContainer.appendChild(createArticle(item2))
            });
        });

    });


function createArticle(articleObj) {

    const ogCard = document.createElement('div');
    const headline = document.createElement('div');
    const leAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorIcon = document.createElement('img')
    const authorName = document.createElement('span')

    ogCard.appendChild(headline);
    ogCard.appendChild(leAuthor);
    leAuthor.appendChild(imgContainer);
    imgContainer.appendChild(authorIcon);
    leAuthor.appendChild(authorName);

    ogCard.classList.add('card');
    headline.classList.add('headline');
    leAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = articleObj.headline
    authorIcon.src = articleObj.authorPhoto
    authorName.textContent = articleObj.authorName

    return ogCard;

} 
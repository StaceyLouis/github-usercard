import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const card = document.querySelector('.cards')
const userName = 'https://api.github.com/users/Staceylouis';
 axios
 .get(userName)
 .then(res => { 
   card.appendChild(siteCard(res))
 })
 .catch( err => {
   console.log(err)
 })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['jtwray','tetondan','dustinmyers','justsml',' bigknell'];
followersArray.forEach(follower => {
  axios
 .get(`https://api.github.com/users/${follower}`)
 .then(res => { 
   card.appendChild(siteCard(res))
 })
 .catch( err => {
   console.log(err)
 })
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function siteCard(arg){
  let div = document.createElement('div');
  div.classList.add('card');


  let img = document.createElement('img');
  img.setAttribute('src', arg.data['avatar_url']);
  div.appendChild(img);


  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  div.appendChild(cardInfo);


  let h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = arg.data['name'];
  cardInfo.appendChild(h3);

  let p = document.createElement('p');
  p.classList.add('username');
  p.textContent = arg.data.login;
  cardInfo.appendChild(p);

  let locationP = document.createElement('p');
  locationP.textContent = `Location: ${arg.data.location}`;
  

  let gitLink = document.createElement('a');
  gitLink.setAttribute('href', arg.data['html_url']);
  gitLink.textContent = arg.data.url;


  let p2 = document.createElement('p');
  p2.textContent = "Profile: ";
  p2.appendChild(gitLink);

  let p3 = document.createElement('p');
  p3.textContent = `Followers: ${arg.followers}`;
  cardInfo.appendChild(p3);

  let p4 = document.createElement('p');
  p4.textContent = `Following: ${arg.following}`;
  cardInfo.appendChild(p4);

  let p5 = document.createElement('p');
  p5.textContent = `Bio: ${arg.bio}`;
  cardInfo.appendChild(p5);

  

return div;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
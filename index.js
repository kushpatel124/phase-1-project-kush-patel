let images = document.getElementById("profilePicture");

function card() {
  images.src = "https://lh6.googleusercontent.com/NxM4YPM0qcGhkFnmYij-KIJrv3bYs0Gnd6s3ZtQ-rLgiupvlXu6RFnS9Y5kpAbf3Gkg=w2400"
}

function profilePic() {
  images.src = "https://lh3.googleusercontent.com/M47OD2PYoszRfQtWS5_wegbSANuks1WxZylaJMpcjx-ezZ7h1uArx3bxcJRZkmA2luQ=w2400"
}

images.addEventListener("mouseover", card);
images.addEventListener("mouseout", profilePic);


document.querySelector('#card-form').addEventListener('submit',
  submitForm)

function submitForm(e) {
  e.preventDefault();
  let theBusinessCard = {
    name: e.target.new_name.value,
    company: e.target.new_company.value,
    position: e.target.new_position.value,
    phone: e.target.new_phone_number.value,
    email: e.target.new_email.value,
    imageUrl: e.target.new_image.value,
  }
  renderOneBusinessCard(theBusinessCard)
  publishAllBusinessCards(theBusinessCard)
}


function renderOneBusinessCard(aBusinessCard) {

  let businessCardPic = document.createElement('p')
  businessCardPic.className = 'newBusinessCardPic'
  businessCardPic.innerHTML = `
        <img src="${aBusinessCard.imageUrl}">
    `
  document.querySelector('#pic-upload').appendChild(businessCardPic)

  let businessCardInfo = document.createElement('p')
  businessCardInfo.className = 'newBusinessCardInfo'
  businessCardInfo.innerHTML = `
      <div class="new content">
        <h2>${aBusinessCard.name}</h2>
        <h3>${aBusinessCard.company}</h3>
        <h3>${aBusinessCard.position}</h3>
        <h3>${aBusinessCard.phone}</h3>
        <h3>${aBusinessCard.email}</h3>
      </div>
    `
  document.querySelector('#info-upload').appendChild(businessCardInfo)
}

function getAllBusinessCards() {
  fetch('http://localhost:3000/info')
    .then(res => res.json())
    .then(info => info.forEach(aBusinessCard => renderOneBusinessCard(aBusinessCard)))
}

function publishAllBusinessCards(businessCardInfo) {
  fetch('http://localhost:3000/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(businessCardInfo)
  })
    .then(res => res.json())
    .then(aBusinessCard => console.log(aBusinessCard))
}

getAllBusinessCards();




// let hoodie = document.getElementById("hoodie");

// function hoodieBack() {
//   images.src = "(Add link for the back of the hoodie image)"
// }

// function hoodieFront() {
//   images.src = "(Add link for the front of the hoodie image)"
// }

// hoodie.addEventListener("mouseover", hoodieBack);
// hoodie.addEventListener("mouseout", hoodieFront);



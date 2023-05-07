let user = 'maykbrito'
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('#modalBtn')

function getGithubProfile(user) {
  // const profile = `https://api.github.com/users/${user}`
  modalToggle()

  // fetch(profile)
  //   .then(response => response.json())
  //   .then(data => {
  //     userLogin.innerHTML = `${data.name} (${data.login})`
  //     userImage.src = data.avatar_url
  //     userFollowers.innerHTML = `${data.followers} Seguidores`
  //     userFollowing.innerHTML = `${data.following} Seguindo`
  //     userRepositories.innerHTML = `${data.public_repos} Repositórios`
  //     userCompany.innerHTML = data.company ? data.company : 'Não informado'
  //     userLocation.innerHTML = data.location ? data.location : 'Não informado'
  //   })
}

modalBtn.addEventListener('click', () => {
  user = document.querySelector('#userID').value
  const profile = `https://api.github.com/users/${user}`
  fetch(profile)
    .then(response => response.json())
    .then(data => {
      userLogin.innerHTML = `${data.name} (${data.login})`
      userImage.src = data.avatar_url
      userFollowers.innerHTML = `${data.followers} Seguidores`
      userFollowing.innerHTML = `${data.following} Seguindo`
      userRepositories.innerHTML = `${data.public_repos} Repositórios`
      userCompany.innerHTML = data.company ? data.company : 'Não informado'
      userLocation.innerHTML = data.location ? data.location : 'Não informado'
    })
  removeAnimations()
  addAnimations()
  modalToggle()
})

function modalToggle() {
  modal.classList.toggle('hidden')
}

function randomColor() {
  const color = '#' + Math.round(Math.random() * 0xffffff).toString(16)

  document.querySelector('.card').style.backgroundColor = color
}

function newCard() {
  const userInput = document.querySelector('#userID').value
  if (userInput) {
    getGithubProfile(userInput)
  } else {
    getGithubProfile(user)
  }
}

function addAnimations() {
  document.querySelector('.card').classList.add('card-animation')
  document.querySelector('.profile img').classList.add('profile-img-animation')
  document.querySelector('.infos').classList.add('profile-info-animation')
}

function removeAnimations() {
  setTimeout(() => {
    document.querySelector('.card').classList.remove('card-animation')
    document
      .querySelector('.profile img')
      .classList.remove('profile-img-animation')
    document.querySelector('.infos').classList.remove('profile-info-animation')
  }, 1000)
}

window.onload = removeAnimations()

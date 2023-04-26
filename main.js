const user = 'maykbrito'
const card = document.querySelector('.card')
const cardInfos = document.querySelector('.infos')
const profileImg = document.querySelector('.profile img')

function getGithubProfile(user) {
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
}

function randomColor() {
  const color = "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
  card.style.backgroundColor = color
}

function openModal() {
  document.querySelector('.modal').classList.remove('closed')
}

function closeModal() {
  document.querySelector('.modal').classList.add('closed')
}

function newCard(username) {
  // const userInput = prompt('Digite seu usuário do Github:');
  const userInput = username
  if (userInput) {
    getGithubProfile(userInput)
  } else {
    getGithubProfile(user)
  }

  card.classList.remove('bounce')

  setTimeout(() => {
    card.classList.add('bounce')
  }, 100)

  cardInfos.classList.remove('slide')
  profileImg.classList.remove('fade-in')

  resetAnimation()

  openModal()
}

function resetAnimation() {
  setTimeout(() => {
    cardInfos.classList.add('slide')
    profileImg.classList.add('fade-in')
  }, 100)

  card.addEventListener('animationend', (e) => {
    e.target.classList.remove('bounce')
  })
}

document.querySelector('.modal-btn').addEventListener('click', () => {
  const user = document.querySelector('.modal-input').value
  newCard(user)
  closeModal()
  document.querySelector('.modal-input').value = ''
})

resetAnimation()

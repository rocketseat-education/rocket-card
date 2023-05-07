const user = 'maykbrito'
const card = document.querySelector('.card')
const cardInfos = document.querySelector('.infos')
const profileImg = document.querySelector('.profile img')
const modal = document.querySelector('.modal')

function getGithubProfile(user) {
  const profile = `https://api.github.com/users/${user}`

  fetch(profile)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error(`${user} não foi encontrado!`)
    })
    .then(data => {
      userLogin.innerHTML = `${data.name} (${data.login})`
      userImage.src = data.avatar_url
      userFollowers.innerHTML = `${data.followers} Seguidores`
      userFollowing.innerHTML = `${data.following} Seguindo`
      userRepositories.innerHTML = `${data.public_repos} Repositórios`
      userCompany.innerHTML = data.company ? data.company : 'Não informado'
      userLocation.innerHTML = data.location ? data.location : 'Não informado'
    })
    .catch(error => alert(error.message))
}

function randomColor() {
  const color = "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
  card.style.backgroundColor = color
  modal.style.backgroundColor = color + 'AA'
}

function openModal() {
  modal.classList.remove('closed')
  document.querySelector('.modal-input').focus()
}

function closeModal() {
  modal.classList.add('closed')
}

function newCard(username) {
  const userInput = username
  if (userInput) {
    getGithubProfile(userInput)
  } else {
    getGithubProfile(user)
  }

  card.classList.remove('bounce')
  cardInfos.classList.remove('slide')
  profileImg.classList.remove('fade-in')

  setTimeout(() => {
    card.classList.add('bounce')
    cardInfos.classList.add('slide')
    profileImg.classList.add('fade-in')
  }, 100)

  openModal()
}

function getUsername() {
  const user = document.querySelector('.modal-input').value
  newCard(user)
  document.querySelector('.modal-input').value = ''
  closeModal()
}

modal.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal()
  if (e.key === "Enter") getUsername()
})

document.querySelector('.modal-btn').onclick = getUsername
document.querySelector('.modal-close').onclick = closeModal

const user = 'maykbrito'

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

  document.querySelector('.card').style.backgroundColor = color
}

function newCard() {
  const userInput = prompt('Digite seu usuário do Github:');
  if (userInput) {
    getGithubProfile(userInput)
  } else {
    getGithubProfile(user)
  }
}

// window.onload = newCard()
// getGithubProfile(user)
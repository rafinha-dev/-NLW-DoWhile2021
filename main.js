const linksSocialMedia = {
    github: 'RafaelContact',
    youtube: '',
    instagram:  'rafinhadev',
    facebook: 'profile.php?id=100047693316499',
    linkedin: 'in/rafael-rodrigues-1b2981129/'
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
// fetch bate na url e pega o o que a api responde e traz
    
fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
var logo = document.getElementById('logo1')

logo.addEventListener('mouseover', function (event){
    this.setAttribute('src', 'imgs/logo_Riot2.png')
})

logo.addEventListener('mouseout', function(event){
    this.setAttribute('src', 'imgs/logo_Riot.png')
})

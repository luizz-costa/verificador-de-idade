function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')       
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria uma tag img
        img.setAttribute('id', 'foto') //mesma coisa de criar um id pelo html
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12){
                //crianca
                img.setAttribute('src', 'img/criancamasc.jpg')
            }else if (idade > 12 && idade <= 25){
                //Jovem
                img.setAttribute('src', 'img/adolescentemasc.jpg')
            }else if (idade > 25 && idade <60){
                //Adulto
                img.setAttribute('src', 'img/adultomasc.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <=12){
                //crianca
                img.setAttribute('src', 'img/criancafem.jpg')
            }else if (idade > 12 && idade <= 25){
                //Jovem
                img.setAttribute('src', 'img/adolescentefem.jpg')
            }else if (idade > 25 && idade <60){
                //Adulto
                img.setAttribute('src', 'img/adultofem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.style.display = 'flex';
        res.style.flexDirection = 'column';
        res.style.alignItems = 'center';
        res.innerHTML = `Você é ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
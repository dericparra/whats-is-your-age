function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('style', 'border-radius: 50%')
        img.setAttribute('width', '250')

        if (sex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotos/criançaM.jpg')
            } else if (idade < 26) {
                img.setAttribute('src', 'fotos/jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotos/adultoM.jpg')
            } else {
                img.setAttribute('src', 'fotos/idosoM.jpg')
            }
        } else if ( sex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','fotos/criançaF.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'fotos/jovemF.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotos/adultoF.jpg')
            } else {
                img.setAttribute('src', 'fotos/idosoF.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }
}
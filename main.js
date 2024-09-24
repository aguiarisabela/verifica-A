const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const mensagemA = document.getElementById('mensagem').value

    let contadorMaiuscula = 0
    let contadorMinuscula = 0

    for (let i = 0; i< mensagemA.length; i++){
      const letra = mensagemA[i]

        if(letra === 'A' || letra === 'Á'|| letra === 'À' || letra === 'Ã' || letra === 'Â' || letra === 'Ä'){
            contadorMaiuscula++

        } else if (letra === 'a' || letra === 'á'|| letra === 'à' || letra === 'ã' || letra === 'â' || letra === 'ä'){
            contadorMinuscula++
        }
    }

    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `A letra <strong>'A'em maiúscula, incluindo a acentuação, aparece ${contadorMaiuscula}</strong> vez(es) em seu texto, já a letra <strong>'a' também com acentuação inclusa, em minúscula, aparece ${contadorMinuscula}<strong> vez(es).`
    
})
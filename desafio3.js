let alcool = 0
let gasolina = 0
let diesel = 0

//laço for para garantir que será repetido no máximo 10 vezes    
for(let i=0; i < 10; i++){
    //modo mais enxuto para escolher um número aleatorio e arrendonda-lo
    let valorArredondado = Math.round(Math.random()*4)

    /*laço if dentro do laço for para finalizar a repetição caso o numero 4
    seja selecionado*/

    if(valorArredondado === 4){
        console.log('Opção 4 escolhida, saindo do programa')
        break

    }//laço switch para contabilizar os pontos nas iterações

        switch (valorArredondado) {
            case 1:
                console.log('Opção 1 escolhida')
                alcool++;
                break;
            case 2:
                console.log('Opção 2 escolhida')
                gasolina++;
                break;
            case 3:
                console.log('Opção 3 escolhida')
                diesel++;
                break;

    }
     
}
    console.log('---------------')
    console.log('Muito Obrigado')
    console.log('Alcool = ', alcool)
    console.log('Gasolina = ', gasolina)
    console.log('Diesel = ', diesel)

   /* for(let i=0; i < 10; i++){
        console.log(i)
        if(i === 4){
            break
        }
    }
*/

function atualizacoes(){
    return {
        gerar(){
            setInterval(_=>{
                for(let n=0; n <= 5; n++){
                   document.getElementsByClassName(`atualizacao-${n}`)[0].innerHTML = Math.floor(Math.random() * (47 - 15 + 1) + 13)
                 }

            },2000)
            
          
           
        }
    }
}



atualizacoes().gerar()
var lamp = window.document.getElementById('lampada')




    function estaQuebrada() {
        return lamp.src.indexOf("quebrada") > -1;
    }



function ligar(){
    if (!estaQuebrada()) {
        lamp.src = 'lampadaligada.svg'
    }
    }


function desligar(){
    if (!estaQuebrada()) {
lamp.src = `lampadadesligada.svg`
    }

}



lamp.addEventListener ('click', quebrar )

    function quebrar(){
        lamp.src = `lampadaquebrada.svg`}
  


        

       




            
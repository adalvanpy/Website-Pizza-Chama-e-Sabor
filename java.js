function valorCH(valor) {

    let valorDis = parseInt(valor);

   if (!isNaN(valorDis)) {  
      document.getElementById('cchoco2').value = valorDis;
}
}

function maisCH(){
    var valorAnterior = document.getElementById("cchoco").value;
    var valorAnterior2 = document.getElementById("cchoco2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual < 2){
      document.getElementById("cchoco").value = valorAtual + 1;
   }
   if(valorAtual2 === 35){
      document.getElementById("cchoco2").value = valorAtual2 + 35;

   }
   else if(valorAtual2 === 45){
    document.getElementById("cchoco2").value = valorAtual2 + 45;
     
   }
   else if(valorAtual2 === 55){
    document.getElementById("cchoco2").value = valorAtual2 + 55;
   }
   else if(valorAtual2 === 75){
    document.getElementById("cchoco2").value = valorAtual2 + 75;
   }
      
  }

  function menosCH(){
    var valorAnterior = document.getElementById("cchoco").value;
    var valorAnterior2 = document.getElementById("cchoco2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual > 1){
      document.getElementById("cchoco").value = valorAtual - 1;
   }
   if(valorAtual2 === 70){
      document.getElementById("cchoco2").value = valorAtual2 - 35;

   }
   else if(valorAtual2 === 90){
    document.getElementById("cchoco2").value = valorAtual2 - 45;
     
   }
   else if(valorAtual2 === 110){
    document.getElementById("cchoco2").value = valorAtual2 - 55;
   }
   else if(valorAtual2 === 150){
    document.getElementById("cchoco2").value = valorAtual2 - 75;
   }

}
 let chocol = "";
function receberCH(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!chocol.includes(valor + "<br>")){
            chocol += valor + "<br>";
        }
    }
    else{
        chocol = chocol.replace(valor + "<br>", "");
    }


    let total = document.getElementById("cchoco2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + chocol + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + chocol + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + chocol + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + chocol + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
   
}

function irPedidosCH(){
    var obs_choco = document.getElementById("mensagemCH").value;
    
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('chocolate').style.display = 'none';

      if(obs_choco!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_choco; 
      }
      else{
        document.getElementById('obs').style.display = 'none';
      } 
  }

  /*FIM CHOCOLATE*/

  /*INICIO ROMEU E JULIETA*/

  function valorRJ(valor) {

    let valorDis = parseInt(valor);

   if (!isNaN(valorDis)) {  
      document.getElementById('rrej2').value = valorDis;
}
}

function maisRJ(){
    var valorAnterior = document.getElementById("rrej").value;
    var valorAnterior2 = document.getElementById("rrej2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual < 2){
      document.getElementById("rrej").value = valorAtual + 1;
   }
   if(valorAtual2 === 35){
      document.getElementById("rrej2").value = valorAtual2 + 35;

   }
   else if(valorAtual2 === 45){
    document.getElementById("rrej2").value = valorAtual2 + 45;
     
   }
   else if(valorAtual2 === 55){
    document.getElementById("rrej2").value = valorAtual2 + 55;
   }
   else if(valorAtual2 === 75){
    document.getElementById("rrej2").value = valorAtual2 + 75;
   }
      
  }

  function menosRJ(){
    var valorAnterior = document.getElementById("rrej").value;
    var valorAnterior2 = document.getElementById("rrej2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual > 1){
      document.getElementById("rrej").value = valorAtual - 1;
   }
   if(valorAtual2 === 70){
      document.getElementById("rrej2").value = valorAtual2 - 35;

   }
   else if(valorAtual2 === 90){
    document.getElementById("rrej2").value = valorAtual2 - 45;
     
   }
   else if(valorAtual2 === 110){
    document.getElementById("rrej2").value = valorAtual2 - 55;
   }
   else if(valorAtual2 === 150){
    document.getElementById("rrej2").value = valorAtual2 - 75;
   }

}
let rEj = "";
function receberRJ(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!rEj.includes(valor + "<br>")){
            rEj += valor + "<br>";
        }
    }
    else{
        rEj = rEj.replace(valor + "<br>", "");
    }

    let total = document.getElementById("rrej2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + rEj + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + rEj+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + rEj + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + rEj + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosRJ(){
    var obs_rej = document.getElementById("mensagemRJ").value;
    
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('romeuej').style.display = 'none';

      if(obs_rej!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_rej; 
      }
      else{
        document.getElementById('obs').style.display = 'none';
      } 
  }

  /*FIM ROMEU E JULIETA*/

  /*INICIO BANANA COM CANELA */

  function valorBC(valor) {

    let valorDis = parseInt(valor);

   if (!isNaN(valorDis)) {  
      document.getElementById('bbanana2').value = valorDis;
}
}

function maisBC(){
    var valorAnterior = document.getElementById("bbanana").value;
    var valorAnterior2 = document.getElementById("bbanana2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual < 2){
      document.getElementById("bbanana").value = valorAtual + 1;
   }
   if(valorAtual2 === 35){
      document.getElementById("bbanana2").value = valorAtual2 + 35;

   }
   else if(valorAtual2 === 45){
    document.getElementById("bbanana2").value = valorAtual2 + 45;
     
   }
   else if(valorAtual2 === 55){
    document.getElementById("bbanana2").value = valorAtual2 + 55;
   }
   else if(valorAtual2 === 75){
    document.getElementById("bbanana2").value = valorAtual2 + 75;
   }
      
  }

  function menosBC(){
    var valorAnterior = document.getElementById("bbanana").value;
    var valorAnterior2 = document.getElementById("bbanana2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual > 1){
      document.getElementById("bbanana").value = valorAtual - 1;
   }
   if(valorAtual2 === 70){
      document.getElementById("bbanana2").value = valorAtual2 - 35;

   }
   else if(valorAtual2 === 90){
    document.getElementById("bbanana2").value = valorAtual2 - 45;
     
   }
   else if(valorAtual2 === 110){
    document.getElementById("bbanana2").value = valorAtual2 - 55;
   }
   else if(valorAtual2 === 150){
    document.getElementById("bbanana2").value = valorAtual2 - 75;
   }

}
let bEc = "";
function receberBC(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!bEc.includes(valor + "<br>")){
            bEc += valor + "<br>";
        }
    }
    else{
        bEc = bEc.replace(valor + "<br>", "");
    }


    let total = document.getElementById("bbanana2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + bEc + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + bEc+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + bEc + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + bEc + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosBC(){
    var obs_banana = document.getElementById("mensagemBC").value;
    
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('bananac').style.display = 'none';

      if(obs_banana!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_banana; 
      }
      else{
        document.getElementById('obs').style.display = 'none';
      } 
  }

  /*FIM BANANA COM CANELA*/

  /*INICIO BRIGADEIRO*/

  function valorBR(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('bbriga2').value = valorDis;
    }
}

function maisBR(){
    var valorAnterior = document.getElementById("bbriga").value;
    var valorAnterior2 = document.getElementById("bbriga2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("bbriga").value = valorAtual + 1;
    }
    if(valorAtual2 === 35){
        document.getElementById("bbriga2").value = valorAtual2 + 35;
    }
    else if(valorAtual2 === 45){
        document.getElementById("bbriga2").value = valorAtual2 + 45;
    }
    else if(valorAtual2 === 55){
        document.getElementById("bbriga2").value = valorAtual2 + 55;
    }
    else if(valorAtual2 === 75){
        document.getElementById("bbriga2").value = valorAtual2 + 75;
    }
}

function menosBR(){
    var valorAnterior = document.getElementById("bbriga").value;
    var valorAnterior2 = document.getElementById("bbriga2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("bbriga").value = valorAtual - 1;
    }
    if(valorAtual2 === 70){
        document.getElementById("bbriga2").value = valorAtual2 - 35;
    }
    else if(valorAtual2 === 90){
        document.getElementById("bbriga2").value = valorAtual2 - 45;
    }
    else if(valorAtual2 === 110){
        document.getElementById("bbriga2").value = valorAtual2 - 55;
    }
    else if(valorAtual2 === 150){
        document.getElementById("bbriga2").value = valorAtual2 - 75;
    }
}
let brig = "";
function receberBR(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!brig.includes(valor + "<br>")){
            brig += valor + "<br>";
        }
    }
    else{
        brig = brig.replace(valor + "<br>", "");
    }

    let total = document.getElementById("bbriga2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + brig + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + brig+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + brig + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + brig+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosBR(){
    var obs_bbriga = document.getElementById("mensagemBG").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('brigadeiro').style.display = 'none';

    if(obs_bbriga!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_bbriga; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM BRIGADEIRO*/

/*INICIO MORANGO COM CHOCOLATE*/

function valorMC(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('mmorango2').value = valorDis;
    }
}

function maisMC(){
    var valorAnterior = document.getElementById("mmorango").value;
    var valorAnterior2 = document.getElementById("mmorango2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("mmorango").value = valorAtual + 1;
    }
    if(valorAtual2 === 35){
        document.getElementById("mmorango2").value = valorAtual2 + 35;
    }
    else if(valorAtual2 === 45){
        document.getElementById("mmorango2").value = valorAtual2 + 45;
    }
    else if(valorAtual2 === 55){
        document.getElementById("mmorango2").value = valorAtual2 + 55;
    }
    else if(valorAtual2 === 75){
        document.getElementById("mmorango2").value = valorAtual2 + 75;
    }
}

function menosMC(){
    var valorAnterior = document.getElementById("mmorango").value;
    var valorAnterior2 = document.getElementById("mmorango2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("mmorango").value = valorAtual - 1;
    }
    if(valorAtual2 === 70){
        document.getElementById("mmorango2").value = valorAtual2 - 35;
    }
    else if(valorAtual2 === 90){
        document.getElementById("mmorango2").value = valorAtual2 - 45;
    }
    else if(valorAtual2 === 110){
        document.getElementById("mmorango2").value = valorAtual2 - 55;
    }
    else if(valorAtual2 === 150){
        document.getElementById("mmorango2").value = valorAtual2 - 75;
    }
}
let mEc = "";
function receberMC(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!mEc.includes(valor + "<br>")){
            mEc += valor + "<br>";
        }
    }
    else{
        mEc = mEc.replace(valor + "<br>", "");
    }

    let total = document.getElementById("mmorango2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + mEc + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + mEc+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + mEc + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + mEc+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosMC(){
    var obs_mmorango = document.getElementById("mensagemMC").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('morangoc').style.display = 'none';

    if(obs_mmorango!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_mmorango; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM MORANGO COM CHOCOLATE*/

/*INICIO CUBANA*/

function valorCB(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('ccubana2').value = valorDis;
    }
}

function maisCB(){
    var valorAnterior = document.getElementById("ccubana").value;
    var valorAnterior2 = document.getElementById("ccubana2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("ccubana").value = valorAtual + 1;
    }
    if(valorAtual2 === 35){
        document.getElementById("ccubana2").value = valorAtual2 + 35;
    }
    else if(valorAtual2 === 45){
        document.getElementById("ccubana2").value = valorAtual2 + 45;
    }
    else if(valorAtual2 === 55){
        document.getElementById("ccubana2").value = valorAtual2 + 55;
    }
    else if(valorAtual2 === 75){
        document.getElementById("ccubana2").value = valorAtual2 + 75;
    }
}

function menosCB(){
    var valorAnterior = document.getElementById("ccubana").value;
    var valorAnterior2 = document.getElementById("ccubana2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("ccubana").value = valorAtual - 1;
    }
    if(valorAtual2 === 70){
        document.getElementById("ccubana2").value = valorAtual2 - 35;
    }
    else if(valorAtual2 === 90){
        document.getElementById("ccubana2").value = valorAtual2 - 45;
    }
    else if(valorAtual2 === 110){
        document.getElementById("ccubana2").value = valorAtual2 - 55;
    }
    else if(valorAtual2 === 150){
        document.getElementById("ccubana2").value = valorAtual2 - 75;
    }
}
let cub = "";
function receberCB(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!cub.includes(valor + "<br>")){
            cub+= valor + "<br>";
        }
    }
    else{
        cub = cub.replace(valor + "<br>", "");
    }

    let total = document.getElementById("ccubana2").value;
    if(total === '35' || total === '70'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
        + cub + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '45' || total === '90'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
        + cub+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '55' || total === '110'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
        + cub + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '75' || total === '150'){
        document.getElementById("pedidos").innerHTML = "<strong>PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
        + cub+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosCB(){
    var obs_ccubana = document.getElementById("mensagemCB").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('cubana').style.display = 'none';

    if(obs_ccubana!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_ccubana; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM CUBANA*/



/*INICIO CALABRESA*/

function valorCAL(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('ccalabresa2').value = valorDis;
    }
}

function maisCAL(){
    var valorAnterior = document.getElementById("ccalabresa").value;
    var valorAnterior2 = document.getElementById("ccalabresa2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("ccalabresa").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("ccalabresa2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("ccalabresa2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("ccalabresa2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("ccalabresa2").value = valorAtual2 + 70;
    }
}

function menosCAL(){
    var valorAnterior = document.getElementById("ccalabresa").value;
    var valorAnterior2 = document.getElementById("ccalabresa2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("ccalabresa").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("ccalabresa2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("ccalabresa2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("ccalabresa2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("ccalabresa2").value = valorAtual2 - 70;
    }
}
let calb = "";
function receberCAL(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!calb.includes(valor + "<br>")){
            calb += valor + "<br>";
        }
    }
    else{
        calb = calb.replace(valor + "<br>", "");
    }

    let total = document.getElementById("ccalabresa2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + calb + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + calb + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + calb + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + calb + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosCAL(){
    var obs_ccalabresa = document.getElementById("mensagem1").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('call').style.display = 'none';

    if(obs_ccalabresa!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_ccalabresa; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM CALABRESA*/

/*INICIO FRAGO CATUPIRY */

function valorFC(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('ffrango2').value = valorDis;
    }
}

function maisFC(){
    var valorAnterior = document.getElementById("ffrango").value;
    var valorAnterior2 = document.getElementById("ffrango2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("ffrango").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("ffrango2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("ffrango2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("ffrango2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("ffrango2").value = valorAtual2 + 70;
    }
}

function menosFC(){
    var valorAnterior = document.getElementById("ffrango").value;
    var valorAnterior2 = document.getElementById("ffrango2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("ffrango").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("ffrango2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("ffrango2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("ffrango2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("ffrango2").value = valorAtual2 - 70;
    }
}
let catpy = "";
function receberFC(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!catpy.includes(valor + "<br>")){
            catpy+= valor + "<br>";
        }
    }
    else{
        catpy = catpy.replace(valor + "<br>", "");
    }

    let total = document.getElementById("ffrango2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + catpy + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + catpy + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + catpy + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + catpy + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosFC(){
    var obs_ffrango = document.getElementById("mensagem2").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('frango').style.display = 'none';

    if(obs_ffrango!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_ffrango; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM FRANGO*/

/*INICIO PORTUGUESA*/

function valorPT(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('pportu2').value = valorDis;
    }
}

function maisPT(){
    var valorAnterior = document.getElementById("pportu").value;
    var valorAnterior2 = document.getElementById("pportu2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("pportu").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("pportu2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("pportu2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("pportu2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("pportu2").value = valorAtual2 + 70;
    }
}

function menosPT(){
    var valorAnterior = document.getElementById("pportu").value;
    var valorAnterior2 = document.getElementById("pportu2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("pportu").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("pportu2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("pportu2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("pportu2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("pportu2").value = valorAtual2 - 70;
    }
}
let port = "";
function receberPT(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!port.includes(valor + "<br>")){
            port+= valor + "<br>";
        }
    }
    else{
        port = port.replace(valor + "<br>", "");
    }

    let total = document.getElementById("pportu2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + port + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + port + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + port + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + port + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosPT(){
    var obs_pportu = document.getElementById("mensagem3").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('portuguesa').style.display = 'none';

    if(obs_pportu!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_pportu; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM PORTUGUESA*/

/*INICIO PEPPERONI*/

function valorPP(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('ppepe2').value = valorDis;
    }
}

function maisPP(){
    var valorAnterior = document.getElementById("ppepe").value;
    var valorAnterior2 = document.getElementById("ppepe2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("ppepe").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("ppepe2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("ppepe2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("ppepe2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("ppepe2").value = valorAtual2 + 70;
    }
}

function menosPP(){
    var valorAnterior = document.getElementById("ppepe").value;
    var valorAnterior2 = document.getElementById("ppepe2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("ppepe").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("ppepe2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("ppepe2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("ppepe2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("ppepe2").value = valorAtual2 - 70;
    }
}
let pepp = "";
function receberPP(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!pepp.includes(valor + "<br>")){
            pepp += valor + "<br>";
        }
    }
    else{
        pepp = pepp.replace(valor + "<br>", "");
    }

    let total = document.getElementById("ppepe2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + pepp+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + pepp+ "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + pepp + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + pepp + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosPP(){
    var obs_ppepe = document.getElementById("mensagem4").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('pepperoni').style.display = 'none';

    if(obs_ppepe!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_ppepe; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM PEPPERONI*/

/*INICIO MARGUERITA*/

function valorMG(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('mmarguerita2').value = valorDis;
    }
}

function maisMG(){
    var valorAnterior = document.getElementById("mmarguerita").value;
    var valorAnterior2 = document.getElementById("mmarguerita2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("mmarguerita").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("mmarguerita2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("mmarguerita2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("mmarguerita2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("mmarguerita2").value = valorAtual2 + 70;
    }
}

function menosMG(){
    var valorAnterior = document.getElementById("mmarguerita").value;
    var valorAnterior2 = document.getElementById("mmarguerita2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("mmarguerita").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("mmarguerita2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("mmarguerita2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("mmarguerita2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("mmarguerita2").value = valorAtual2 - 70;
    }
}
let marg = "";
function receberMG(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!marg.includes(valor + "<br>")){
            marg+= valor + "<br>";
        }
    }
    else{
        marg  = marg.replace(valor + "<br>", "");
    }

    let total = document.getElementById("mmarguerita2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + marg + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + marg + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + marg  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + marg  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosMG(){
    var obs_mmarguerita = document.getElementById("mensagem5").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('marguerita').style.display = 'none';

    if(obs_mmarguerita!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_mmarguerita; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}


/*FIM MARGUERITA*/

/*INICIO ATUM*/

function valorAT(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('aatum2').value = valorDis;
    }
}

function maisAT(){
    var valorAnterior = document.getElementById("aatum").value;
    var valorAnterior2 = document.getElementById("aatum2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("aatum").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("aatum2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("aatum2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("aatum2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("aatum2").value = valorAtual2 + 70;
    }
}

function menosAT(){
    var valorAnterior = document.getElementById("aatum").value;
    var valorAnterior2 = document.getElementById("aatum2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("aatum").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("aatum2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("aatum2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("aatum2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("aatum2").value = valorAtual2 - 70;
    }
}
let attum = "";
function receberAT(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!attum.includes(valor + "<br>")){
            attum += valor + "<br>";
        }
    }
    else{
        attum = attum.replace(valor + "<br>", "");
    }

    let total = document.getElementById("aatum2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    + attum + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    + attum  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    + attum  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    + attum  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosAT(){
    var obs_aatum = document.getElementById("mensagem6").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('atum').style.display = 'none';

    if(obs_aatum!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_aatum; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}


/*FIM  ATUM*/

/* INICIO QUATRO QUEIJO */

function valorQQ(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('qqueijo2').value = valorDis;
    }
}

function maisQQ(){
    var valorAnterior = document.getElementById("qqueijo").value;
    var valorAnterior2 = document.getElementById("qqueijo2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("qqueijo").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("qqueijo2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("qqueijo2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("qqueijo2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("qqueijo2").value = valorAtual2 + 70;
    }
}

function menosQQ(){
    var valorAnterior = document.getElementById("qqueijo").value;
    var valorAnterior2 = document.getElementById("qqueijo2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("qqueijo").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("qqueijo2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("qqueijo2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("qqueijo2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("qqueijo2").value = valorAtual2 - 70;
    }
}
let qque ="";
function receberQQ(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!qque.includes(valor + "<br>")){
            qque += valor + "<br>";
        }
    }
    else{
        qque  = qque .replace(valor + "<br>", "");
    }

    let total = document.getElementById("qqueijo2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    +  qque + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    +  qque  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    +  qque   + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    +  qque  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosQQ(){
    var obs_qqueijo = document.getElementById("mensagem7").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('quatroqueijo').style.display = 'none';

    if(obs_qqueijo!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_qqueijo; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}


/*FIM QUATRO QUEIJO*/

/*INICIO NAPOLITANA*/

function valorNP(valor) {
    let valorDis = parseInt(valor);

    if (!isNaN(valorDis)) {  
        document.getElementById('nnapo2').value = valorDis;
    }
}

function maisNP(){
    var valorAnterior = document.getElementById("nnapo").value;
    var valorAnterior2 = document.getElementById("nnapo2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual < 2){
        document.getElementById("nnapo").value = valorAtual + 1;
    }
    if(valorAtual2 === 30){
        document.getElementById("nnapo2").value = valorAtual2 + 30;
    }
    else if(valorAtual2 === 40){
        document.getElementById("nnapo2").value = valorAtual2 + 40;
    }
    else if(valorAtual2 === 50){
        document.getElementById("nnapo2").value = valorAtual2 + 50;
    }
    else if(valorAtual2 === 70){
        document.getElementById("nnapo2").value = valorAtual2 + 70;
    }
}

function menosNP(){
    var valorAnterior = document.getElementById("nnapo").value;
    var valorAnterior2 = document.getElementById("nnapo2").value;
    var valorAtual = parseInt(valorAnterior);
    var valorAtual2 = parseInt(valorAnterior2);

    if(valorAtual > 1){
        document.getElementById("nnapo").value = valorAtual - 1;
    }
    if(valorAtual2 === 60){
        document.getElementById("nnapo2").value = valorAtual2 - 30;
    }
    else if(valorAtual2 === 80){
        document.getElementById("nnapo2").value = valorAtual2 - 40;
    }
    else if(valorAtual2 === 100){
        document.getElementById("nnapo2").value = valorAtual2 - 50;
    }
    else if(valorAtual2 === 140){
        document.getElementById("nnapo2").value = valorAtual2 - 70;
    }
}
let napp = "";
function receberNP(valor, id){
    let checkbox = document.getElementById(id);
    if(checkbox.checked){
        if (!napp.includes(valor + "<br>")){
            napp += valor + "<br>";
        }
    }
    else{
        napp  = napp .replace(valor + "<br>", "");
    }

    let total = document.getElementById("nnapo2").value;
    if(total === '30' || total === '60'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO PEQUENA <br> SABORES</strong>: <br>"
    +  napp  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '40' || total === '80'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO MEDIA <br> SABORES</strong>: <br>"
    +  napp  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '50' || total === '100'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO GRANDE <br> SABORES</strong>: <br>"
    +  napp   + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
    else if(total === '70' || total === '140'){
        document.getElementById("pedidos").innerHTML = "<strong> PIZZA TAMANHO FAMILIA <br> SABORES</strong>: <br>"
    +  napp  + "<strong>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
    }
}

function irPedidosNP(){
    var obs_nnapo = document.getElementById("mensagem8").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('napolitana').style.display = 'none';

    if(obs_nnapo!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_nnapo; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 
}

/*FIM NAPOLITANA*/


/*ICICIO SUCO DE ABACAXI*/

let ml ="";
let abacaxi = "";
function mlAB(valor,mll,id){
    valor = parseInt(valor);

    if(id.checked){
        ml = mll;
        document.getElementById('quantidadeA1').value = valor;
    }
    abacaxi = "SUCO DE ABACAXI COM HORTELÃ " + ml + "ML, ";
}

function receberAB(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('quantidadeA1').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        abacaxi = abacaxi.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!abacaxi.includes(item + ", ")) {
            abacaxi += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeA1").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + abacaxi  +  "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosAB(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        if(ml === "300"){
        vazio.innerHTML = ' SUCO DE ABACAXI C/ HORTELÃ ' + ml + ' ML <strong>R$</strong> 6';
        }
        else{
            vazio.innerHTML = ' SUCO DE ABACAXI C/ HORTELÃ ' + ml + ' ML <strong>R$</strong> 10';

        }
    }
    var obs_AB = document.getElementById("mensagemA").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('abacaxi').style.display = 'none';

    if(obs_AB!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_AB; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }

  function maisAB(){
    let valorAnterior = document.getElementById("quantidadeA");

    let valorAnterior2 = document.getElementById("quantidadeA1");
    
    
    let valorAtual = parseInt(valorAnterior.value);

    let valorAtual2 = parseInt(valorAnterior2.value);

   if(valorAtual < 2){
      valorAtual += 1
      document.getElementById("quantidadeA").value = valorAtual;
   }
   if(valorAtual2 === 6){
      document.getElementById("quantidadeA1").value = valorAtual2 + 6;
   }
   else if(valorAtual2 === 10){
    document.getElementById("quantidadeA1").value = valorAtual2 + 10;
 }
      
  }

  function menosAB(){
    var valorAnterior = document.getElementById("quantidadeA").value;

    var valorAnterior2 = document.getElementById("quantidadeA1").value;
    
    
    var valorAtual = parseInt(valorAnterior);

    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual > 1){
      document.getElementById("quantidadeA").value = valorAtual - 1;
   }
   if(valorAtual2 === 12){
      document.getElementById("quantidadeA1").value = valorAtual2 - 6;
   }
   else if(valorAtual2 === 20){
    document.getElementById("quantidadeA1").value = valorAtual2 - 10;
 }
      
  }
   

  /*FIM SUCO DE ABACAXI*/

  /*INICIO SUCO DE LARANJA*/

  let mlL ="";
let laranja = "";
function mlLA(valor,mll,id){
    valor = parseInt(valor);

    if(id.checked){
        mlL = mll;
        document.getElementById('quantidadeLa1').value = valor;
    }
    laranja = "SUCO DE LARANJA " + mlL + "ML, ";
}

function receberLA(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('quantidadeLa1').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        laranja = laranja.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!laranja.includes(item + ", ")) {
            laranja += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeLa1").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + laranja  +  "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosLA(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        if(ml === "300"){
        vazio.innerHTML = ' SUCO DE LARANJA ' + ml + ' ML <strong>R$</strong> 6';
        }
        else{
            vazio.innerHTML = ' SUCO DE LARANJA' + ml + ' ML <strong>R$</strong> 10';

        }
    }
    var obs_LA = document.getElementById("mensagemLa").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('laranja').style.display = 'none';

    if(obs_LA!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_LA; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }

  function maisAB(){
    let valorAnterior = document.getElementById("quantidadeLa");

    let valorAnterior2 = document.getElementById("quantidadeLa1");
    
    
    let valorAtual = parseInt(valorAnterior.value);

    let valorAtual2 = parseInt(valorAnterior2.value);

   if(valorAtual < 2){
      valorAtual += 1
      document.getElementById("quantidadeLa").value = valorAtual;
   }
   if(valorAtual2 === 6){
      document.getElementById("quantidadeLa1").value = valorAtual2 + 6;
   }
   else if(valorAtual2 === 10){
    document.getElementById("quantidadeLa1").value = valorAtual2 + 10;
 }
      
  }

  function menosAB(){
    var valorAnterior = document.getElementById("quantidadeLa").value;

    var valorAnterior2 = document.getElementById("quantidadeLa1").value;
    
    
    var valorAtual = parseInt(valorAnterior);

    var valorAtual2 = parseInt(valorAnterior2);

   if(valorAtual > 1){
      document.getElementById("quantidadeLa").value = valorAtual - 1;
   }
   if(valorAtual2 === 12){
      document.getElementById("quantidadeLa1").value = valorAtual2 - 6;
   }
   else if(valorAtual2 === 20){
    document.getElementById("quantidadeLa1").value = valorAtual2 - 10;
 }
      
  }

  /*FIM SUCO DE LARANJA*/

  /*INICIO SUCO DE LIMÃO*/

  let mlLimao ="";
  let limao = "";
  function mlLM(valor,mll,id){
      valor = parseInt(valor);
  
      if(id.checked){
          mlLimao = mll;
          document.getElementById('quantidadeLI1').value = valor;
          
      }
      limao = "SUCO DE LIMÃO " + mlLimao + "ML, ";
  }
  
  function receberLM(valor, item, checkb){
  
      let valorC1 = parseInt(valor);
  
      let valorC2 = document.getElementById('quantidadeLI1').value;
      valorC2 = parseInt(valorC2);
  
      let checkbox = document.getElementById(checkb);
      if(!checkbox.checked){
          valorC2 -= valorC1;
          limao = limao.replace(item + ", ", "");
      }
      else{
          valorC2 += valorC1;
          if (!limao.includes(item + ", ")) {
              limao += item + ", ";
          }
      }
  
     let total = document.getElementById("quantidadeLI1").value = valorC2;
     document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
      + limao  +  "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
  
    } 
  
    function irpedidosLM(){
      var vazio = document.getElementById("pedidos");
      if(vazio.textContent === "Pedido vazio!"){
          if(mlLimao === "300"){
          vazio.innerHTML = ' SUCO DE LIMÃO ' + mlLimao + ' ML <strong>R$</strong> 6';
          }
          else{
              vazio.innerHTML = ' SUCO DE LIMÃO' + mlLimao + ' ML <strong>R$</strong> 10';
  
          }
      }
      var obs_LM = document.getElementById("mensagemLI").value;
  
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('limaoo').style.display = 'none';
  
      if(obs_LM!== ""){
          document.getElementById('obs').innerHTML = "Obs: " +  obs_LM; 
      }
      else{
          document.getElementById('obs').style.display = 'none';
      } 
  
    }
  
    function maisLM(){
      let valorAnterior = document.getElementById("quantidadeLI");
  
      let valorAnterior2 = document.getElementById("quantidadeLI1");
      
      
      let valorAtual = parseInt(valorAnterior.value);
  
      let valorAtual2 = parseInt(valorAnterior2.value);
  
     if(valorAtual < 2){
        valorAtual += 1
        document.getElementById("quantidadeLI").value = valorAtual;
     }
     if(valorAtual2 === 6){
        document.getElementById("quantidadeLI1").value = valorAtual2 + 6;
     }
     else if(valorAtual2 === 10){
      document.getElementById("quantidadeLI1").value = valorAtual2 + 10;
   }
        
    }
  
    function menosLM(){
      var valorAnterior = document.getElementById("quantidadeLI").value;
  
      var valorAnterior2 = document.getElementById("quantidadeLI1").value;
      
      
      var valorAtual = parseInt(valorAnterior);
  
      var valorAtual2 = parseInt(valorAnterior2);
  
     if(valorAtual > 1){
        document.getElementById("quantidadeLI").value = valorAtual - 1;
     }
     if(valorAtual2 === 12){
        document.getElementById("quantidadeLI1").value = valorAtual2 - 6;
     }
     else if(valorAtual2 === 20){
      document.getElementById("quantidadeLI1").value = valorAtual2 - 10;
   }
        
    }

  /*FIM SUCO DE LIMÃO*/

  /*INICIO SUCO DE MARACUJA*/

  let mlmara ="";
  let maracuja = "";
  function mlMR(valor,mll,id){
      valor = parseInt(valor);
  
      if(id.checked){
          mlmara = mll;
          document.getElementById('quantidadeM1').value = valor;
          
      }
      maracuja = "SUCO DE MARACUJA " + mlmara + "ML, ";
  }
  
  function receberMR(valor, item, checkb){
  
      let valorC1 = parseInt(valor);
  
      let valorC2 = document.getElementById('quantidadeM1').value;
      valorC2 = parseInt(valorC2);
  
      let checkbox = document.getElementById(checkb);
      if(!checkbox.checked){
          valorC2 -= valorC1;
          maracuja = maracuja.replace(item + ", ", "");
      }
      else{
          valorC2 += valorC1;
          if (!maracuja.includes(item + ", ")) {
              maracuja += item + ", ";
          }
      }
  
     let total = document.getElementById("quantidadeM1").value = valorC2;
     document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
      + maracuja  +  "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
  
    } 
  
    function irpedidosMR(){
      var vazio = document.getElementById("pedidos");
      if(vazio.textContent === "Pedido vazio!"){
          if(mlLimao === "300"){
          vazio.innerHTML = ' SUCO DE MARACUJÁ ' + mlLimao + ' ML <strong>R$</strong> 6';
          }
          else{
              vazio.innerHTML = ' SUCO DE MARACUJÁ' + mlLimao + ' ML <strong>R$</strong> 10';
  
          }
      }
      var obs_MR = document.getElementById("mensagemM").value;
  
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('maracuja').style.display = 'none';
  
      if(obs_MR!== ""){
          document.getElementById('obs').innerHTML = "Obs: " +  obs_MR; 
      }
      else{
          document.getElementById('obs').style.display = 'none';
      } 
  
    }
  
    function maisMR(){
      let valorAnterior = document.getElementById("quantidadeM");
  
      let valorAnterior2 = document.getElementById("quantidadeM1");
      
      
      let valorAtual = parseInt(valorAnterior.value);
  
      let valorAtual2 = parseInt(valorAnterior2.value);
  
     if(valorAtual < 2){
        valorAtual += 1
        document.getElementById("quantidadeM").value = valorAtual;
     }
     if(valorAtual2 === 6){
        document.getElementById("quantidadeM1").value = valorAtual2 + 6;
     }
     else if(valorAtual2 === 10){
      document.getElementById("quantidadeM1").value = valorAtual2 + 10;
   }
        
    }
  
    function menosMR(){
      var valorAnterior = document.getElementById("quantidadeM").value;
  
      var valorAnterior2 = document.getElementById("quantidadeM1").value;
      
      
      var valorAtual = parseInt(valorAnterior);
  
      var valorAtual2 = parseInt(valorAnterior2);
  
     if(valorAtual > 1){
        document.getElementById("quantidadeM").value = valorAtual - 1;
     }
     if(valorAtual2 === 12){
        document.getElementById("quantidadeM1").value = valorAtual2 - 6;
     }
     else if(valorAtual2 === 20){
      document.getElementById("quantidadeM1").value = valorAtual2 - 10;
   }
        
    }

  /*FIM SUCO DE MARACUJÁ*/

  /*INICIO REFRI LATA*/

  /*FIM SUCO REFRI LATA*/

  /*INICIO REFRI 

/*INICIO CORONA*/
let itemc = "CORONA LONG-NECK, ";
function receberC(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('ccorona2').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        itemc = itemc.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!itemc.includes(item + ", ")) {
            itemc += item + ", ";
        }
    }

   let total = document.getElementById("ccorona2").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + itemc  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosCR(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'CORONA LONK-NECK <strong>R$</strong> 11';
    }
    var obs_corona = document.getElementById("mensagemC").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('coronaa').style.display = 'none';

    if(obs_corona!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_corona; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }



    function maisCR(){
        let valorAnterior = document.getElementById("ccorona");
  
        let valorAnterior2 = document.getElementById("ccorona2");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("ccorona").value = valorAtual;
       }
       if(valorAtual2 === 11){
          document.getElementById("ccorona2").value = valorAtual2 + 11;
       }
          
      }

      function menosCR(){
        var valorAnterior = document.getElementById("ccorona").value;
  
        var valorAnterior2 = document.getElementById("ccorona2").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("ccorona").value = valorAtual - 1;
       }
       if(valorAtual2 === 22){
          document.getElementById("ccorona2").value = valorAtual2 - 11;
       }
          
      }
       
/*FIM CORONA */

/*INICIO BUDWISWE */

let itemB = "BUDWISER LONG-NECK, ";
function receberBW(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('quantidadeB1').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        itemB = itemB.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!itemB.includes(item + ", ")) {
            itemB += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeB1").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + itemB  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosBW(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'BUDWISER LONK-NECK <strong>R$</strong> 11';
    }
    var obs_BUD = document.getElementById("mensagemB").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('budwiserr').style.display = 'none';

    if(obs_BUD!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_BUD; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }



    function maisBW(){
        let valorAnterior = document.getElementById("quantidadeB");
  
        let valorAnterior2 = document.getElementById("quantidadeB1");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("quantidadeB").value = valorAtual;
       }
       if(valorAtual2 === 11){
          document.getElementById("quantidadeB1").value = valorAtual2 + 11;
       }
          
      }

      function menosBW(){
        var valorAnterior = document.getElementById("quantidadeB").value;
  
        var valorAnterior2 = document.getElementById("quantidadeB1").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("quantidadeB").value = valorAtual - 1;
       }
       if(valorAtual2 === 22){
          document.getElementById("quantidadeB1").value = valorAtual2 - 11;
       }
          
      }

/*FIM BUDWISWE */

/*INICIO LITRINHO */

let itemli = "CERVEJA LITRINHO, ";
function receberCL(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('quantidadeCL1').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        itemli = itemli.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!itemli.includes(item + ", ")) {
            itemli += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeCL1").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + itemli  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosCL(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'CERVEJA LITRINHO <strong>R$</strong> 6';
    }
    var obs_CL = document.getElementById("mensagemCL").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('litrinho').style.display = 'none';

    if(obs_CL!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_CL; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }



    function maisCL(){
        let valorAnterior = document.getElementById("quantidadeCL");
  
        let valorAnterior2 = document.getElementById("quantidadeCL1");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("quantidadeCL").value = valorAtual;
       }
       if(valorAtual2 === 6){
          document.getElementById("quantidadeCL1").value = valorAtual2 + 6;
       }
          
      }

      function menosCL(){
        var valorAnterior = document.getElementById("quantidadeCL").value;
  
        var valorAnterior2 = document.getElementById("quantidadeCL1").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("quantidadeCL").value = valorAtual - 1;
       }
       if(valorAtual2 === 12){
          document.getElementById("quantidadeCL1").value = valorAtual2 - 6;
       }
          
      }


/*FIM LITRINHO */


/*INICIO HEINECKEN */

let itemHI = "HINECKEN LONG-NECK, ";
function receberHY(valor, item, checkb){

    let valorC1 = parseInt(valor);

    let valorC2 = document.getElementById('quantidadeH1').value;
    valorC2 = parseInt(valorC2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valorC2 -= valorC1;
        itemHI = itemHI.replace(item + ", ", "");
    }
    else{
        valorC2 += valorC1;
        if (!itemHI.includes(item + ", ")) {
            itemHI += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeH1").value = valorC2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + itemHI + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosHY(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'HINECKEN LONG-NECK, <strong>R$</strong> 12';
    }
    var obs_HY = document.getElementById("mensagemH").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('heineckenn').style.display = 'none';

    if(obs_HY!== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_HY; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }



    function maisHY(){
        let valorAnterior = document.getElementById("quantidadeH");
  
        let valorAnterior2 = document.getElementById("quantidadeH1");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("quantidadeH").value = valorAtual;
       }
       if(valorAtual2 === 12){
          document.getElementById("quantidadeH1").value = valorAtual2 + 12;
       }
          
      }

      function menosHY(){
        var valorAnterior = document.getElementById("quantidadeH").value;
  
        var valorAnterior2 = document.getElementById("quantidadeH1").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("quantidadeH").value = valorAtual - 1;
       }
       if(valorAtual2 === 24){
          document.getElementById("quantidadeH1").value = valorAtual2 - 12;
       }
          
      }

/*FIM HEINECKEN */

/*INICIO 1L*/

let item1L = "REFRI 1 LITRO, ";
function receber1L(valor, item, checkb){

    let valor1L1 = parseInt(valor);

    let valor1L2 = document.getElementById('quantidade1L').value;
    valor1L2 = parseInt(valor1L2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valor1L2 -= valor1L1;
        item1L = item1L.replace(item + ", ", "");
    }
    else{
        valor1L2 += valor1L1;
        if (!item1L.includes(item + ", ")) {
            item1L += item + ", ";
        }
    }

   let total = document.getElementById("quantidade1L").value = valor1L2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + item1L  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidos1L(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'REFRI 1 LITRO <strong>R$</strong> 10';
    }
    var obs_1L = document.getElementById("mensagem1l").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('refr1l').style.display = 'none';

    if(obs_1L !== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_1L; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }

    function mais1L(){
        let valorAnterior = document.getElementById("quantidade1l");
  
        let valorAnterior2 = document.getElementById("quantidade1L");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("quantidade1l").value = valorAtual;
       }
       if(valorAtual2 === 10){
          document.getElementById("quantidade1L").value = valorAtual2 + 10;
       }
          
      }

      function menos1L(){
        var valorAnterior = document.getElementById("quantidade1l").value;
  
        var valorAnterior2 = document.getElementById("quantidade1L").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("quantidade1l").value = valorAtual - 1;
       }
       if(valorAtual2 === 20){
          document.getElementById("quantidade1L").value = valorAtual2 - 10;
       }
          
      }

    /*FIM 1L */

  /*INICIO REFRI LATA*/

  let itemLATA = "REFRI LATA, ";
function receberLTA(valor, item, checkb){

    let valor1 = parseInt(valor);

    let valor2 = document.getElementById('quantidadeAL').value;
    valor2 = parseInt(valor2);

    let checkbox = document.getElementById(checkb);
    if(!checkbox.checked){
        valor2 -= valor1;
        itemLATA = itemLATA.replace(item + ", ", "");
    }
    else{
        valor2 += valor1;
        if (!itemLATA.includes(item + ", ")) {
            itemLATA += item + ", ";
        }
    }

   let total = document.getElementById("quantidadeAL").value = valor2;
   document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
    + itemLATA  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;

  } 

  function irpedidosLTA(){
    var vazio = document.getElementById("pedidos");
    if(vazio.textContent === "Pedido vazio!"){
        vazio.innerHTML = 'REFRI LATA <strong>R$</strong> 6';
    }
    var obs_Lata = document.getElementById("mensagemLA").value;

    document.getElementById("pedid").style.display = 'block';
    document.getElementById('lata').style.display = 'none';

    if(obs_Lata !== ""){
        document.getElementById('obs').innerHTML = "Obs: " +  obs_Lata; 
    }
    else{
        document.getElementById('obs').style.display = 'none';
    } 

  }

    function maisLTA(){
        let valorAnterior = document.getElementById("quantidadeLA");
  
        let valorAnterior2 = document.getElementById("quantidadeAL");
        
        
        let valorAtual = parseInt(valorAnterior.value);
  
        let valorAtual2 = parseInt(valorAnterior2.value);
  
       if(valorAtual < 2){
          valorAtual += 1
          document.getElementById("quantidadeLA").value = valorAtual;
       }
       if(valorAtual2 === 6){
          document.getElementById("quantidadeAL").value = valorAtual2 + 6;
       }
          
      }

      function menosLTA(){
        var valorAnterior = document.getElementById("quantidadeLA").value;
  
        var valorAnterior2 = document.getElementById("quantidadeAL").value;
        
        
        var valorAtual = parseInt(valorAnterior);
  
        var valorAtual2 = parseInt(valorAnterior2);
  
       if(valorAtual > 1){
          document.getElementById("quantidadeLA").value = valorAtual - 1;
       }
       if(valorAtual2 === 12){
          document.getElementById("quantidadeAL").value = valorAtual2 - 6;
       }
          
      }

  /*FIM REFRI LATA*/

  /*INICIO REFRI 2L*/

  let itemDOISL = "REFRI 2 LITROS, ";
  function receber2LT(valor, item, checkb){
  
      let valor1 = parseInt(valor);
  
      let valor2 = document.getElementById('quantidade2R').value;
      valor2 = parseInt(valor2);
  
      let checkbox = document.getElementById(checkb);
      if(!checkbox.checked){
          valor2 -= valor1;
          itemDOISL = itemDOISL.replace(item + ", ", "");
      }
      else{
          valor2 += valor1;
          if (!itemDOISL.includes(item + ", ")) {
            itemDOISL+= item + ", ";
          }
      }
  
     let total = document.getElementById("quantidade2R").value = valor2;
     document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
      + itemDOISL  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
  
    } 
  
    function irpedidos2LT(){
      var vazio = document.getElementById("pedidos");
      if(vazio.textContent === "Pedido vazio!"){
          vazio.innerHTML = 'REFRI 2 LITROS <strong>R$</strong> 20';
      }
      var obs_R2 = document.getElementById("mensagemR2").value;
  
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('refr2l').style.display = 'none';
  
      if(obs_R2 !== ""){
          document.getElementById('obs').innerHTML = "Obs: " +  obs_R2; 
      }
      else{
          document.getElementById('obs').style.display = 'none';
      } 
  
    }
  
      function mais2LT(){
          let valorAnterior = document.getElementById("quantidadeR2");
    
          let valorAnterior2 = document.getElementById("quantidade2R");
          
          
          let valorAtual = parseInt(valorAnterior.value);
    
          let valorAtual2 = parseInt(valorAnterior2.value);
    
         if(valorAtual < 2){
            valorAtual += 1
            document.getElementById("quantidadeR2").value = valorAtual;
         }
         if(valorAtual2 === 20){
            document.getElementById("quantidade2R").value = valorAtual2 + 20;
         }
            
        }
  
        function menos2LT(){
          var valorAnterior = document.getElementById("quantidadeR2").value;
    
          var valorAnterior2 = document.getElementById("quantidade2R").value;
          
          
          var valorAtual = parseInt(valorAnterior);
    
          var valorAtual2 = parseInt(valorAnterior2);
    
         if(valorAtual > 1){
            document.getElementById("quantidadeR2").value = valorAtual - 1;
         }
         if(valorAtual2 === 40){
            document.getElementById("quantidade2R").value = valorAtual2 - 20;
         }
            
        }

  /*FIM REFRI 2L*/

  /*INICIO RED BULL*/

  
  let itemrb = "RED BULL ENERGETICO, ";
  function receberRB(valor, item, checkb){
  
      let valor1 = parseInt(valor);
  
      let valor2 = document.getElementById('quantidadeRd').value;
      valor2 = parseInt(valor2);
  
      let checkbox = document.getElementById(checkb);
      if(!checkbox.checked){
          valor2 -= valor1;
          itemrb = itemrb.replace(item + ", ", "");
      }
      else{
          valor2 += valor1;
          if (!itemrb.includes(item + ", ")) {
            itemrb+= item + ", ";
          }
      }
  
     let total = document.getElementById("quantidadeRd").value = valor2;
     document.getElementById("pedidos").innerHTML = "<strong>BEBIDAS</strong>: <br> "
      + itemrb  + "<strong><br>VALOR TOTAL:</strong><br> <strong>R$</strong>  " + total;
  
    } 
  
    function irpedidosRB(){
      var vazio = document.getElementById("pedidos");
      if(vazio.textContent === "Pedido vazio!"){
          vazio.innerHTML = 'RED BULL ENERGETICO <strong>R$</strong> 15';
      }
      var obs_Rb = document.getElementById("mensagemRD").value;
  
      document.getElementById("pedid").style.display = 'block';
      document.getElementById('redb').style.display = 'none';
  
      if(obs_Rb !== ""){
          document.getElementById('obs').innerHTML = "Obs: " +  obs_Rb; 
      }
      else{
          document.getElementById('obs').style.display = 'none';
      } 
  
    }
  
      function maisRB(){
          let valorAnterior = document.getElementById("quantidadeRD");
    
          let valorAnterior2 = document.getElementById("quantidadeRd");
          
          
          let valorAtual = parseInt(valorAnterior.value);
    
          let valorAtual2 = parseInt(valorAnterior2.value);
    
         if(valorAtual < 2){
            valorAtual += 1
            document.getElementById("quantidadeRD").value = valorAtual;
         }
         if(valorAtual2 === 15){
            document.getElementById("quantidadeRd").value = valorAtual2 + 15;
         }
            
        }
  
        function menosRB(){
          var valorAnterior = document.getElementById("quantidadeRD").value;
    
          var valorAnterior2 = document.getElementById("quantidadeRd").value;
          
          
          var valorAtual = parseInt(valorAnterior);
    
          var valorAtual2 = parseInt(valorAnterior2);
    
         if(valorAtual > 1){
            document.getElementById("quantidadeRD").value = valorAtual - 1;
         }
         if(valorAtual2 === 30){
            document.getElementById("quantidadeRd").value = valorAtual2 - 15;
         }
            
        }

  
  /*FIM RED BULL*/




      
        
      
      
 
   var pedido = document.getElementById('pedidos');
   var apagar = document.getElementById("excl");
   var confirmar = document.getElementById("conf");
   var fecharP = document.getElementById("fecharP");
   var endr = document.getElementById('endr');
   var pedid = document.getElementById('pedid');
   var irEndereco = document.getElementById('irEnde');
   var obsquatroQ = document.getElementById('obs');
   var lupa =document.getElementById('lupa');
   var bsuca = document.getElementById('busca');
   var contato = document.getElementById('ctt');
   var whats = document.getElementById('wapp');
   var meuspedidos = document.getElementById("sabor_valor");
   var observ = document.getElementById('obs');
   var inserirEndereco = document.getElementById('inserirE');
   var irpagamento = document.getElementById('irPagamento');
   var dadosEntrega = document.getElementById('entreg');
   var pagamento = document.getElementById('pagamento');
   var finalizar = document.getElementById('fimm');
   var cartao = document.getElementById('cartao');
   var dinheiro = document.getElementById('dinheiro');
   var formaP = document.getElementById('pag');
   var troco = document.getElementById('troco');
   var retirar = document.getElementById('Retirar');
   var consumir = document.getElementById('Consumir');
   var identificar = document.getElementById('nc');
   var nomeC = document.getElementById('nomeC');
   var fim2 = document.getElementById('fimm2');

   retirar.onclick = function(){
    identificar.style.display = 'block';
    endr.style.display = 'none';
   }

   consumir.onclick = function(){
    identificar.style.display = 'block';
    endr.style.display = 'none';
   }

   fim2.onclick = function(event){
    event.preventDefault();
    
    if(retirar.id === 'Retirar'){
        dadosEntrega.innerHTML = '<strong>Forma de entrega:</strong> Retirar no local.<br> <strong>Cliente:</strong> ' + nomeC.value;
    }

    else if(consumir.id === 'Consumir'){
        dadosEntrega.innerHTML = '<strong>Forma de entrega:</strong>  Consumir no local. <strong>Cliente:</strong>  ' + nomeC.value;
    }
    identificar.style.display = 'none';

   }

   finalizar.onclick = function(event){
    event.preventDefault();
    if(cartao.checked === true){
        formaP.innerHTML = '<strong>Forma de pagamento:</strong> Cartão';

    }
    else if(dinheiro.checked === true){
        formaP.innerHTML = '<strong>Forma de pagamento:</strong> Dinheiro.<br> <strong>Troco:</strong> ' + troco.value;
    }

      pagamento.style.display = 'none';
   }

   irpagamento.onclick = function(){
    dadosEntrega.innerHTML = '<strong>Endereco para entrega:</strong> ' + inserirEndereco.value;
    pagamento.style.display = 'block';
    endr.style.display = 'none';

   }

   contato.onclick = function(){
    if(whats.style.display === 'none'){
        whats.style.display = 'block';
    }
    else{
        whats.style.display = 'none';
    }
   }

   lupa.onclick = function(){
    if(bsuca.style.display === 'none'){
        bsuca.style.display = 'block';
    }
    else{
        bsuca.style.display = 'none';
    }

   }

   apagar.onclick = function() {
      if (pedido.innerHTML === 'Erro! Você está sem pedidos' || pedido.innerHTML === 'Pedido confirmado!' || pedido.innerHTML === 'Pedido vazio!' || pedido.innerHTML === 'Erro ao confirmar! Você está sem pedidos') {
         pedido.innerHTML === 'Erro! Você está sem pedidos';
      } else {
          pedido.innerHTML = "Pedido vazio!";
          document.getElementById('obs').style.display = 'none';
          document.getElementById('andamento').style.display = 'none';
      }
  };
  
  confirmar.onclick = function() {
      if ( pedido.innerHTML === 'Erro! Você está sem pedidos' || pedido.innerHTML === 'Pedido confirmado!' || pedido.innerHTML === 'Pedido vazio!' || pedido.innerHTML === 'Erro ao confirmar! Você está sem pedidos') {
          pedido.innerHTML = 'Erro ao confirmar! Você está sem pedidos';
      } else {
          irEndereco.style.display='block';
          obsquatroQ.style.display = 'none';
          meuspedidos.innerHTML = pedido.innerText + '<br>' + observ.innerText + '<br>';
          pedido.innerHTML = 'Pedido confirmado!';
          document.getElementById('btEeC').style.display = 'none';
          document.getElementById('andamento').style.display = 'none';


          
      }
  };
  
  fecharP.onclick = function() {
      pedid.style.display = 'none';
      location.reload();
  };
  
  pedid.onclick = function(event) {
      if (event.target === pedid) {
          pedid.style.display = 'none';
      }
  };

  irEndereco.onclick = function(){
    endr.style.display = 'block';
    pedid.style.display='none';

  };
  
 
 
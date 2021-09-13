function consultaCep(){
    var cep = document.getElementById("digitaCep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
           $("#uf").html("UF: " + response.uf)
           $("#localidade").html("Cidade: " + response.localidade)
           $("#logradouro").html("Rua: " + response.logradouro)
           $("#bairro").html("Bairro: " + response.bairro)
           var estado = response.uf;
            document.getElementById("bandeira").style.display = "inline";
            document.getElementById("bandeira").src = estado+".jpg";
        }
    })
}




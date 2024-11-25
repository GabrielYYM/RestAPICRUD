(function(){
    const formAdd = document.getElementById("formadd");
    formAdd.addEventListener("submit", addAnimal);

    async function addAnimal(evt){
        evt.preventDefault();

        const formData = new FormData(formAdd);
        const product = Object.fromEntries(formData);
        const url = "http://localhost:8080/animal/add";
        const option = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        const result = await fetch(url, option);
        if(result.status === 201){
            clearTextFields();
            alert('Cadastrado com sucesso');
        }
        else{
            alert('Erro ao cadastrar');
        }
    }

    function clearTextFields(){
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("especie").value = "";
        document.getElementById("raca").value = "";
        document.getElementById("sexo").value = "";
        document.getElementById("coloracao").value = "";
        document.getElementById("saude").value = "";
        document.getElementById("data_entrada").value = "";
        document.getElementById("peso").value = "";
    }
})()

(function(){
    function clearLoading(){
        document.getElementById("loading").style.display = "none";
    }

    function showAnimals(animals){
        const animalsTable = document.getElementById("animals");
        animalsTable.innerHTML = "";

        for(let animal of animals){
            const tab = document.createElement("tr");

            const td = document.createElement("td");
            td.className = "p-2 border-2 border-black text-center";

            const tdId = td.cloneNode(true);
            tdId.innerText = animal.id;
            const tdNome = td.cloneNode(true);
            tdNome.innerText = animal.nome;
            const tdIdade = td.cloneNode(true);
            tdIdade.innerText = animal.idade;
            const tdEspecie = td.cloneNode(true);
            tdEspecie.innerText = animal.especie;
            const tdRaca = td.cloneNode(true);
            tdRaca.innerText = animal.raca;
            const tdSexo = td.cloneNode(true);
            tdSexo.innerText = animal.sexo;
            const tdColoracao = td.cloneNode(true);
            tdColoracao.innerText = animal.coloracao;
            const tdSaude = td.cloneNode(true);
            tdSaude.innerText = animal.saude;
            const tdData = td.cloneNode(true);
            tdData.innerText = animal.data_entrada;
            const tdPeso = td.cloneNode(true);
            tdPeso.innerText = animal.peso;

            const tdEdit = td.cloneNode(true);
            tdEdit.innerHTML = '<i width="18" data-feather="edit-2" class="cursor-pointer"></i>';
            tdEdit.onclick = () => editAnimal(animal);

            const tdTrash = td.cloneNode(true);
            tdTrash.innerHTML = '<i width="18" data-feather="trash-2" class="cursor-pointer"></i>';
            tdTrash.onclick = () => deleteAnimal(animal.id);

            tab.appendChild(tdId);
            tab.appendChild(tdNome);
            tab.appendChild(tdIdade);
            tab.appendChild(tdEspecie);
            tab.appendChild(tdRaca);
            tab.appendChild(tdSexo);
            tab.appendChild(tdColoracao);
            tab.appendChild(tdSaude);
            tab.appendChild(tdData);
            tab.appendChild(tdPeso);
            tab.appendChild(tdEdit);
            tab.appendChild(tdTrash);

            animalsTable.appendChild(tab);
        }
        feather.replace();
    }

    async function listAllAnimals(){
        const url = "http://localhost:8080/animal/listall";
        try {
            const dados = await fetch(url, { method: "GET" });
            if (dados.status === 200) {
                const animals = await dados.json();
                if (animals) {
                    clearLoading();
                    showAnimals(animals);
                }
            } else {
                console.error("Erro ao buscar animais: " + dados.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    listAllAnimals();

//update modal
function openModal() {
    const modal = document.getElementById('formModal');
    modal.style.display = 'flex';

}


function clearForm() {
    document.getElementById('editForm').reset();
}

function editAnimal(animal) {
    document.getElementById("id").value = animal.id;
    document.getElementById("nome").value = animal.nome;
    document.getElementById("idade").value = animal.idade;
    document.getElementById("especie").value = animal.especie;
    document.getElementById("raca").value = animal.raca;
    document.getElementById("sexo").value = animal.sexo;
    document.getElementById("coloracao").value = animal.coloracao;
    document.getElementById("saude").value = animal.saude;
    document.getElementById("peso").value = animal.peso;

    openModal();
}

async function updateAnimal(animalData) {
        const url = "http://localhost:8080/animal/update";
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(animalData)
            });

            if (response.ok) {
                alert("Animal atualizado com sucesso!");
                listAllAnimals();
                const formModal = document.getElementById("formModal");
                if (formModal) {
                    formModal.style.display = "none";
                }
            } else {
                alert("Erro ao atualizar animal!");
            }
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            alert("Erro ao atualizar animal!");
        }
    }

        const editForm = document.getElementById("editForm");
        if (editForm) {
            editForm.onsubmit = async (e) => {
                e.preventDefault();
                const formData = new FormData(editForm);
                const animalData = Object.fromEntries(formData);
                console.log(animalData);
                await updateAnimal(animalData);
            };
        }

    //delete
    async function deleteAnimal(id) {
        if (!confirm("Tem certeza que deseja deletar este animal?")) {
            return;
        }

        const url = `http://localhost:8080/animal/delete/${id}`;
        try {
            const response = await fetch(url, {
                method: "DELETE"
            });

            if (response.ok) {
                listAllAnimals();
            } else {
                alert("Erro ao deletar animal!");
            }
        } catch (error) {
            console.error("Erro ao deletar:", error);
            alert("Erro ao deletar animal!");
        }
    }
    /*byId

    async function findById() {
      const id = document.getElementById('searchId').value;
      const searchResult = document.getElementById('searchResult');
      const searchResultBody = document.getElementById('searchResultBody');
      const errorMessage = document.getElementById('errorMessage');

      if (!id) {
        errorMessage.textContent = 'Por favor, digite um ID válido';
        errorMessage.classList.remove('hidden');
        searchResult.classList.add('hidden');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/list/{id}`);

        if (!response.ok) {
          if (response.status === 404) {
            errorMessage.textContent = 'Animal não encontrado';
          } else {
            errorMessage.textContent = 'Erro ao buscar animal';
          }
          return;
        }
    */

})();



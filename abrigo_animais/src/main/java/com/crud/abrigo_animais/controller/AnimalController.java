package com.crud.abrigo_animais.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.crud.abrigo_animais.entity.Animal;
import com.crud.abrigo_animais.service.AnimalService;

import java.util.List;

@RestController
@RequestMapping("/animal")
public class AnimalController {

    @Autowired
    AnimalService animalService;

    //retorna todos os animais
    @GetMapping("/listall")
    public ResponseEntity<List<Animal>> getAllAnimal() {
        List<Animal> animals = animalService.getAllAnimalService();
        return ResponseEntity.ok(animals);
    }

    //retorna o animal do id fornecido
    @GetMapping("/list/{id}")
    public ResponseEntity<Animal> getAnimalService(@PathVariable Integer id) {
        var animal = animalService.getAnimalService(id);
        if (animal.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(animal.get());
    }

    //adiciona um animal na bd
    @PostMapping("/add")
    public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal) {
        Animal newAnimal = animalService.insertAnimalService(animal);
        return new ResponseEntity<>(newAnimal, HttpStatus.CREATED);
    }

    //atualiza um animal na bd
    @PutMapping("/update")
    public ResponseEntity<Animal> updateAnimal(@RequestBody Animal animal) {
        Animal updateAnimal = animalService.updateAnimalService(animal);
        return ResponseEntity.ok(updateAnimal);
    }

    //deleta os dados do animal pelo id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Animal> deleteAnimal(@PathVariable int id) {
        animalService.deleteAnimalService(id);
        return ResponseEntity.noContent().build();
    }
}

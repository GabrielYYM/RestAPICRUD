package com.crud.abrigo_animais.service;

import com.crud.abrigo_animais.entity.Animal;
import com.crud.abrigo_animais.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalService {
    @Autowired
    AnimalRepository animalRepository;

    public List<Animal> getAllAnimalService(){
        List<Animal> animals = animalRepository.findAll();
        return animals;
    }

    public Optional<Animal> getAnimalService(int id){
        return animalRepository.findById(id);
    }

    public Animal insertAnimalService(Animal animal){
        return animalRepository.save(animal);
    }

    public Animal updateAnimalService(Animal animal){
        Animal updateAnimal = animalRepository.findById(animal.getId()).get();
        updateAnimal = animal;
        return animalRepository.save(animal);
    }
    public void deleteAnimalService(int id){
        animalRepository.deleteById(id);
    }
}

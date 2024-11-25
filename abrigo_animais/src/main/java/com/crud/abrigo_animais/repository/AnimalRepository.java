package com.crud.abrigo_animais.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.crud.abrigo_animais.entity.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{

}
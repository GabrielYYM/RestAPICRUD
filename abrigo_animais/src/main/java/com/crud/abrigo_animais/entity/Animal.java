package com.crud.abrigo_animais.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "animal")

public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column (name = "nome")
    private String nome;
    @Column (name = "idade")
    private int idade;
    @Column (name = "especie")
    private String especie;
    @Column (name = "raca")
    private String raca;
    @Column (name = "sexo")
    private String sexo;
    @Column (name = "coloracao")
    private String coloracao;
    @Column (name = "saude")
    private String saude;
    @Column (name = "data_entrada")
    private Date data_entrada;
    @Column (name = "peso")
    private float peso;
}
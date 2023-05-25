package com.stepuro.fitness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "products", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private long product_id;
    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "name")
    private String name;

    @Column(name = "cost")
    private long cost;

    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = {CascadeType.REMOVE, CascadeType.MERGE})
    private List<CartItem> cartItems;

}

package com.stepuro.pc.accessories.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ram", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Ram {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ram_id")
    private long ramId;

    @Column(name = "type")
    private String type;

    @Column(name = "timings")
    private String timings;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "frequency")
    private int frequency;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;
}

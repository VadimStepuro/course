package com.stepuro.pc.accessories.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "processor", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Processor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "processor_id")
    private long processorId;

    @Column(name = "cors")
    private int cors;

    @Column(name = "frequency")
    private int frequency;

    @Column(name = "cache")
    private int cache;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;
}

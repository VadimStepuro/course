package com.stepuro.pc.accessories.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(schema = "public", name = "videocards")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Videocard {
    @Column(name = "videocard_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long videocardId;

    @Column(name = "performance")
    private double performance;

    @Column(name = "frequency")
    private int frequency;

    @Column(name = "cors")
    private int cors;

    @Column(name = "memory_type")
    private String memoryType;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;
}

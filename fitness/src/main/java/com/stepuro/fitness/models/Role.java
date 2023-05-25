package com.stepuro.fitness.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private long roleId;

    @Column(name = "name")
    private String name;
}

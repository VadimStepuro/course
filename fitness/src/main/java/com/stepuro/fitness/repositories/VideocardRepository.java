package com.stepuro.fitness.repositories;

import com.stepuro.fitness.models.Videocard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideocardRepository extends JpaRepository<Videocard, Long> {
    List<Videocard> findAll();
}

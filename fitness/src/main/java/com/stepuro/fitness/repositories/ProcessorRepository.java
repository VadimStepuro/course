package com.stepuro.fitness.repositories;

import com.stepuro.fitness.models.Processor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProcessorRepository extends JpaRepository<Processor, Long> {
    List<Processor> findAll();
}

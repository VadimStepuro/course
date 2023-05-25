package com.stepuro.fitness.repositories;

import com.stepuro.fitness.models.Ram;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RamRepository extends JpaRepository<Ram, Long> {
    List<Ram> findAll();
}

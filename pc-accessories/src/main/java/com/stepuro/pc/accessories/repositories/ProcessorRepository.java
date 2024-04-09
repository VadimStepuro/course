package com.stepuro.pc.accessories.repositories;

import com.stepuro.pc.accessories.models.Processor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProcessorRepository extends JpaRepository<Processor, Long> {
    List<Processor> findAll();
}

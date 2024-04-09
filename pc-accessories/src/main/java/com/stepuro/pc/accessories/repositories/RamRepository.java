package com.stepuro.pc.accessories.repositories;

import com.stepuro.pc.accessories.models.Ram;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RamRepository extends JpaRepository<Ram, Long> {
    List<Ram> findAll();
}

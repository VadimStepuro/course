package com.stepuro.pc.accessories.repositories;

import com.stepuro.pc.accessories.models.Videocard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideocardRepository extends JpaRepository<Videocard, Long> {
    List<Videocard> findAll();
}

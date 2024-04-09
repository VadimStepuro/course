package com.stepuro.pc.accessories.repositories;

import com.stepuro.pc.accessories.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByName(String name);
    List<Product> findAll();
}

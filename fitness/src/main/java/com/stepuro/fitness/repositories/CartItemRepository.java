package com.stepuro.fitness.repositories;

import com.stepuro.fitness.models.CartItem;
import com.stepuro.fitness.models.Product;
import com.stepuro.fitness.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findAll();

    List<CartItem> findAllByUser(User user);

    Optional<CartItem> findByUserAndProduct(User user, Product product);
}

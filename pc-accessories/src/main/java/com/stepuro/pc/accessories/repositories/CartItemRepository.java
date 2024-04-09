package com.stepuro.pc.accessories.repositories;

import com.stepuro.pc.accessories.models.CartItem;
import com.stepuro.pc.accessories.models.Product;
import com.stepuro.pc.accessories.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findAll();

    List<CartItem> findAllByUser(User user);

    Optional<CartItem> findByUserAndProduct(User user, Product product);
}

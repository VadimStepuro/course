package com.stepuro.fitness.api;

import com.stepuro.fitness.models.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemDto {
    private long itemId;
    private UserDto user;
    private Product product;

    private int quantity;
}


package com.stepuro.pc.accessories.api;

import com.stepuro.pc.accessories.models.Product;
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


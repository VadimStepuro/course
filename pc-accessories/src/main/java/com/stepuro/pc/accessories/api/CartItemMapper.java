package com.stepuro.pc.accessories.api;

import com.stepuro.pc.accessories.models.CartItem;

public class CartItemMapper {
    public static CartItem dtoToItem(CartItemDto dto){
        return CartItem.builder()
                .itemId(dto.getItemId())
                .user(UserMapper.dtoToUser(dto.getUser()))
                .product(dto.getProduct())
                .quantity(dto.getQuantity())
                .build();
    }

    public static CartItemDto itemToDto(CartItem item){
        return CartItemDto.builder()
                .itemId(item.getItemId())
                .product(item.getProduct())
                .user(UserMapper.userToDto(item.getUser()))
                .quantity(item.getQuantity())
                .build();
    }
}

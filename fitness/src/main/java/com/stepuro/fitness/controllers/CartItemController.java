package com.stepuro.fitness.controllers;

import com.stepuro.fitness.api.CartItemDto;
import com.stepuro.fitness.api.CartItemMapper;
import com.stepuro.fitness.models.CartItem;
import com.stepuro.fitness.models.User;
import com.stepuro.fitness.service.CartItemService;
import com.stepuro.fitness.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/cartItems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private UserService userService;

    @GetMapping("/getCart")
    public List<CartItemDto> getAll(Principal principal){
        User user = userService.getUserByLogin(principal.getName());
        return cartItemService
                .getUsersCart(user)
                .stream()
                .map(CartItemMapper::itemToDto)
                .toList();
    }

    @PostMapping("/add")
    public CartItemDto add(@RequestBody CartItem cartItem, Principal principal){

        User user = userService.getUserByLogin(principal.getName());
        return CartItemMapper.itemToDto(cartItemService.addCartItemUsers(cartItem, user));
    }

    @PutMapping("/edit")
    public ResponseEntity<CartItemDto> edit(@RequestBody CartItem cartItem, Principal principal){
        User user = userService.getUserByLogin(principal.getName());

        CartItem cartItem1 = cartItemService.editUsers(cartItem, user);
        if(cartItem1 == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(CartItemMapper.itemToDto(cartItem1));
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id, Principal principal){
        User user = userService.getUserByLogin(principal.getName());
        cartItemService.deleteUsers(id, user);
    }
}


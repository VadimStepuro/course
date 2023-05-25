package com.stepuro.fitness.service;

import com.stepuro.fitness.models.CartItem;
import com.stepuro.fitness.models.User;
import com.stepuro.fitness.repositories.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    public List<CartItem> getUsersCart(User user){
        return cartItemRepository.findAllByUser(user);
    }

    public List<CartItem> getAll(){return cartItemRepository.findAll();}

    @Transactional
    public CartItem addCartItemUsers(CartItem cartItem, User user){
        Optional<CartItem> byUserAndProduct = cartItemRepository.findByUserAndProduct(user, cartItem.getProduct());
        if(byUserAndProduct.isEmpty()){
            cartItem.setUser(user);
            return cartItemRepository.save(cartItem);
        }
        else{
            CartItem item = byUserAndProduct.get();
            item.setQuantity(item.getQuantity() + cartItem.getQuantity());
            return cartItemRepository.save(item);
        }
    }

    @Transactional
    public CartItem addCartItem(CartItem cartItem){
        return cartItemRepository.save(cartItem);
    }

    @Transactional
    public CartItem editUsers(CartItem cartItem, User user){
        Optional<CartItem> byId = cartItemRepository.findById(cartItem.getItemId());
        if(byId.isEmpty())
            return null;

        CartItem item = byId.get();

        if(item.getUser().getUser_id() != user.getUser_id())
            return null;

        item.setProduct(cartItem.getProduct());
        item.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(item);
    }

    @Transactional
    public CartItem edit(CartItem cartItem){
        Optional<CartItem> byId = cartItemRepository.findById(cartItem.getItemId());
        if(byId.isEmpty())
            return null;

        CartItem item = byId.get();
        item.setProduct(cartItem.getProduct());
        item.setUser(cartItem.getUser());
        item.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(item);
    }

    @Transactional
    public void deleteUsers(long id, User user){
        Optional<CartItem> byId = cartItemRepository.findById(id);
        if(byId.isPresent()){
            CartItem item = byId.get();
            if(item.getUser().getUser_id() == user.getUser_id())
                cartItemRepository.deleteById(id);
        }
    }

    @Transactional
    public void delete(long id){
        cartItemRepository.deleteById(id);
    }

}

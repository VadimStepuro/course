package com.stepuro.pc.accessories.service;

import com.stepuro.pc.accessories.models.User;
import com.stepuro.pc.accessories.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getUserByLogin(String login){
        Optional<User> byLogin = userRepository.findByLogin(login);
        return byLogin.orElse(null);
    }

    @Transactional
    public User addUser(User user){
        return userRepository.save(user);
    }
}

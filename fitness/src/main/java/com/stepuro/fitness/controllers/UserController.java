package com.stepuro.fitness.controllers;

import com.stepuro.fitness.models.User;
import com.stepuro.fitness.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAll();
    }

    @GetMapping("/get")
    public User get(Principal principal){
        return userService.getUserByLogin(principal.getName());
    }

    @GetMapping("getByLogin/{login}")
    public ResponseEntity<User> getByLogin(@PathVariable String login){
        User userByLogin = userService.getUserByLogin(login);

        if(userByLogin != null)
            return new ResponseEntity<>(userByLogin, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }


}

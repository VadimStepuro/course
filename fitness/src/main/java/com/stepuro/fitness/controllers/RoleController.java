package com.stepuro.fitness.controllers;

import com.stepuro.fitness.models.Role;
import com.stepuro.fitness.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {
    @Autowired
    private RoleService roleService;
    @GetMapping("/getALl")
    public List<Role> getAll(){
        return roleService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        roleService.deleteRole(id);
    }

    @PostMapping("/add")
    public Role addRole(@RequestBody Role role){
        return roleService.addRole(role);
    }
    @PutMapping("/edit")
    public ResponseEntity<Role> edit(@RequestBody Role role){

        Role role1 = roleService.editRole(role);

        if(role1 == null){
            return ResponseEntity.notFound().build();
        }
        else return ResponseEntity.ok(role1);
    }
}

package com.stepuro.fitness.service;

import com.stepuro.fitness.models.Role;
import com.stepuro.fitness.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public List<Role> findAll(){
        return roleRepository.findAll();
    }

    public Role findById(long id){return roleRepository.findById(id).orElseThrow(() -> new NoSuchElementException("No such role id" + id));}


    public Role findByName(String name){return roleRepository.findByName(name).orElseThrow(() -> new NoSuchElementException("No such role name" + name));}


    public Role editRole(Role role){
        Optional<Role> byId = roleRepository.findById(role.getRoleId());
        if(byId.isPresent()) {
            Role role1 = byId.get();
            role1.setName(role.getName());
            return roleRepository.save(role1);
        }
        else return null;
    }

    public void deleteRole(long roleId){
        roleRepository.deleteById(roleId);
    }

    public Role addRole(Role role){
        return roleRepository.save(role);
    }
}

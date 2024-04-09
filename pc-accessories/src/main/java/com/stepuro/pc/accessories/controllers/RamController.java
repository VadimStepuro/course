package com.stepuro.pc.accessories.controllers;

import com.stepuro.pc.accessories.models.Ram;
import com.stepuro.pc.accessories.service.RamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ram")
public class RamController {
    @Autowired
    private RamService ramService;

    @GetMapping("/getAll")
    public List<Ram> getAll(){
        return ramService.getAll();
    }

    @PostMapping("/add")
    public Ram add(@RequestBody Ram ram){
        return ramService.add(ram);
    }

    @PutMapping("/edit")
    public ResponseEntity<Ram> edit(@RequestBody Ram ram){
        Ram edit = ramService.edit(ram);
        if(edit == null){
            return ResponseEntity.notFound().build();
        }
        else return ResponseEntity.ok(edit);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        ramService.delete(id);
    }
}

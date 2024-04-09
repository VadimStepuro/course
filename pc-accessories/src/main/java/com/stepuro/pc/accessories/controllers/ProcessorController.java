package com.stepuro.pc.accessories.controllers;

import com.stepuro.pc.accessories.models.Processor;
import com.stepuro.pc.accessories.service.ProcessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/processors")
public class ProcessorController {

    @Autowired
    private ProcessorService processorService;

    @GetMapping("/getAll")
    public List<Processor> getAll(){
        return processorService.getAll();
    }

    @PostMapping("/add")
    public Processor add(@RequestBody Processor processor){
        return processorService.add(processor);
    }

    @PutMapping("/edit")
    public ResponseEntity<Processor> edit(@RequestBody Processor processor){

        Processor edit = processorService.edit(processor);
        if (edit == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(edit);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        processorService.delete(id);
    }
}

package com.stepuro.pc.accessories.controllers;

import com.stepuro.pc.accessories.models.Videocard;
import com.stepuro.pc.accessories.service.VideocardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videocards")
public class VideocardController {
    @Autowired
    private VideocardService videocardService;

    @GetMapping("/getAll")
    public List<Videocard> getALl(){
        return videocardService.getAll();
    }

    @PostMapping("/add")
    public Videocard add(@RequestBody Videocard videocard){
        return videocardService.add(videocard);
    }

    @PutMapping("/edit")
    public ResponseEntity<Videocard> edit(@RequestBody Videocard videocard){

        Videocard edit = videocardService.edit(videocard);
        if(edit == null)
            return ResponseEntity.notFound().build();

        else return ResponseEntity.ok(edit);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        videocardService.delete(id);
    }
}

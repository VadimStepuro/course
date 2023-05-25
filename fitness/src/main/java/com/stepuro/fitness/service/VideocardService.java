package com.stepuro.fitness.service;

import com.stepuro.fitness.models.Processor;
import com.stepuro.fitness.models.Videocard;
import com.stepuro.fitness.repositories.VideocardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class VideocardService {
    @Autowired
    private VideocardRepository videocardRepository;

    public List<Videocard> getAll(){
        return videocardRepository.findAll();
    }

    @Transactional
    public Videocard edit(Videocard videocard){
        Optional<Videocard> byId = videocardRepository.findById(videocard.getVideocardId());
        if(byId.isPresent()){
            Videocard newVideocard = byId.get();
            newVideocard.setVideocardId(videocard.getVideocardId());
            newVideocard.setCors(videocard.getCors());
            newVideocard.setPerformance(videocard.getPerformance());
            newVideocard.setMemoryType(videocard.getMemoryType());
            newVideocard.setFrequency(videocard.getFrequency());
            newVideocard.setProduct(videocard.getProduct());
            return videocardRepository.save(newVideocard);
        }
        return null;
    }

    @Transactional
    public Videocard add(Videocard videocard){
        return videocardRepository.save(videocard);
    }

    @Transactional
    public void delete(long id){
        videocardRepository.deleteById(id);
    }
}

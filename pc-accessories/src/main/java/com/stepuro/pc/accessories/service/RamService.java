package com.stepuro.pc.accessories.service;

import com.stepuro.pc.accessories.models.Ram;
import com.stepuro.pc.accessories.repositories.RamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RamService {
    @Autowired
    private RamRepository ramRepository;

    public List<Ram> getAll(){
        return ramRepository.findAll();
    }

    @Transactional
    public Ram edit(Ram ram){
        Optional<Ram> byId = ramRepository.findById(ram.getRamId());
        if(byId.isPresent()){
            Ram newRam = byId.get();
            newRam.setRamId(ram.getRamId());
            newRam.setType(ram.getType());
            newRam.setCapacity(ram.getCapacity());
            newRam.setFrequency(ram.getFrequency());
            newRam.setTimings(ram.getTimings());
            newRam.setProduct(ram.getProduct());
            return ramRepository.save(newRam);
        }
        return null;
    }

    @Transactional
    public Ram add(Ram ram){
        return ramRepository.save(ram);
    }

    @Transactional
    public void delete(long id){
        ramRepository.deleteById(id);
    }

}

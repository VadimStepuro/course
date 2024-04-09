package com.stepuro.pc.accessories.service;

import com.stepuro.pc.accessories.models.Processor;
import com.stepuro.pc.accessories.repositories.ProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProcessorService {
    @Autowired
    private ProcessorRepository processorRepository;

    public List<Processor> getAll(){
        return processorRepository.findAll();
    }

    @Transactional
    public Processor edit(Processor processor1){
        Optional<Processor> byId = processorRepository.findById(processor1.getProcessorId());
        if(byId.isPresent()){
            Processor processor = byId.get();
            processor.setProcessorId(processor1.getProcessorId());
            processor.setCors(processor1.getCors());
            processor.setCache(processor1.getCache());
            processor.setFrequency(processor1.getFrequency());
            processor.setProduct(processor1.getProduct());
            return processorRepository.save(processor);
        }
        return null;
    }

    @Transactional
    public Processor add(Processor processor){
        return processorRepository.save(processor);
    }

    @Transactional
    public void delete(long id){processorRepository.deleteById(id);}
}

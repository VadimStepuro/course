package com.stepuro.pc.accessories.service;

import com.stepuro.pc.accessories.models.Product;
import com.stepuro.pc.accessories.repositories.ProductRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public List<Product> getPageOfSize(int size, int number){
        Pageable pageableOfSize = PageRequest.of(number, size);
        return productRepository.findAll(pageableOfSize).getContent();
    }

    @Transactional
    public Product addProduct(Product product)
    {
        return productRepository.save(product);
    }

    @Transactional
    public Product editProduct(Product newProduct){
        Optional<Product> byId = productRepository.findById(newProduct.getProduct_id());
        if(byId.isPresent()){
            Product product = byId.get();
            product.setName(newProduct.getName());
            product.setCost(newProduct.getCost());
            product.setManufacturer(newProduct.getManufacturer());
            return productRepository.save(product);
        }
        else return null;
    }
    @Transactional
    public void delete(long id){
        productRepository.deleteById(id);
    }
}

package com.stepuro.fitness.controllers;

import com.stepuro.fitness.models.Product;
import com.stepuro.fitness.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public List<Product> getAll(){
        return productService.getAll();
    }

    @GetMapping("/get/page/{number}/{size}")
    public List<Product> getPage(@PathVariable int number, @PathVariable int size){
        return productService.getPageOfSize(size, number);
    }

    @PostMapping(value = "/add")
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        productService.delete(id);
    }

    @PutMapping("/edit")
    public ResponseEntity<Product> edit(@RequestBody Product product){

        Product product1 = productService.editProduct(product);
        if(product1 == null){
            return ResponseEntity.notFound().build();
        }
        else return ResponseEntity.ok(product1);
    }
}

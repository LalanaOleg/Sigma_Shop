package com.example.command.controller;

import com.example.command.entity.Product;
import com.example.command.entity.ProductDto;
import com.example.command.mapper.ProductMapper;
import com.example.command.service.ProductService;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/products")
@RequiredArgsConstructor
public class ProductController {
    @Autowired

    // сервіс для роботи з бд
    private ProductService productService;

    // мапер для перетворення даних
    private final ProductMapper productMapper;

    // Додавання даних до бд
    @PostMapping("/add")
    public Product createProduct(@RequestBody ProductDto productDto) {
        Product product = productMapper.toProduct(productDto);
        return productService.saveProduct(product);
    }

    //пагінація для сторінки із всім товаром
    //треба доробити пошук за параметром
    //робочий приклад http://localhost:8080/api/products/shop?_page=2&_limit=3&_sort=someType
    @GetMapping("/shop")
    public ResponseEntity<Page<Product>> getAllWithPagination(@RequestParam(name = "_page") int _page,
                                                              @RequestParam(name = "_limit") int _limit,
                                                              @RequestParam(name = "_sort") String _sort){
        Page<Product> product = productService.productsPagination(_page,_limit);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }



    @GetMapping("/item/{productId}")
    public ResponseEntity<ProductDto> getById(@PathVariable String productId){

        Product product = productService.getById(productId);
        ProductDto productDto = productMapper.toProductDto(product);

        return new ResponseEntity<>(productDto,HttpStatus.OK);
    }

}

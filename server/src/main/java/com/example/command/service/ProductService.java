package com.example.command.service;

import com.example.command.entity.ProductDto;
import com.example.command.repository.ProductRepository;
import com.example.command.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Page<Product> productsPagination(int offset, int pageSize){
        Page<Product> productsPage = productRepository.findAll(PageRequest.of(offset, pageSize));
        return productsPage.map(this::convertToCustomProduct);
    }

    public Product getById(String id) {
        Product product = productRepository.findByProductId(id);
        return convertToItem(product);
    }

    // перетворення для окремого товару
    private Product convertToItem(Product product){
        Product customProduct = new Product();
        customProduct.setProductId(product.getProductId());
        customProduct.setProductName(product.getProductName());
        customProduct.setProductPrice(product.getProductPrice());
        customProduct.setProductDescription(product.getProductDescription());

        return customProduct;
    }


    // Перетворення до потрібного типу json для сторінки
    private Product convertToCustomProduct(Product product) {
        Product customProduct = new Product();
        customProduct.setProductId(product.getProductId());
        customProduct.setProductName(product.getProductName());

        //Список із одного першого фото
        customProduct.setImages(List.of(product.getImages().get(0)));

        customProduct.setProductPrice(product.getProductPrice());
        customProduct.setProductCategory(product.getProductCategory());
        return customProduct;
    }

}

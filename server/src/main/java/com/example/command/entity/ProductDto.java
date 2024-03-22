package com.example.command.entity;

import com.example.command.Image;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
//@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ProductDto {
    private String productId;
    private String productName;
    private String productDescription;
    private Integer productPrice;
    private List<Image> images;
    private String productCategory;
    private String productSku;
    private List<String> productColor;
    private String productReviews;
}

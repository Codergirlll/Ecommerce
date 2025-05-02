import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import vege from "../../../../assets/images/vege.webp";


const ProductCard = ({ product }) => {
  return (
    <Card className="custom-product-card w-100">
      <Box className="badge-container">
        <Chip label={product.discount} color="primary" size="small" />
        {product.organic && <Chip label="ORGANIC" color="success" size="small" />}
      </Box>
      <CardMedia
        component="img"
        height="140"
        image={vege}
        alt={product.title}
        className="product-image"
      />
      <CardContent>
        <Typography variant="body2" className="stock-text">
          {product.description}
        </Typography>
        <Box className="rating-stars">
          {[...Array(product.rating)].map((_, index) => (
            <StarIcon key={index} fontSize="small" style={{ color: '#FFD700' }} />
          ))}
        </Box>
        <Typography variant="subtitle1" className="product-title">
          {product.title}
        </Typography>
        <Box className="price-section">
          <Typography variant="body2" className="old-price">
            {product.oldPrice}
          </Typography>
          <Typography variant="h6" className="new-price">
            {product.newPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

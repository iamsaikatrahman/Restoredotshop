import {
  Typography,
  Box,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5194/api/Products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Box>
      {loading ? (
        "Loading..."
      ) : (
        <Box>
          {!product ? (
            "Product Not Found"
          ) : (
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <img
                  src={product.pictureUrl}
                  alt={product.name}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{ mb: 2 }}></Divider>
                <Typography variant="h4" color="secondary">
                  ${(product.price / 100).toFixed(2)}
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>{product.type}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Brand</TableCell>
                        <TableCell>{product.brand}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quantity in stock</TableCell>
                        <TableCell>{product.quantityInStock}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;

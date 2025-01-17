import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import slugify from "react-slugify";
import { useParams } from "react-router";
import "../assets/Css/DetailPage.css";
import PreLoader from "./PreLoader";


const ProductDetail = () => {
    const { slug } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200")
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  const foundedProduct = product.find(
    (el) => slugify(el.title).toLowerCase() === slug
  );
  console.log(foundedProduct);


  return (
    <>
      {!foundedProduct?<PreLoader/>:
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foundedProduct.thumbnail} />
      <Card.Body>
        <Card.Title>{foundedProduct.title}</Card.Title>
        <Card.Text>
         {foundedProduct.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
}
    </>
  );
};

export default ProductDetail;
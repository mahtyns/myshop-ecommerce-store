import styled from 'styled-components';

const Container = styled.div`
flex:1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 40px 20px;
`;
const Image = styled.img`
width: 400px;
height: 400px;
object-fit: cover;`;
const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px`;
const Name = styled.h1`
font-size: 24px;
margin: 10px 0`;
const Price = styled.h2`
font-size: 20px;
color: teal`;
const Text = styled.p`
font-size: 18px;
color: gray;
margin: 5px 0px`;
const Button = styled.button`
background-color: black;
color: white;
padding: 15px 25px;
font-size: 16px;
border: none;
margin: 10px 0px;
cursor: pointer;`;

const Stock = styled.p`
font-size:14px;
margin: 10px 0 0 0`;


const Product = ({product}) => {
    return (
        <Container data-id={product.id} data-category={product.category}>
            <Image src={product.img}/>
            <Info>
                <Name>
                    {product.name}
                </Name>
                <Price>{product.price}€</Price>
                <Text>{product.text}</Text> 
                <Stock>Left: {product.stock}</Stock>
            </Info>

            <Button>Add to cart</Button>
        </Container>
    )
}

export default Product

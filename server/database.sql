-- Document to paste in the cmd 

CREATE DATABASE myshopdb;

CREATE TABLE products_table(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150),
    product_price INT NOT NULL,
    product_cat VARCHAR(25),
    product_stock INT
    );

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Neauthy Cream', 'Skincare Cream Face 100% vegan', 25, 'Cream', 7);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Lip Balm scrub', 'Lip scrub with sugar and coco', 15, 'Lips', 5);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Golden Elixir Oil', 'Golden Elixir for skin and hair care', 45, 'Oil', 5);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Laneige Tonic', 'Rose tonic calming & Balancing', 23, 'Tonic', 2);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Chanel No5', 'Chanel No5 Eau de parfum', 70, 'Perfume', 2);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Chanel Gabrielle', 'Chanel Gabrielle Eau de parfum', 55, 'Perfume', 1);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('Avocado Face oil', 'Oil face skin care with avocado', 30, 'Oil', 6);

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock) VALUES('YSL Black Opium', 'Yves Saint Laurent Black Opium eau de toilette', 49, 'Perfume', 2);

CREATE TABLE user_product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150),
    product_price INT NOT NULL,
    product_cat VARCHAR(25),
    product_stock INT
    );

ALTER TABLE user_product
ADD product_amount INT;

INSERT INTO user_product (product_name, product_description, product_price, product_cat, product_stock, product_amount) VALUES('Test Item', 'Test Item to do the tests', 25, 'Test-Cat', 3, 1);

DELETE FROM user_product WHERE product_id = 2;
-- asd;f

CREATE DATABASE betsy;
\c betsy;

DROP TABLE IF EXISTS shipping;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS items;

CREATE TABLE IF NOT EXISTS items(
    item_id SERIAL PRIMARY KEY,
    description TEXT,
    price DECIMAL(10, 2),
    seller TEXT, 
    seller_company VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS pictures(
    picture_id SERIAL PRIMARY KEY,
    item_id INT,
    URL VARCHAR(255),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    review_name TEXT,
    rating_ovr INT,
    rating_qual INT,
    rating_shipping INT,
    review_text TEXT,
    reccomend BOOLEAN,
    review_date TEXT,
    picture_id INT REFERENCES pictures(picture_id),
    item_id INT REFERENCES  items(item_id)
);

CREATE TABLE IF NOT EXISTS shipping(
    shipping_id SERIAL PRIMARY KEY,
    date DATE DEFAULT CURRENT_DATE,
    shipping_cost DECIMAL(10, 2),
    delivery_zip VARCHAR(50),
    delivery_country VARCHAR(100),
    origin_city VARCHAR(100),
    origin_state VARCHAR(100),
    item_id INT,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

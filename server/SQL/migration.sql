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
    item_id INT REFERENCES items(item_id)
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    reviewers_name VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5), -- keeps it 1-5 system
    rating_item_qual INT CHECK (rating_item_qual >= 1 AND rating_item_qual <= 5), -- keeps it 1-5
    rating_shipping INT CHECK (rating_shipping >= 1 AND rating_shipping <= 5), -- keeps it 1-5
    review_text TEXT,
    recommend BOOLEAN,
    review_date DATE DEFAULT CURRENT_DATE,
    picture_id INT REFERENCES pictures(picture_id),
    item_id INT REFERENCES  items(item_id)
);

CREATE TABLE IF NOT EXISTS shipping(
    shipping_id SERIAL PRIMARY KEY,
    early_date DATE DEFAULT CURRENT_DATE + INTERVAL '7 days',
    late_date DATE DEFAULT CURRENT_DATE + INTERVAL '14 days',
    shipping_cost DECIMAL(10, 2),
    delivery_zip VARCHAR(50),
    delivery_country VARCHAR(100),
    origin_city VARCHAR(100),
    origin_state VARCHAR(100),
    item_id INT REFERENCES items(item_id)
);

\i seed.sql;

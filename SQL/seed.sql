-- INSERT BLOCK FOR ITEMS TABLE
INSERT INTO items(description, price, seller, seller_company) VALUES 
('14K Gold Paperclip Chain Necklace, Thick Chain Necklace | Paper Clip Necklace, Gold Link Necklace | Chain Choker Necklace, 925 Silver Chain', 24.79, Apollonia, ApolloniaJewelryInc);


-- INSERT BLOCK FOR PICTURES
INSERT INTO pictures (item_id, URL) VALUES 
(NULL, NULL, NULL)


-- INSERT BLOCK FOR REVIEWS TABLE
-- NEED TO INSERT ACTUAL PICTCUREID AND ITEM ID IN PLACE OF NULL VALUES
INSERT INTO reviews (reviewName, ratingOVR, ratingQual, ratingShipping, reviewText, reccomend, reviewDate, pictureID, itemID) VALUES 
('Jess Lewis', 5, NULL, NULL, NULL, 'Beautiful necklace, surpassed my expectations. I chose the 18” gold and it was longer on me than expected so I just clasped it 3 chains shorter and it’s perfect. And if I want it longer I can clasp it how it’s intended. Wonderful!', TRUE, 'Jan 31, 2024', NULL, NULL),
('Sophia', 5, 5, 5, NULL, 'So pretty and I can’t wait to wear it.', TRUE, 'Jan 30, 2024', NULL, NULL),
('Janice Kellar', 5, 5, 5, NULL, 'Will but again. Shipping took a little longer due to weather. Other then that, beautiful chain', TRUE, 'Jan 29, 2024', NULL, NULL),
('Sarah', 5, 5, 5, NULL, 'Lovely necklace!', NULL, 'Jan 27, 2024', NULL, NULL),
('Annette', 5, 5, 5, NULL, 'Beautiful chain...got lots of compliments', NULL, 'Jan 27, 2024', NULL, NULL),
('Mel Vyvyan', 5, 5, 5, 5, 'Great quality, and beautifully packaged. Very happy with this purchase.', TRUE, 'Jan 26, 2024', NULL, NULL);


-- INSERT BLOCK FOR SHIPPING NOT SURE ABOUT DATE
INSERT INTO shipping (shipping_cost, delivery_zip, delivery_country, origin_city, origin_state, item_id) VALUES 
(3.74, 31314, 'United States', 'Northvale', 'NJ', NULL)


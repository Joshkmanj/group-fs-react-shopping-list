-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Database name: fs-react-shopping

CREATE TABLE "shopping-list" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80),
"quantity" NUMERIC(3,2),
"unit" VARCHAR(20),
"purchase-status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping-list" ("name", "quantity", "unit", "purchase-status")
VALUES ('Apples', '2', 'lbs', false),
('oranges', '1', 'lb', true),
('Eggs', '3.', 'cartons', false),
('ham', '8', 'lbs', false);
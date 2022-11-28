#!/bin/sh

echo "Importing users data..."
psql -U postgres -d naruto -c "\copy users FROM './users.csv' DELIMITER ',' CSV HEADER;"

echo "Importing teams data..."
psql -U postgres -d naruto -c "\copy teams FROM './teams.csv' DELIMITER ',' CSV HEADER;"

echo "Importing coaches data..."
psql -U postgres -d naruto -c "\copy coaches FROM './coaches.csv' DELIMITER ',' CSV HEADER;"

echo "Importing fans data..."
psql -U postgres -d naruto -c "\copy fans FROM './fans.csv' DELIMITER ',' CSV HEADER;"

echo "Importing members data..."
psql -U postgres -d naruto -c "\copy members FROM './members.csv' DELIMITER ',' CSV HEADER;"

echo "Importing events data..."
psql -U postgres -d naruto -c "\copy events FROM './events.csv' DELIMITER ',' CSV HEADER;"

echo "Importing posts data..."
psql -U postgres -d naruto -c "\copy posts FROM './posts.csv' DELIMITER ',' CSV HEADER;"

echo "Importing event_comments data..."
psql -U postgres -d naruto -c "\copy event_comments FROM './eventComments.csv' DELIMITER ',' CSV HEADER;" &

echo "Importing postComments data..."
psql -U postgres -d naruto -c "\copy post_comments FROM './postComments.csv' DELIMITER ',' CSV HEADER;" &

echo "Importing products data..."
psql -U postgres -d naruto -c "\copy products FROM './products.csv' DELIMITER ',' CSV HEADER;"

echo "Importing skus data..."
psql -U postgres -d naruto -c "\copy skus (id, size, quantity, \"productId\") FROM './skus.csv' DELIMITER ',' CSV HEADER;" &

wait # Wait for all background jobs to finish
echo 'Done!'

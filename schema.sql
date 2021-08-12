DROP DATABASE IF EXISTS "my_rpg";
CREATE DATABASE "my_rpg";

DROP TABLE IF EXISTS Account, individual_character, equipment, weapon, armor, moves CASCADE;

CREATE TABLE Account (
 id serial PRIMARY KEY,
 username VARCHAR NOT NULL UNIQUE,
 password VARCHAR NOT NULL
);



CREATE TABLE individual_character (
 id serial PRIMARY KEY,
 level SMALLINT,
 exp INTEGER,
 health INTEGER,
 mana INTEGER,
 picture VARCHAR,
 name VARCHAR, --need to add unique later,
 attack INTEGER,
 defense INTEGER,
 speed INTEGER,
 initial BOOLEAN,
 color VARCHAR,
 id_Account INTEGER,
 height INTEGER,
 width INTEGER,
);



CREATE TABLE equipment (
 id serial PRIMARY KEY,
 id_individual_character INTEGER,
 cost INTEGER
);




CREATE TABLE weapon (
 id serial PRIMARY KEY,
 attack INTEGER,
 id_equipment INTEGER,
 name VARCHAR
);




CREATE TABLE armor (
 id serial PRIMARY KEY,
 defense INTEGER,
 id_equipment INTEGER,
 name INTEGER
);



CREATE TABLE moves (
 id serial PRIMARY KEY,
 id_individual_character INTEGER,
 name VARCHAR,
 description VARCHAR,
 power INTEGER,
 mana_cost INTEGER,
 thumbnail VARCHAR
);



ALTER TABLE individual_character ADD FOREIGN KEY (id_Account) REFERENCES Account(id);
ALTER TABLE equipment ADD FOREIGN KEY (id_individual_character) REFERENCES individual_character(id);
ALTER TABLE weapon ADD FOREIGN KEY (id_equipment) REFERENCES equipment(id);
ALTER TABLE armor ADD FOREIGN KEY (id_equipment) REFERENCES equipment(id);
ALTER TABLE moves ADD FOREIGN KEY (id_individual_character) REFERENCES individual_character(id);

CREATE INDEX ON individual_character (id_Account);
CREATE INDEX ON Account (id);
CREATE INDEX ON Account (username);


INSERT INTO Account (username, password) VALUES ('evansding@gmail.com', 'blah');
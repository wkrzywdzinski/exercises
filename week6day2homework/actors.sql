DROP TABLE IF EXISTS actors;
CREATE TABLE actors (
  id SERIAL PRIMARY KEY,
  Name TEXT,
  Age INTEGER,
  "Number of Oscars" INTEGER
);
INSERT INTO actors (Name, Age, "Number of Oscars") VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, Age, "Number of Oscars") VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, Age, "Number of Oscars") VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, Age, "Number of Oscars") VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, Age, "Number of Oscars") VALUES ('John Cho', 43, 0);
SELECT * FROM actors;
SELECT * FROM actors WHERE "Number of Oscars" > 1;
SELECT * FROM actors WHERE Age > 30;

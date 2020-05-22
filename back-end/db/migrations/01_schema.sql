DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quests CASCADE;
DROP TABLE IF EXISTS badges CASCADE;
DROP TABLE IF EXISTS classes CASCADE;
DROP TABLE IF EXISTS assigned_badges CASCADE;
DROP TABLE IF EXISTS class_progress CASCADE;
DROP TABLE IF EXISTS achievements CASCADE;
DROP TABLE IF EXISTS unlocked_achievements CASCADE;

-- UPDATE users
--   SET username = 'BobRobertson' AND first_name = 'Bob' AND last_name = 'Robertson' AND email = 'bob@example.com' AND password = '$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm' AND avatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' AND adventurer = false
--   WHERE users.id = 1;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  adventurer BOOLEAN NOT NULL,
  bio TEXT NOT NULL
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE quests (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  city VARCHAR(255) NOT NULL,
  class_id INTEGER REFERENCES classes(id),
  villager_id INTEGER REFERENCES users(id),
  adventurer_id INTEGER REFERENCES users(id) DEFAULT NULL,
  experience_points INTEGER NOT NULL DEFAULT 100
);

CREATE TABLE badges (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  requirement VARCHAR(255) NOT NULL,
  int_requirement INTEGER NOT NULL,
  criteria_type VARCHAR(255) NOT NULL,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE NOT NULL
);


CREATE TABLE assigned_badges (
  badge_id INTEGER REFERENCES badges(id) ON DELETE CASCADE NOT NULL,
  adventurer_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL
);


CREATE TABLE class_progress (
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
  adventurer_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  level INTEGER DEFAULT 1,
  experience_points INTEGER DEFAULT 0,
  quest_count INTEGER DEFAULT 0
);
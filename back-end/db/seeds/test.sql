INSERT INTO users (username, first_name, last_name, email, password, avatar, adventurer, bio)
VALUES
  (
    'BobRobertson', 'Bob', 'Robertson', 'bob@example.com', '$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm', '/images/defaultAvatar.png', true, ''
  ),
  ( --2
    'AlAlbertson', 'Al', 'Albertson', 'al@example.com', '$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm', '/images/defaultAvatar.png', false, ''
  ),
  (
    'SueSusanson', 'Sue', 'Susanson', 'sue@example.com', '$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm', '/images/defaultAvatar.png', true, ''
  );
INSERT INTO assigned_badges (adventurer_id, badge_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 4),
  (1, 7),
  (1, 8);

INSERT INTO class_progress (class_id, adventurer_id, level, experience_points, quest_count)
VALUES
  (1, 1, 3, 300, 18),
  (2, 1, 3, 200, 5),
  (3, 1, 5, 300, 10),
  (4, 1, 2, 100, 3),
  (5, 1, 3, 300, 3),
  (6, 1, 3, 300, 3),
  (7, 1, 4, 300, 3),
  (1, 3, 4, 300, 3),
  (2, 3, 4, 300, 3),
  (3, 3, 4, 300, 3),
  (4, 3, 4, 300, 3),
  (5, 3, 4, 300, 3),
  (6, 3, 4, 300, 3);

INSERT INTO quests (name, description, completed, city, class_id, villager_id, adventurer_id)
VALUES
  ('Hungry for some soup!', 'I am at home and feeling very sick. Can someone bring me some some soup please?', true, 'Montreal', 6, 2, 1),
  ('My computer won''t start! Can someone help?', 'Ever since I installed this new app, my computer has been acting weird and won''t start', false, 'Montreal', 7, 2, 1);
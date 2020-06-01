INSERT INTO quests (name, description, completed, city, classId, villagerId)
VALUES
  ('Can''t figure out this math problem.', 'I have a test coming up and I can''t understand integrals.', false, 'Montreal', 3, 6),
  ('Need some soup', 'I''m sick and would really love some soup. I don''t want to go out and spread my virus.', false, 'Montreal', 6, 6),
  ('Bedtime stories', 'I am visually impaired, could someone read a bedtime story to my kid?', false, 'Montreal', 3, 6),
  ('Making a mayonaise', 'Can someone walk me though making a home made mayonaise? I''ve always wanted to make one but it''s very hard.', false, 'Montreal', 6, 8),
  ('Need a gamer friend', 'Stuck in a hospital bed for a month and need friends to play online games with me', false, 'Montreal', 2, 8),
  ('Need some eggs', 'My son''s birthday is today and I forgot to buy eggs to bake his cake.', false, 'Montreal', 1, 8),
  ('Guitar lessons', 'I have always wanted to learn how to play the guitar. Could someone spare some time to teach me a few chords?', false, 'Montreal', 2, 8),
  ('Fuse went out', 'Fuse went out and I don'' know how to change it. Could someone run me through the process?', false, 'Montreal', 7, 9),
  ('Need someone to jog with', 'New to this town and I feel unmotivated to go run alone. A friend to run with would help!', false, 'Montreal', 4, 2),
  ('My kid wants to hear someone sing for them', 'I have a child who keeps asking to hear the same children''s music album. It would mean the world to me if they could hear a live version', false, 'Montreal', 2, 9),
  ('My dog needs to take a walk', 'I broke my leg and my dog needs to take walks. Please help!', false, 'Montreal', 3, 9),
  ('Need pills from the pharmacy', 'I am out of medication and I need to take them ASAP', false, 'Montreal', 1, 2);

INSERT INTO quests (name, description, completed, city, classId, villagerId, adventurerId)
VALUES
  ('Hungry for some soup!', 'I am at home and feeling very sick. Can someone bring me some some soup please?', true, 'Montreal', 6, 2, 1),
  ('My computer won''t start! Can someone help?', 'Ever since I installed this new app, my computer has been acting weird and won''t start', false, 'Montreal', 7, 2, 1);
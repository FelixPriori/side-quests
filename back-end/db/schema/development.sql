INSERT INTO users (username, first_name, last_name, email, password, avatar)
VALUES
  (
    'BobRobertson', 'Bob', 'Robertson', 'bob@example.com', 'password', 'https://i.imgur.com/twYrpay.jpg, true'
  ),
  (
    'AlAlbertson', 'Al', 'Albertson', 'al@example.com', 'password', 'https://i.imgur.com/3tVgsra.jpg, false'
  ),
  (
    'SueSusanson', 'Sue', 'Susanson', 'sue@example.com', 'password', 'https://i.imgur.com/TdOAdde.jpg, true'
  );
--

INSERT INTO classes (name, description)
VALUES 
  (
    "Rogue",
    "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies"
  ),
  (
    "Bard",
    "Bards loves to entertain. They specialize in letting the imagination run wild and help people think of happy thoughts for a while."
  ),
  (
    "Druid",
    "Druids love a companion and are happy to help your furry friends stay in tip top shape. Whether it's babysitting, or simply giving the dog a walk, Druids are happy to help!"
  ),
  (
    "Monk",
    "Monks focus on mastering their body and mind. If you need an intro to Yoga or are  in need of a jogging partner, Monks will be happy to motivate!"
  ),
  (
    "Mage",
    "Mages are known for their intellect and are happy to help those improve theirs. Like any good scholar, Mages will be sure to guide you to knowledge through tutoring or lessons."
  ),
  (
    "Alchemist",
    "Alchemists love to serve… food that is. Constantly concocting different flavours that peak your palate, they are happy to share their discoveries and home cooked meals with people on an empty stomach."
  ),
  (
    "Gadgeteer",
    "Gadgeteers are experts taking on the more technical tasks. They can help troubleshooting issues related to computers, electricity, plumbing, etc."
  );
--

INSERT INTO badges (name, image, requirement)
VALUES 
  (
    'Week Streak', 
    'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png'
    'Help someone every day for 7 days'
  ),
    'Master Rogue',
    'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png',
    'Have a level 10 Rogue'
  );
--

INSERT INTO achievements (name, image, requirement)
VALUES 
  (
    'Jack of All Trades',
    'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png',
    'Complete a quest with every class'
  ),
  (
    'Trifecta'
    'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png'
    'Help 3 different villagers in one day'
  );
--

INSERT INTO assigned_badges (adventurer_id, badge_id)
VALUES
  (1, 1),
  (1, 2),
  (3, 1);
--

INSERT INTO unlocked_achievements (adventurer_id, achievement_id)
VALUES
  (1, 2),
  (3, 1);
--

INSERT INTO class_progress (adventurer_id, class_id, level, experience, quest_count)
VALUES
  (1, 1, 3, 330, 18),
  (3, 5, 1, 30, 3);
--
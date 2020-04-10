\i back-end/db/migrations/01_schema.sql
\i back-end/db/seeds/01_users.sql
\i back-end/db/seeds/02_classes.sql
\i back-end/db/seeds/03_badges.sql
\i back-end/db/seeds/04_achievements.sql
\i back-end/db/seeds/05_assigned_badges.sql
\i back-end/db/seeds/06_unlocked_achievements.sql
\i back-end/db/seeds/07_class_progress.sql
\i back-end/db/seeds/08_quests.sql

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO quester;

GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO quester;
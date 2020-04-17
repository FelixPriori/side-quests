\i back-end/db/migrations/01_schema.sql
\i back-end/db/seeds/01_users.sql
\i back-end/db/seeds/02_classes.sql
\i back-end/db/seeds/03_badges.sql
\i back-end/db/seeds/04_assigned_badges.sql
\i back-end/db/seeds/05_class_progress.sql
\i back-end/db/seeds/06_quests.sql

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO quester;

GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO quester;
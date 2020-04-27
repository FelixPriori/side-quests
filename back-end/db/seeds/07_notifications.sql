INSERT INTO notifications (user_id, title, message, type)
VALUES (2, 'BobRobertson accepted your quest!', 'Make sure you get in touch with them.', 'default'),
(2, 'BobRobertson dropped your quest!', 'Hopefully someone else will pick it up soon.', 'danger');

INSERT INTO notifications (user_id, title, message, type, viewed)
VALUES (2, 'BobRobertson accepted your quest!', 'Make sure you get in touch with them.', 'default', true);
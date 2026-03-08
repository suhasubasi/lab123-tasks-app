USE `lab123_tasks_app`;

DROP TABLE IF EXISTS `task`;

CREATE TABLE `task` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `completed` TINYINT(1) NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `task` (`title`, `completed`) VALUES
    ('Read Express notes', 0),
    ('Practice REST API routes', 1),
    ('Prepare database step', 0);
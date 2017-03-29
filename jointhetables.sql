-- INITIAL QUERY TO ADD ROWS TO THE EVENTS TABLE BASED ON THE POST BEING PUBLISHED TODAY, IT IS THE PARENT POST, AND IT WAS CATEGORIZED AS AN EVENT

INSERT INTO `wp_stec_events`(`created_by`, `calid`, `summary`, `visibility`, `description`, `icon`, `link`)
SELECT 
	`wp_posts`.`ID` as created_by,
	SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'#',1) as calid,
	`wp_posts`.`post_title` as summary,
    'stec_cal_default' as visibility,
	`wp_posts`.`post_content` as description,
	'fa' as icon,
    CONCAT('http://thedaily.case.edu/',`wp_posts`.`post_name`) as link
FROM 
	`wp_posts` 
	INNER JOIN `wp_postmeta` ON `wp_posts`.`ID` = `wp_postmeta`.`post_id` 
WHERE 
	DATE(`wp_posts`.`post_date`) = CURDATE() 
	AND `wp_posts`.`post_status` = 'publish' 
	AND `wp_posts`.`post_parent` = '0'
    AND `wp_postmeta`.`meta_key` = 'calendar'


-- COLOR CHANGE FOR ADDED ROWS

UPDATE 
	`wp_stec_events` 
SET 
	`color` = (
		SELECT 
			CONCAT('#',SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'#',-1))
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'calendar'
	) 
WHERE 
	EXISTS (
		SELECT 
			CONCAT('#',SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'#',-1))
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'calendar'
	);


-- START DATE CHANGE FOR ADDED ROWS

UPDATE 
	`wp_stec_events` 
SET 
	`start_date` = (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'starts_on'
	) 
WHERE 
	EXISTS (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'starts_on'
	);


-- ENDING DATE CHANGE FOR ADDED ROWS

UPDATE 
	`wp_stec_events` 
SET 
	`end_date` = (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'ends_on'
	) 
WHERE 
	EXISTS (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'ends_on'
	);


-- LOCATION CHANGE FOR ADDED ROWS

UPDATE 
	`wp_stec_events` 
SET 
	`location` = (
		SELECT 
			SUBSTRING_INDEX(SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'"',4),'"',-1)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'location'
	) 
WHERE 
	EXISTS (
		SELECT 
			SUBSTRING_INDEX(SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'"',4),'"',-1)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'location'
	);


-- ADDITIONAL UPDATE QUERY FOR DESCRIPTION CHANGES

UPDATE 
	`wp_stec_events` 
SET 
	`description` = (
		SELECT 
			wp_posts.post_content 
		FROM 
			wp_posts 
		WHERE 
			wp_posts.ID = wp_stec_events.created_by 
			AND post_parent = '0'
	) 
WHERE 
	EXISTS (
		SELECT 
			wp_posts.post_content 
		FROM 
			wp_posts 
		WHERE 
			wp_posts.ID = wp_stec_events.created_by 
			AND post_parent = '0'
	);






-- ALL OF THESE TOGETHER (ASIDE FROM THE POST CONTENT UPDATE)
UPDATE 
	`wp_stec_events` 
SET 
	`color` = (
		SELECT 
			CONCAT('#',SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'#',-1))
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'calendar'
	) 
WHERE 
	EXISTS (
		SELECT 
			CONCAT('#',SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'#',-1))
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'calendar'
	);
UPDATE 
	`wp_stec_events` 
SET 
	`start_date` = (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'starts_on'
	) 
WHERE 
	EXISTS (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'starts_on'
	);
UPDATE 
	`wp_stec_events` 
SET 
	`end_date` = (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'ends_on'
	) 
WHERE 
	EXISTS (
		SELECT 
			FROM_UNIXTIME(`wp_postmeta`.`meta_value`)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'ends_on'
	);
UPDATE 
	`wp_stec_events` 
SET 
	`location` = (
		SELECT 
			SUBSTRING_INDEX(SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'"',4),'"',-1)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'location'
	) 
WHERE 
	EXISTS (
		SELECT 
			SUBSTRING_INDEX(SUBSTRING_INDEX(`wp_postmeta`.`meta_value`,'"',4),'"',-1)
		FROM 
			wp_postmeta
		WHERE 
			wp_postmeta.post_id = wp_stec_events.created_by
        	AND meta_key = 'location'
	);







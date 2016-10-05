--IMPORT EVENTS TO THE DRAFT CALENDAR (WILL NOT BE PUBLISHED)
--OPEN PHPmyAdmin AND NAVIGATE TO THE TABLE: `wp_stec_events` THEN OPEN THE SQL QUERY BOX


--CHECK FOR ACCURACY AND THEN UPDATE EVENT DATES
UPDATE `wp_stec_events`
SET `end_date` = `start_date`
WHERE `calid` = "10"


--CLEAN ANY TEXT IN THE SUMMARY AND DESCRIPTION
UPDATE `wp_stec_events`
SET `summary` = REPLACE(`summary`, "text", ""), `description` = REPLACE(`description`, "text", "")
WHERE `calid` = "10"


--FINAL TO MOVE EVENTS OVER AND UPDATE COLOR
UPDATE `wp_stec_events`
SET `calid` = "3", `color`="#ed6868"
WHERE `calid` = "10"
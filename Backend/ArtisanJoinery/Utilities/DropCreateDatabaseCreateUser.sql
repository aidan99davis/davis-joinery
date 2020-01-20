DROP DATABASE IF EXISTS ArtisanJoinery;

CREATE DATABASE ArtisanJoinery;

-- Creates the login AbolrousHazem with password '340$Uuxwp7Mcxo7Khy'.  
CREATE LOGIN ArtisanJoineryUser   
    WITH PASSWORD = 'test';  
GO  

-- Creates a database user for the login created above.  
CREATE USER ArtisanJoineryUser FOR LOGIN ArtisanJoineryUser
WITH DEFAULT_SCHEMA = ArtisanJoinery;  

GO  
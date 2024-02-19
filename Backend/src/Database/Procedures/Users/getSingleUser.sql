CREATE OR ALTER PROCEDURE getSingleUser(
    @userID varchar(100)
)

AS
BEGIN
    SELECT * 
    FROM Users
    WHERE userID= @userID;
END


SELECT * FROM Users


CREATE PROCEDURE registerUser
(
    @userID NVARCHAR(255),
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
  INSERT INTO Users (UserID, Username, Email, Password)
        VALUES (@userID, @username, @email, @password);
END


DROP PROCEDURE registerUser

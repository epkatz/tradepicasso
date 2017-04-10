Create Table Player (
	PlayerId bigint Primary Key not null auto_increment,
    Name nvarchar(100) not null
);

Insert into Player (Name)
Values 
('Carmelo Anthony');
create database E_Commerce
Use E_Commerce



--Table For Users

create table [User](
User_Id int Not Null identity(1,1),
First_Name varchar(50) Not Null,
Last_Name varchar(50),
Email varchar(50) Not NULL,
Mobile_Number varchar(50) Not Null,
Address varchar(50) Not Null,
Password varchar(20) Not Null,
PRIMARY KEY(User_Id)
);

Drop table [User]

--Table for retailer
create table Retailers(
Retailer_Id int Not Null identity(1,1),
First_Name varchar(50) Not Null,
Last_Name varchar(50),
Email varchar(50) Not NULL,
Mobile_Number varchar(50) Not Null,
Address varchar(50) Not Null,
Password varchar(20) Not Null,
Total_Revenue decimal(10,2) Default 0.00,
PRIMARY KEY(Retailer_Id)
);

Drop table Retailers

--table for Products
create table Products(
Product_Id int Not Null identity(1,1),
Product_Name varchar(50) Not Null,
Product_Description varchar(max) Not null,
Product_Price decimal(10,2) Not Null,
Product_Category varchar(50) not Null,
Retailer_Id int Not Null constraint FK_Prod_RetId References Retailers (Retailer_Id) on delete cascade,
Is_Verified int Not null default 0 check(Is_Verified=0 or Is_Verified=1),
Product_Image Varbinary(max) Not Null,
PRIMARY KEY (Product_Id),
);

drop table Products;

--table for wishList
create table WishList(
WishList_Id int Not Null identity(1,1),
User_Id int not null constraint FK_WishList_UID References [User] (User_Id),
Product_Id int Not null,
PRIMARY KEY (WishList_Id),
FOREIGN KEY (Product_Id) references Products (Product_Id)
);


Drop table WishList;

--Table for Orders 
create table Orders(
Order_Id int not null identity (1,1),
User_Id int Not Null constraint FK_Orders_UID References [User] (User_Id),
Product_Id int Not Null constraint FK_Orders_PROId references Products (Product_Id),
Product_Quantity int Not Null default 0,
Total_Price Decimal (10,2) Default 0.00,
Retailer_Id int Not Null constraint FK_Orders_RetId References Retailers (Retailer_Id),
Order_Status int Not null default 0 check(Order_Status=0 or Order_Status=1),
PRIMARY KEY (Order_Id),
);

Drop table Orders;


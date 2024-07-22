# Data Model
- Catalog
  - Id
  - Name
    
- Product
  - Id
  - Name
  - Desc
  - Price
  - DiscountRate
  - Image
  
- User
- Role
- CarouselImage
  - Id
  - Image
  - StartDate
  - EndDate
 
- ShoppingCart
  - Id
  - UserId
  - ProductId
  - Quantity
    
- Order
  - Id
  - Date
  - UserId
  - CargoTrackingkNumber
    
- OrderDetail
  - Id
  - ProductId
  - Price
  - DiscountRate
  - Quantity
    
- UserAddress
  - Id
  - UserId
  - Name
  - Text
    
- ProductImages
  - Id
  - Image
  - ProductId
    
- Comments
  - Id
  - UserId
  - Text
  - Date
  - PrductId
  - Enabled
  - Rate


You can change email server and administrator credentials in appsettings.json or appsettings.Development.json. In development environment you should change settings in appsettings.Development.json. In json files there are other settings for password options and database connection string etc.
      "EMail": {
    "Server": "sandbox.smtp.mailtrap.io",
    "Port": 2525,
    "SenderName": "EShop",
    "SenderEmail": "0ac1675cd2fafe",
    "Account": "e2de724b62f294",
    "Password": "bfb706e46a2439",
    "SSL": true
  },
  "Security": {
    "DefaultUser": {
      "UserName": "admin@mvcre.com",
      "Name": "BuiltIn Admin",
      "Password": "!MVCqs1234"
    },
    "Password": {
      "RequireDigit": true,
      "RequiredLength": 6,
      "RequiredUniqueChars": 1,
      "RequireLowercase": true,
      "RequireUppercase": true,
      "RequireNonAlphanumeric": true
    },
    "Lockout": {
      "MaxFailedAccessAttempts": 5,
      "DefaultLockoutTimeSpan": "00:05:00"
    }
  }

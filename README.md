# ECOMMERCE API
## Technology
* Typescript
* Expressjs
* Mongoose
## App structure
```
src/
  ├── category
  │   ├── controller.ts
  │   ├── dto
  │   │   └── category_dto.ts
  │   ├── middleware.ts
  │   └── service.ts
  ├── config
  │   ├── mongoose_config.ts
  │   └── multer_config.ts
  ├── library
  │   ├── controller.ts
  │   └── service.ts
  ├── models
  │   ├── bill_model.ts
  │   ├── catogory_model.ts
  │   ├── image_model.ts
  │   └── product_model.ts
  ├── order
  │   ├── controller.ts
  │   ├── dto
  │   │   ├── order_dto.ts
  │   │   └── updateStatus_dto.ts
  │   ├── middleware.ts
  │   └── service.ts
  ├── product
  │   ├── controller.ts
  │   ├── dto
  │   │   ├── createProduct_dto.ts
  │   │   ├── product_dto.ts
  │   │   └── updateProduct_dto.ts
  │   ├── middleware.ts
  │   └── service.ts
  └── server.ts
```
## Config
### Step 1: You open terminal( linux ) or cmd( window ) and clone this repository by using `git clone`
`git clonehttps://github.com/quangtho908/ecommerce-express.git`
### Step 2: pointer to folder you clone and
1. Install package
  - `yarn install`
2. Install typescript global if it don't exist in your compute
  - `npm install -g typescript`
  - or
  - `sudo npm install -g typescript` ( if using linux )
3. Config file `.env`
   ```
   USERDB=userdb
   PASSDB=passdb
   DBNAME=namedb
   ```
   - `USERDB` is username of database
   - `PASSDB` is password 
   - `DBNAME` is name of Database
   ### Note Database is create in Mongo Atlas if you use local database you can:
    - Go to `config` foler in `src` and go to `mongoose_config.ts` and chage `mongodb+srv://${USERDB}:${PASSDB}@cluster0.c0pmn.mongodb.net/${DBNAME}?retryWrites=true&w=majority` to your url database
5. Run app follow 2 steps:
   - `yarn tsc`
   - `yarn start`
6. Structure Database mongodb include 4 collections equivalent 4 files in `src/models`

## This Api is not completed yet, there are many more things to update

     

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
**Step 1**: You open terminal( linux ) or cmd( window ) and clone this repository by using `git clone`
`git clonehttps://github.com/quangtho908/ecommerce-express.git`
**Step 2**: pointer to folder you clone and
1. Install package
`yarn install`
2. Install typescript global if it don't exist in your computer
3. Config file `.env`
4. Run app follow 2 steps:
    `yarn tsc`
    `yarn start`

     

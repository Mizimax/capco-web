# Starting product website
## 1. Run nest.js api
``` 
cd api
yarn start
````
Api will serve at http://localhost:3000
## 2. Run react.js web
``` 
cd web
yarn start
````
Web will serve at http://localhost:1234
## 3. Enjoy our products :)

# For testing
## Backend testing (E2E, Service)
``` 
cd api
yarn test
````
## Frontend testing
- Hook test (useProductList)
- Unit test (formatDate)
- Component test (ProductCard)

PS. Before run test, should run backend service.
``` 
cd web
yarn test
````


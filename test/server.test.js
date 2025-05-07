const chai = require("chai"); 
const chaiHttp = require("chai-http"); 
const server = require("../app/server"); 

const should = chai.should(); 
chai.use(chaiHttp); 

let token; 



//GET brands
describe("GET /api/brands - get all brands", () => { 
  it("should get all brands", (done) => { 
    chai
      .request(server)
      .get("/api/brands")
      .end((err, res) => { 
        res.should.have.status(200); 
        res.body.should.be.an("object");
        res.body.should.have.property("brands");
        res.body.brands.should.be.an("array");
        done();  
      
      })
  })
})


//GET products
describe("GET /api/products - should get all products", () => { 
  it("should get all products", (done) => { 
    chai
    .request(server)
    .get("/api/products")
    .end((err, res) => { 
      res.should.have.status(200); 
      res.body.should.be.an("object");
      res.body.should.have.property("products");
      res.body.products.should.be.an("array");
      done();  
    })
  })
})
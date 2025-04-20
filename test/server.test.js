const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server'); // Adjust the path as needed

const should = chai.should();
chai.use(chaiHttp);

// TODO: Write tests for the server

describe('Brands', () => {
  it('should get all brands', (done) => {
    chai.request(server)
      .get('/api/brands')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('brands');
        res.body.brands.should.be.a('array'); 
        
        done();
      });
  });
});

describe('Login', () => {});

describe('Cart', () => {});

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
const { expect } = chai;

chai.use(chaiHttp);

describe('API Routes', () => {
  it('should GET /api/data', (done) => {
    chai.request(server)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message').eql('Hello from the backend!');
        done();
      });
  });
});

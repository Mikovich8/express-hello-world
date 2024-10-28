const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Путь к вашему приложению

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', () => {
    it('should return Hello World with status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});


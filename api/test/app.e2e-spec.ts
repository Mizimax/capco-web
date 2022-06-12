import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app/app.module';
import * as request from 'supertest';
import * as MOCKED_PRODUCT_LIST from '../src/modules/Product/datasources/product-mock-up.json';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(MOCKED_PRODUCT_LIST);
  });

  it('/products?filter=NEWS,REGIONS,VIDEO,TV (GET)', () => {
    return request(app.getHttpServer())
      .get('/products?filter=NEWS,REGIONS,VIDEO,TV')
      .expect(200)
      .expect(MOCKED_PRODUCT_LIST);
  });

  it('/products?filter=NEWS (GET)', () => {
    return request(app.getHttpServer())
      .get('/products?filter=NEWS')
      .expect(200)
      .expect([MOCKED_PRODUCT_LIST[0]]);
  });

  it('/products?search=first (GET)', () => {
    return request(app.getHttpServer())
      .get('/products?search=first')
      .expect(200)
      .expect([MOCKED_PRODUCT_LIST[0]]);
  });

  it('/products?search=first&filter=NEWS (GET)', () => {
    return request(app.getHttpServer())
      .get('/products?search=first&filter=NEWS')
      .expect(200)
      .expect([MOCKED_PRODUCT_LIST[0]]);
  });

  it('/products?search=empty (GET)', () => {
    return request(app.getHttpServer())
      .get('/products?search=empty')
      .expect(200)
      .expect([]);
  });
});

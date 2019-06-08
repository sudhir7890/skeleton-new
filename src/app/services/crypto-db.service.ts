import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CryptoFakeDB } from '../data/crypto';

export class CryptoDbService implements InMemoryDbService{
    createDb(): any
    {
        return {
           

            // E-Commerce
            'crypto-list' : CryptoFakeDB.products,
            'crypto-detail'   : CryptoFakeDB.orders,

         
        };
    }
}

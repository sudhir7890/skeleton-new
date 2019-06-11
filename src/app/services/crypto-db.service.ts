import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CryptoFakeDB } from '../data/crypto';
import { CryptoDetailDb } from '../data/crypto-detail';

export class CryptoDbService implements InMemoryDbService{
    createDb(): any
    {
        return {
              // Dashboards
            //   'project-dashboard-projects' : ProjectDashboardDb.projects,
            //   'project-dashboard-widgets'  : ProjectDashboardDb.widgets,

              'analytics-dashboard-widgets': CryptoDetailDb.widgets,

            // // E-Commerce
            // 'crypto-list' : CryptoFakeDB.products,
            // 'crypto-detail'   : CryptoFakeDB.orders,

            // E-Commerce
            'e-commerce-products' : CryptoFakeDB.products,
            'e-commerce-orders'   : CryptoFakeDB.orders,

         
        };
    }
}

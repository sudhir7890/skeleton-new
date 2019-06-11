import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'crypto',
                title    : 'CRYPTO',
                translate: 'NAV.CRYPTO.BADGE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                
                url      : '/apps/crypto',
                badge    : {
                    title    : '25',
                   
                    bg       : '#644336',
                    fg       : '#FFFFFF'
                }
            },
        ]
    },
    {
        id       : 'cryptocurrency',
        title    : 'Cryptocurrecny',

        url      : '/apps/crypto',
        type     : 'item',
        icon     : 'email',
        badge    : {
            title    : '25',
           
            bg       : '#644336',
            fg       : '#FFFFFF'
        }
    }
];

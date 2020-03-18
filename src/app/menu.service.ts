import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor() { }

    getMenu(): Array<any> {
        const menu = [

            {
                name: 'Funcionarios',
                path: './funcionarios',
                children: [
                    {
                        name: 'Extratos',
                        path: './extratos',
                    }

                ]
            }
        ];

        return menu;
    }

}
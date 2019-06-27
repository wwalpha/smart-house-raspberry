import { Bravia } from 'typings/types';

const bravia = require('bravia');
export const client: Bravia = new bravia('172.16.81.25', 80, '0811');

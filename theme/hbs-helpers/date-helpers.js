const moment = require('moment');
const momentLocale = require('moment/locale/es');
const Handlebars = require('handlebars');

moment.locale('es');
Handlebars.registerHelper('MY', date => moment(date.toString(), ['YYYY-MM-DD']).format('MMMM YYYY'));
Handlebars.registerHelper('Y', date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'));
Handlebars.registerHelper('DMY', date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMMM YYYY'));

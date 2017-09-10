const moment = require('moment');
const Handlebars = require('handlebars');

Handlebars.registerHelper('birthDate', (birth) => {
	const out = [];
	if (birth && Object.keys(birth).length) {
		if (birth.place) {
			out.push(`<div> Nacido en ${birth.place}`);
		}
		if (birth.place && birth.state) {
			out.push(`, ${birth.state}`);
		}
		const year = birth.date ? moment(birth.date.toString(), ['YYYY-MM-DD']).format('YYYY') : '';
		if (year && birth.place && birth.state) {
			out.push(` en ${year}</div>`);
		} else if (year && (!birth.place || birth.state)) {
			out.push(`<div> Nacido en ${year}</div>`);
		}
	}

	return new Handlebars.SafeString(out.join(''));
});

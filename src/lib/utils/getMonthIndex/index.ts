export function getMonthIndex(date?: Date){
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric'
	}).format(date ?? new Date()).toLowerCase().replace(' ', '_');
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchPhoto',
	pure: false

})
export class SearchPhotoPipe implements PipeTransform {
	transform(items: Array<any>, query): Array<any> {
		if (items == null) {
			return null;
		}
		if (!query) {
			return items;
		} else {
			return items.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
		}
	}
}



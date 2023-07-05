export namespace IEntity {
	export interface Genre {
		_id: string;
		name: string;
	}

	export interface Movie {
		_id: string;
		title: string;
		genre: Genre;
		numberInStock: number;
		dailyRentalRate: number;
		username: string;
	}
}
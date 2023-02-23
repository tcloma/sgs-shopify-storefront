export interface Collection {
	description: string;
	handle: string;
	id: string;
	title: string;
	products: Product[];
    image: {
        src: string
    }
}

export interface Product {
	id: string;
	description: string;
	title: string;
	publishedAt: string;
	availableForSale: boolean;
	variants: Details[];
	images: Image[];
}

interface Details {
	price: {
		amount: string;
	};
	weight: number;
	image: Image;
}

interface Image {
	src: string;
}

/*==Cina tovaru ne perevychye 800 grn============*/
db.Product_list.aggregate(
	{$unwind: "$product"}, 
	{$match: 
		{"product.price_grn": 
			{$lt: 800}
		}
	}
).pretty()

/*==Tovary z vkazanoi kategorii===================*/
db.Product_list.aggregate(
	{$match:
		{category: "HD Android TV Boxes"}
	}
).pretty()

/*==Vsi kategorii tovariv z magazynu==================*/
db.Product_list.find({}, {"category": 1})

/*==Kategoriya z tovrom minimaloi vartosti============*/
db.Product_list.aggregate(
	{$unwind: "$product"},
	{$group: 
		{_id: "$category", minPrice:
			{$min: "$product.price_grn"}
		}
	},
	{$sort: 
		{minPrice: 1}
	},
	{$limit: 1})

/*==Produkty vartosti vid 850 do 1300===============*/
db.Product_list.aggregate(
	{$unwind: "$product"},
	{$match:
		{"product.wholesale_price_grn":
			{$lt: 1300}
		}
	},
	{$match:
		{"product.wholesale_price_grn":
			{$gt: 850}
		}
	}).
pretty()




























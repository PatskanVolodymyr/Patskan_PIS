/*==Cina tovaru ne perevychye 800 grn============*/
db.Product_list.find(
	{"price_grn": 
		{$lt: 800}
	}
).pretty()

/*==Tovary z vkazanoi kategorii===================*/
db.Product_list.find(
	{"prod_cat": DBRef("Product_categories", "2")}).pretty()

/*==Vsi kategorii tovariv z magazynu==================*/
db.Product_categories.find({}, {"name": 1})

/*==Kategoriya z tovrom minimaloi vartosti============*/
db.Product_list.aggregate(
	{$group: 
		{_id: "$prod_cat", minPrice:
			{$min: "$price_grn"}
		}
	},
	{$sort: 
		{minPrice: 1}
	},
	{$limit: 1})

/*==Produkty vartosti vid 850 do 1300===============*/
db.Product_list.aggregate(
	{$match:
		{"wholesale_price_grn":
			{$lt: 1300}
		}
	},
	{$match:
		{"wholesale_price_grn":
			{$gt: 850}
		}
	}).
pretty()




























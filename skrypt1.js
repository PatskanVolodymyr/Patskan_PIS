db.createCollection("Product_categories")
db.Product_categories.insertMany([
	{_id: 1, name: "DVRs", number: 1},
	{_id: 2, name: "HD Android TV Boxes", number: 8},
	{_id: 3, name: "Android TV Box HD controls", number: 4},
	{_id: 4, name: "Android TV Box HD Keyboards", number: 4},
	{_id: 5, name: "Android TV Box HD Airshow Mouse", number: 5},
	{_id: 6, name: "Vacuum cleaners", number: 1},
	{_id: 7, name: "Lights", number: 2},
	{_id: 8, name: "IP cameras", number: 1},
	{_id: 9, name: "Scams IP cameras", number: 2},
	{_id: 10, name: "USB Flash", number: 2}])
db.createCollection("Product_list")/*insertMany - srabatyvaet*/
db.Product_list.insert({_id: 12220, full_name: "Car DVD-E-ACE Mirror, 4.3 inch display, Full HD, MicroSD (up to 32GB), Motion Detector, IR backlight", price_grn: 750.00, wholesale_price_grn: 601.00, "prod_cat": {"$ref": "Product_categories", "$id": "1"}})
db.Product_list.insert({_id: 11995, full_name: "TV Console R69 Allwinner 4 cores / 1GB DDR3 RAM / 8GB / Wi-Fi / HDMI 1.4 / LAN 100Mbit Smart TV Box Android 7.1", price_grn: 699.00, wholesale_price_grn: 726.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 12119, full_name: "TV Console R69 Allwinner 4 cores / 2GB DDR3 RAM / 16GB / Wi-Fi / HDMI 1.4 / LAN 100Mbit Smart TV Box Android 7.1", price_grn: 899.00, wholesale_price_grn: 929.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 10989, full_name: "Scishion V88 TV Console 4-core RK3229 (1.6 GHz) / 1GB RAM / 8GB storage / Mali-450 Smart Tv Box Android", price_grn: 649.00, wholesale_price_grn: 855.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 12183, full_name: "TV Set-top box TANIX mini S905W 4 cores / 2GB RAM / 16GB / Mali-450 / Wi-Fi / 2 USB 2.0 Smart Tv Box Android 7.1", price_grn: 949.00, wholesale_price_grn: 1014.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 11509, full_name: "TV Set-top box Tanix TX3 Max S905W 4 cores / 2GB RAM / 16GB / Wi-Fi / Bluetooth Smart TV Box Android 7.1", price_grn: 1199.00, wholesale_price_grn: 1318.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 12248, full_name: "Tanix TX6 Allwiner H6 TV Console 4 cores / 2GB RAM / 16GB / Wi-Fi 2.4 + 5GHz / Bluetooth 4.1 Smart TV Box Android 9.0", price_grn: 1149.00, wholesale_price_grn: 1042.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 11982, full_name: "TV Tanix TX6 Allwiner H6 4-core / 4GB RAM / 32GB / Wi-Fi 2.4 + 5GHz / Bluetooth 4.1 Smart TV Box Android 9.0", price_grn: 1449.00, wholesale_price_grn: 1490.00, "prod_cat": {"$ref": "Product_categories", "$id": "2"}})
db.Product_list.insert({_id: 10949, full_name: " X96 Mini S905W TV Console 4 cores / 1GB RAM / 8GB Smart Tv Box Android 7.1", price_grn: 849.00, wholesale_price_grn: 976.00, "prod_cat": {"$ref": "Product_categories", "$id":  "2"}})
db.Product_list.insert({_id: 11167, full_name: "Joystick Wireless for Smartphone, TV Box, X3 WIRELESS Computer", price_grn: 368.00, wholesale_price_grn: 340.00, "prod_cat": {"$ref": "Product_categories", "$id": "3"}})
db.Product_list.insert({_id: 12018, full_name: "Wireless Joystick for Smartphone, TV Box, X3 WIRELESS Computer bundled with Smartphone Mount", price_grn: 322.00, wholesale_price_grn: 297.00, "prod_cat": {"$ref": "Product_categories", "$id": "3"}})
db.Product_list.insert({_id: 11168, full_name: "Attaching the joystick to the phone", price_grn: 74.00, wholesale_price_grn: 68.00, "prod_cat": {"$ref": "Product_categories", "$id": "3"}})
db.Product_list.insert({_id: 11965, full_name: " Wall mount bracket H1 for TV set 18cm. by 15cm.", price_grn: 185.00, wholesale_price_grn: 173.00, "prod_cat": {"$ref": "Product_categories", "$id": "3"}})
db.Product_list.insert({_id: 11937, full_name: "GOLDEN MEDIA Supervision Board 2 QWERTY Mini Keyboard with Integrated Touchpad Touchpad", price_grn: 449.00, wholesale_price_grn: 425.00, "prod_cat": {"$ref": "Product_categories", "$id": "4"}})
db.Product_list.insert({_id: 10993, full_name: "Mini keyboard with touchpad for Smart Android TV with Black batteries", price_grn: 299.00, wholesale_price_grn: 250.00, "prod_cat": {"$ref": "Product_categories", "$id": "4"}})
db.Product_list.insert({_id: 10991, full_name: "Mini backlit keyboard (3 colors), touchpad for Smart Android TV", price_grn: 349.00, wholesale_price_grn: 323.00, "prod_cat": {"$ref": "Product_categories", "$id": "4"}})
db.Product_list.insert({_id: 11966, full_name: "Portable folding Bluetooth keyboard with Touchpad, on battery", price_grn: 799.00, wholesale_price_grn: 707.00, "prod_cat": {"$ref": "Product_categories", "$id": "4"}})
db.Product_list.insert({_id: 11757, full_name: "Air Mouse G10 AIR with MICROPHONE for media setups, TVs", price_grn: 299.00, wholesale_price_grn: 289.00, "prod_cat": {"$ref": "Product_categories", "$id": "5"}})
db.Product_list.insert({_id: 11562, full_name: "Air Mouse T2 Air Remote Control for Media Set-top boxes, TVs", price_grn: 299.00, wholesale_price_grn: 213.00, "prod_cat": {"$ref": "Product_categories", "$id": "5"}})
db.Product_list.insert({_id: 12221, full_name: "Voice control remote control for G20S set top boxes", price_grn: 299.00, wholesale_price_grn: 236.00, "prod_cat": {"$ref": "Product_categories", "$id": "5"}})
db.Product_list.insert({_id: 12128, full_name: "TV box remote control", price_grn: 180.00, wholesale_price_grn: 149.00, "prod_cat": {"$ref": "Product_categories", "$id": "5"}})
db.Product_list.insert({_id: 11035, full_name: "Remote control for TV box programmable", price_grn: 180.00, wholesale_price_grn: 150.00, "prod_cat": {"$ref": "Product_categories", "$id": "5"}})
db.Product_list.insert({_id: 12188, full_name: "Car vacuum cleaner DC 12V, 60W power from the cigarette lighter", price_grn: 88.00, wholesale_price_grn: 81.00, "prod_cat": {"$ref": "Product_categories", "$id": "6"}})
db.Product_list.insert({_id: 12059, full_name: "Headlight Bailong BL-6902, Q5 Cree, 3 d.", price_grn: 354.00, wholesale_price_grn: 295.00, "prod_cat": {"$ref": "Product_categories", "$id": "7"}})
db.Product_list.insert({_id: 12192, full_name: "Bailong flashlight bicycle BL-908, 5 LED, power 3  1.5 AAA, BOX", price_grn: 99.00, wholesale_price_grn: 99.00, "prod_cat": {"$ref": "Product_categories", "$id": "7"}})
db.Product_list.insert({_id: 11833, full_name: "Besder HD 720P IP Camera for Wi-Fi, Night Vision", price_grn: 668.00, wholesale_price_grn: 617.00, "prod_cat": {"$ref": "Product_categories", "$id": "8"}})
db.Product_list.insert({_id: 12197, full_name: "Model of the inner chamber dome A8-2", price_grn: 85.00, wholesale_price_grn:  56.00, "prod_cat": {"$ref": "Product_categories", "$id": "9"}})
db.Product_list.insert({_id: 12198, full_name: "Exterior Camera DUMMY IR Model, Silver, Q50", price_grn: 125.00, wholesale_price_grn: 101.00, "prod_cat": {"$ref": "Product_categories", "$id": "9"}})
db.Product_list.insert({_id: 11608, full_name: "USB Flash 3.0 Smartbuy 32GB Dock Black (SB32GBDK-K3)", price_grn: 130.00, wholesale_price_grn: 118.00, "prod_cat": {"$ref": "Product_categories", "$id": "10"}})
db.Product_list.insert({_id: 10039, full_name: "Smartbuy 32GB Crown Black USB Flash Drive (SB32GBCRW-K)", price_grn: 125.00, wholesale_price_grn: 104.00, "prod_cat": {"$ref": "Product_categories", "$id": "10"}})



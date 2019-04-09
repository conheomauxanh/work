$(window).on('load', function () {
	var productList = [];
	var productLength = 20;
	var productPrototype = {
		name: "Nike ACG",
		description: "Men's T-Shirt",
		price: 799999
	};

	for (var i = 0; i < productLength; i++){
		var randPrice = Math.floor((Math.random() * 1000000) + 100000);
		var fixRandPrice = Math.floor(randPrice/1000)*1000;
		var tPrice = fixRandPrice + " đ";
		productList.push({
			name: "Nike T-Shirt " + (i + 1),
			description: "Men's T-Shirt",
			price: tPrice
		});
	};

	$(document).ready(function appendProduct () {
		for (var i = 0; i < productLength; i++){
			var productId = "inf-name-" + i;
			var productHtml = 	'<div class="img-product">' +
									'<div class="big-images">' +
										'<a href="#"">' +
											'<img src="https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=AQ1201_395">' +
										'</a>' +
									'</div>' +
									'<div class="inf-img">' +
										'<p id=' + productId + ' style="color: black; font-weight: bold;">' +
											productList[i].name +
										'</p>' +
										'<p>' + productList[i].description + '</p>' +
										'<p>' + productList[i].price + '</p>' +
									'</div>' +
								'</div>';

			$(".all-img-product").append(productHtml);
		};
	});
});

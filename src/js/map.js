initMap();

async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

	// Import the package to add a default marker
	const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');


	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [37.374884, 55.847927],

				// Уровень масштабирования
				zoom: 14
			}
		},
		[
			// Add a map scheme layer
			new YMapDefaultSchemeLayer({}),
			// Add a layer of geo objects to display the markers
			new YMapDefaultFeaturesLayer({})
		]
	);
	// const mk = document.createElement('img');
	// mk.className = 'icon-marker';
	// mk.src = './../img/footer/marker.svg';
	// mk.setAttribute('alt', 'Маркер местоположения приюта по адресу Москва, Пятницкое шоссе, дом 28');
	// map.addChild(new YMapMarker({ coordinates: [37.374884, 55.847927] }, mk))
	// const marker = new YMapDefaultMarker({
	// 	coordinates: [37.565021, 55.723151],
	// 	iconSrc: './../img/footer/marker.svg',
	// 	title: 'Game Over',
	// 	color: '#6C0287'
	// });
	// map.addChild(marker);
}
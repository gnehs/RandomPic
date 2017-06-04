// 數字，請改成底下圖片的數量
var imgnumber = Math.floor(Math.random()*15);

// 您可以替換底下圖片網址來改變預設的隨機特色圖片
// *圖片後方請加"," 但是最後一個不需要
// 你可以自行刪掉這些註解
// 這些圖片是 CC0 網站拿來的 OuO
var imgurl = [
    'https://i.imgur.com/8PAkaT5.jpg',
    'https://i.imgur.com/97za76I.jpg',
	'https://i.imgur.com/G9kdJTn.jpg',
	'https://i.imgur.com/oyoQlIO.jpg',
	'https://i.imgur.com/TuZRBRR.jpg',
	'https://i.imgur.com/IIai94v.jpg',
	'https://i.imgur.com/pfaWNb9.jpg',
	'https://i.imgur.com/4qtsOf2.jpg',
	'https://i.imgur.com/Gg0HJa8.jpg',
	'https://i.imgur.com/73fVUB6.jpg',
	'https://i.imgur.com/y6GIgER.jpg',
	'https://i.imgur.com/CcG3J95.jpg',
	'https://i.imgur.com/Z7PSFXE.jpg',
	'https://i.imgur.com/d4bjGeB.jpg',
	'https://i.imgur.com/mNdGZ17.jpg'
];

//輸出隨機特色圖片
document.write('<img src="'+imgurl[imgnumber]+'">');

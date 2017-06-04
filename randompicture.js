// 數字，請改成底下圖片的數量
var imgnumber = Math.floor(Math.random() * 15);

// 您可以替換底下圖片網址來改變預設的隨機特色圖片
// *圖片後方請加"," 但是最後一個不需要
// 你可以自行刪掉這些註解
var imgurl = [
    '//i.imgur.com/8PAkaT5.jpg',
    '//i.imgur.com/97za76I.jpg',
    '//i.imgur.com/G9kdJTn.jpg',
    '//i.imgur.com/oyoQlIO.jpg',
    '//i.imgur.com/TuZRBRR.jpg',
    '//i.imgur.com/IIai94v.jpg',
    '//i.imgur.com/pfaWNb9.jpg',
    '//i.imgur.com/4qtsOf2.jpg',
    '//i.imgur.com/Gg0HJa8.jpg',
    '//i.imgur.com/73fVUB6.jpg',
    '//i.imgur.com/y6GIgER.jpg',
    '//i.imgur.com/CcG3J95.jpg',
    '//i.imgur.com/Z7PSFXE.jpg',
    '//i.imgur.com/d4bjGeB.jpg',
    '//i.imgur.com/mNdGZ17.jpg'
];

//輸出隨機特色圖片
document.write('<img src="' + imgurl[imgnumber] + '">');
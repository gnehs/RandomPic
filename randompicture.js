// *圖片後方加"," 但是最後一個不需要
// 這些圖片是 CC0 網站或是可商用圖庫拿來的 OuO
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
    '//i.imgur.com/AUTVt3g.jpg',
    '//i.imgur.com/EyGeh8i.jpg',
    '//i.imgur.com/ezmuTGY.jpg',
    '//i.imgur.com/6B8Q89f.jpg',
    '//i.imgur.com/mNdGZ17.jpg',
    '//i.imgur.com/jMsSAxp.jpg',
    '//i.imgur.com/9vJb7JL.jpg',
    '//i.imgur.com/ngc15zI.jpg',
    '//i.imgur.com/rhMP9yp.jpg',
    '//i.imgur.com/Qv4WRBP.jpg',
    '//i.imgur.com/LyT05fo.jpg',
    '//i.imgur.com/Nj7DxiH.jpg',
];
//算出要輸出的圖片
var imgnumber = Math.floor(Math.random() * imgurl.length);
//輸出隨機特色圖片
document.write('<img src="'+imgurl[imgnumber]+'">');

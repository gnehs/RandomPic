// ================================
// 隨機圖片
// ================================
// 最後更新 2017/8/13
// ================================
// 圖片來源：
// - 網路 CC0 圖庫
// - 棒棒勝提供
// ================================
var img = [
    '//i.imgur.com/8PAkaT5.jpg',
    '//i.imgur.com/97za76I.jpg',
    '//i.imgur.com/oyoQlIO.jpg',
    '//i.imgur.com/TuZRBRR.jpg',
    '//i.imgur.com/pfaWNb9.jpg',
    '//i.imgur.com/4qtsOf2.jpg',
    '//i.imgur.com/Gg0HJa8.jpg',
    '//i.imgur.com/73fVUB6.jpg',
    '//i.imgur.com/y6GIgER.jpg',
    '//i.imgur.com/CcG3J95.jpg',
    '//i.imgur.com/Z7PSFXE.jpg',
    '//i.imgur.com/AUTVt3g.jpg',
    '//i.imgur.com/EyGeh8i.jpg',
    '//i.imgur.com/ezmuTGY.jpg',
    '//i.imgur.com/6B8Q89f.jpg',
    '//i.imgur.com/mNdGZ17.jpg',
    '//i.imgur.com/jMsSAxp.jpg',
    '//i.imgur.com/9vJb7JL.jpg',
    '//i.imgur.com/ngc15zI.jpg',
    '//i.imgur.com/Qv4WRBP.jpg',
    '//i.imgur.com/LyT05fo.jpg',
    '//i.imgur.com/Nj7DxiH.jpg',
    '//i.imgur.com/ltyLKfy.jpg',
    '//i.imgur.com/gSmnLod.jpg',
    '//i.imgur.com/VzIUmmB.jpg',
    '//i.imgur.com/2kOe547.jpg',
    '//i.imgur.com/nHkZGh0.jpg',
    '//i.imgur.com/ObkQyqf.jpg',
    '//i.imgur.com/KdFGVYt.jpg',
    '//i.imgur.com/2hPLTDd.jpg',
    '//i.imgur.com/E8LxPuP.jpg',
    '//i.imgur.com/buLbzHL.jpg',
    '//i.imgur.com/7IGDX0M.jpg',
    '//i.imgur.com/b3RxxYJ.jpg',
    '//i.imgur.com/57jDFCk.jpg',
    '//i.imgur.com/nSAojC0.jpg',
    '//i.imgur.com/IHOoKiC.jpg',
];
//算出要輸出的圖片
var imgnum = Math.floor(Math.random() * img.length);
//輸出隨機圖片
document.write('<img src="' + img[imgnum] + '">');
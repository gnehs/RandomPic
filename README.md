# RandomPic
這是一個拿來輸出隨機圖片的東西

## 開始使用
### V1
把這個放在你想顯示圖片的地方
```
<script src="randompicture.js"></script>
```
然後他會輸出
```
<img src="//i.imgur.com/Z7PSFXE.jpg">
```

### V2 (支援非同步載入)
先載入本 script
```
<script src="randompicture2.js" defer="true"></script>
```
然後在想放隨機圖片的地方加入
```
<img class="randomPic">
```
然後他會輸出
```
<img class="randomPic" src="//i.imgur.com/Z7PSFXE.jpg">
```
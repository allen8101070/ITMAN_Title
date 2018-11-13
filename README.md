# video.js 影片標題套件 ITMAN_title
[2019 年 IT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/ironman) videojs 範例-標題套件

## 安裝、引入檔案
git clone 此專案後，取出 ITMAN.title.css 和 ITMAN.title.js兩個檔案。 在您的專案安裝、引入 vidoejs 後安裝、引入此套件檔案

```
<!-- CSS -->
<link href="路徑/ITMAN.title.css" rel="stylesheet">

<!-- JS -->
<script src='路徑/ITMAN.title.js'></script>
```
## 使用方式

使用 `videojs()` 建立好 Videojs 播放器物件後，用 `.ITMAN_title()` 方法來新增標題

### 範例
```
const player = videojs('your_video_id');

player.ITMAN_title({
    text:"標題文字",
    opacity: 0.8
})
```

### .ITMAN_title( ) 可傳物件屬性、值
| 屬性 | 值 | 描述 | 預設 |
| -------- | -------- | -------- | -------- |
| text     | 字串     | 標題文字     | |
| top     | 字串 ( 數字加單位 )   | 絕對定位左上角位置的 top     |"0.6rem" |
| bottom    | 字串 ( 數字加單位 )   | 絕對定位左上角位置的 bottom       ||
| left   | 字串 ( 數字加單位 )     | 絕對定位左上角位置的 left    |"0.6rem" |
| right    | 字串 ( 數字加單位 )    | 絕對定位左上角位置的 right    | |
| url    | 字串 ( URL 路徑 )    | 替標題增加此連結    | |
| className   | 字串   | CSS 的 class 名稱(添加在標題上)   | |
| opacity  | 數值 ( 0.1 ~ 1 )    | 透明度    | 1|
| fontSize | 字串   | 文字大小    | "1rem" |

### className
className 的設定為，當使用者傳入自己的 class 樣式名稱，會接續在 ITMAN.title.css 的樣式後面變成
```
<div class="itman-title 你傳入的樣式名稱">
  <span>你的標題<span>
</div>
```
> 要注意的是，自訂 class 樣式，無法覆蓋 文字大小、透明度和絕對定位的 CSS 設定，因為這些 CSS 設置是作為 `.ITMAN_title( )` 物件屬性值添加進標題(行內樣式)，別忘了寫在 HTML 上的 CSS 行內樣式權重會大於 class。
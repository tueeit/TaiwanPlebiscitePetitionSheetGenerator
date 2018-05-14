# 公投連署大平台

## 緣起
[勞權公投](https://www.facebook.com/permalink.php?story_fbid=1969812579715740&id=1907997019230630)活動進入第二階連署，但因為[中央選舉委員會](https://www.cec.gov.tw/)不知道什麼時候才能把線上公投連署生出來，導致必須以實體方式進行連署，並需與意向表達無關的填寫格式、蒐集整理等問題奮鬥，大幅降低連署效率。


[割闌尾計畫](http://appy.tw/)曾經建立線上連署器，這是我們所知的第一份實作，雖然形式仍是實體連署，但利用資訊技術降低了部份實體連署的問題，簡化了連署流程並確保了一致連署資料格式，並可以將連署書直接上傳至ibon，其發想及方便性令我們印象深刻。

割闌尾計畫的相關工具皆[開放原始碼](https://github.com/appy-tw)。

去年[時代力量](https://www.newpowerparty.tw/)再次建立了[公投專區](https://referendum.npp.vote/)，並利用廣告回函的方式進一步降低寄出公投連署的門檻，但工具並沒有被釋放到公眾領域。


近來時代力量連署書格式的輸出格式發生[爭議](https://www.facebook.com/huimin1972/posts/10204575696108346)，我們認為有需要建立另一個系統，直接使用中央選舉委員會所發出的連署書，進一步降低因格式相關問題導致公投連署書被剔除的風險。

又割闌尾計畫的程式架構，在架設服務上有較高的資源需求及技術門檻，因此我們決定重新做一個更輕量化的產生器，並吸收前人的經驗，讓系統在使用上更直覺方便。


我們期望這次建立的公投連署書產生工具，對往後的連署活動能有所幫助。


但更希望官方的線上連署系統趕快做出來。

## 相容性
目前確認能在以下環境運作正常：
- Windows 7 Pro SP 1 + IE 11
- Windows 7 Pro SP 1 + Firefox 60.0
- Windows 8 + IE 11
- Windows 8 + Firefox 59.0.3
- Windows 8 + Chrome 66.0.3359.139
- Win 10 + Edge 41.16299.371.0
- Mac OS + Safari
- Android 8.0.0 + Chrome 66.0.3359.139

目前確認在以下環境運作異常：
- Windows 7 Pro SP 1 + Chrome 66.0.3359.158  
省市、縣市、鄉鎮市區、村里及路街等圈選格偏移。
- Android 8.0.0 + Firefox 59.0.2  
身份證字號偏移。

## 授權
本程式由[電資工會](http://www.tueeit.org.tw/)開發維護，對非政府單位及非營利組織採用[MIT](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/LICENSE)授權。

政府單位（尤其是[中央選舉委員會](https://www.cec.gov.tw/)）及營利事業單位若有使用需求，請洽本會洽談授權事宜。

## 聲明
本程式不會蒐集、紀錄、追蹤任何個人資訊：為了連署所填寫的所有個人資訊，只在產生連署書時使用。

但電資工會無法保證其他基於本程式的衍生程式不會自行添加蒐集行為。

## 使用說明
如果要在程式中新增公投連署項目，可依照下列步驟執行（需具備處理HTML、CSS、Javascript能力），以`制定國定假日法`為例：
1. 修改[`js/PetitionSheet.js`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/js/PetitionSheet.js#L294)中定義的連署書收件人姓名、地址及郵遞區號。
2. 清空`topic`資料。
3. 為公投連署決定一個英文名字，並在`topic`目錄底下以這個名字建立子目錄（以下稱為**公投案目錄**）。  
我們將`制定國定假日法`取名為`InitiativeNationalHolidayLaw`，並建立[`topic/InitiativeNationalHolidayLaw`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/tree/master/topic/InitiativeNationalHolidayLaw)。
4. 將連署書掃描為圖檔，放入**公投案目錄**。  
例如[`topic/InitiativeNationalHolidayLaw/PetitionSheet.jpg`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/topic/InitiativeNationalHolidayLaw/PetitionSheet.jpg)
5. 在**公投案目錄**底下建立`PetitionSheet.css`，用來描述連署書圖檔位置，及各填寫欄位的位置。  
可參考[`topic/InitiativeNationalHolidayLaw/PetitionSheet.css`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/topic/InitiativeNationalHolidayLaw/PetitionSheet.css)
6. 修改`index.html`，將公投連署中英文名字加入`select#topic`的option中。  
例如制定國定假日法的[option](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/index.html#L67)
7. 利用預覽功能微調步驟3中描述的各欄位位置。  
目前沒有專用的工具，建議利用瀏覽器的元件檢測功能。

## 致謝
「線上產生連署書」及「讓連署書可以直接封口當作信封寄出」等概念經過「割闌尾計畫」至「時代力量公投平台」的驗證，證實了這個方法對實體連署的幫助，並讓我們發現連署各種不合理的潛規則，能依此減少連署的阻礙。

謹此對割闌尾計畫及時代力量的努力致謝。

也感謝所有協助開發本程式的人。

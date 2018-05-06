# 公投連署大平台

## 綠起
[勞權公投](https://www.facebook.com/permalink.php?story_fbid=1969812579715740&id=1907997019230630)活動進入第二階連署，
但因為[中央選舉委員會](https://www.cec.gov.tw/)不知道什麼時候才能把線上公投連署生出來，
導致必須以實體方式進行連署，
並需與意向表達無關的填寫格式、蒐集整理等問題奮鬥，
大幅降低連署效率。

為此，
[時代力量](https://www.newpowerparty.tw/)建立了[公投專區](https://referendum.npp.vote/)，
雖然形式仍是實體連署，
但利用資訊技術降低了部份實體連署的問題，
簡化了連署流程並確保了一致連署資料格式，
並利用廣告回函的方式進一步降低寄出公投連署的門檻，
這是我們所知的第一份實作，
其發想及方便性令我們印象深刻。

但近來對連署書格式的輸出格式[爭議](https://www.facebook.com/huimin1972/posts/10204575696108346)，
我們決定做一個類似的系統，
直接使用中央選舉委員會所發出的連署書，
進一步降低因格式相關問題導致公投連署書被剔除的風除；
並提供即時預覽，
方便確認輸出結果。

我們也希望藉此建立一個可重用的公投連署書產生工具，
降低以後的公投連署的工作負擔。

## 相容性
目前確認能在以下環境運作正常：
- Windows 8 + IE 11
- Windows 8 + Firefox 59.0.3
- Windows 8 + Chrome 66.0.3359.139
- Mac OS + Safari

## 授權
本程式由[電資工會](http://www.tueeit.org.tw/)開發維護，
對非政府單位及非營利組織採用[MIT](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/LICENSE)授權。

政府單位（尤其是[中央選舉委員會](https://www.cec.gov.tw/)）及營利事業單位若有使用需求，請洽本會洽談授權事宜。

## 聲明
本程式不會蒐集、紀錄、追蹤任何個人資訊：為了連署所填寫的所有個人資訊，只在產生連署書時使用。
但電資工會無法保證其他基於本程式的衍生程式不會自行添加蒐集行為。

## 使用說明
如果要在程式中新增公投連署項目，可依照下列步驟執行（需具備處理HTML、CSS能力），以`制定國定假日法`為例：
1. 為公投連署決定一個英文名字，並在`topic`目錄底下以這個名字建立子目錄（以下稱為**公投案目錄**）。
我們將`制定國定假日法`取名為`InitiativeNationalHolidayLaw`，
並建立[`topic/InitiativeNationalHolidayLaw`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/tree/master/topic/InitiativeNationalHolidayLaw)。
2. 將連署書掃描為圖檔，放入**公投案目錄**。
例如[`topic/InitiativeNationalHolidayLaw/PetitionSheet.jpg`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/topic/InitiativeNationalHolidayLaw/PetitionSheet.jpg)
3. 在**公投案目錄**底下建立`PetitionSheet.css`，用來描述連署書圖檔位置，及各填寫欄位的位置。
可參考[`topic/InitiativeNationalHolidayLaw/PetitionSheet.css`](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/topic/InitiativeNationalHolidayLaw/PetitionSheet.css)
4. 修改`index.html`，將公投連署中英文名字加入`select#topic`的option中。
例如制定國定假日法的[option](https://github.com/tueeit/TaiwanPlebiscitePetitionSheetGenerator/blob/master/index.html#L67)
5. 利用預覽功能微調步驟3中描述的各欄位位置。
目前沒有專用的工具，建議利用瀏覽器的元件檢測功能。

## 致謝
「線上產生連署書」及「在連署書背面印上資料，使連署書在三折後可以直接封口當作信封寄出」等概念皆出自[時代力量公投平台](https://referendum.npp.vote/)，
如果沒有公投平台，
並從中發現中選會對連署書格式的嚴格要求，
可能就不會有本程式。

謹此對時代力量對行使公投權的努力致謝。

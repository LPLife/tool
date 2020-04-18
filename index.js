// 获取链接参数
export function getQueryFromUrl(key) {
    let search = location.search,
        obj = {};
    search = decodeURIComponent( search.substring(1) );
    let arr = search.split('&'),
        len = arr.length,
        i;
    if( len > 0 ) {
        for( i = 0; i < len; i ++ ) {
            let subArr = arr[i].split('=');
            obj[subArr[0]] = subArr[1];
        }
    }
    return obj[key];
}
// 判断是否在微信环境
export function inWeChat(){
    var ua = navigator.userAgent.toLowerCase();
    return /micromessenger/i.test(ua);
}
// 安卓设备
export function isAndriod() {
    let ua = navigator.userAgent;
    return /android/i.test(ua);
}
// ios设备
export function isIOS() {
    let ua = navigator.userAgent;
    return /iphone|ipad|ipod/i.test(ua);
}
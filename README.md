# 一个简单的React Toast Demo

```
git clone ...
yarn start
```

# usage

```javascript
import Toast from '../../components/Toast';

/** 
 * msg: string // 非必填，默认'success'
 * duration: 3000
*/
Toast.success(msg, duration);

/** 
 * msg: string // 非必填，默认'error'
 * duration: 3000
*/
Toast.error(msg, duration);

/** 
 * msg: string // 必填
 * duration: 3000，默认3000
*/
Toast.info(msg, duration);

/** 
 * msg: string // 非必填，默认'加载中...'
 * duration: number, 不填或者填0，不会自动关闭，需要手动调Toast.hideToast()关闭
*/
Toast.loading(msg, duration);


// 主动关闭
Toast.hideToast()
```

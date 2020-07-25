import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import successIcon from './images/image_toast_success.png';
import errorIcon from './images/image_toast_error.png';
import loadingIcon from './images/image_toast_loading.png';

const createDom = () => {
    if (document.getElementById('ec-mobile-mask')) {
        this.hideToast();
    }
    let div = document.createElement('div');
    div.setAttribute('id', 'ec-mobile-mask');
    div.setAttribute('class', 'ec-mobile-mask')
    document.body.appendChild(div);
    return div;
}

const IconDom = (msg, type) => {
    const icon = {
        success: successIcon,
        error: errorIcon,
        loading: loadingIcon,
        info: ''
    }
    return (
        <div className={`ec-mobile-toast ec-mobile-toast-${type}`}>
            {
                type === 'info' ? null : (
                    <img
                        src={icon[type]}
                        alt="" className={type === 'loading' ? styles.rotation : ''}
                    />
                )
            }
            <p>{msg}</p>
        </div>
    )
}

export default {
    hideToast() {
        if(document.getElementById("ec-mobile-mask")) {
            document.getElementById('ec-mobile-mask').remove();
        }
    },
    success(msg = 'success', duartion = 1000) {
        const div = createDom();
        const dom = IconDom(msg, 'success')
        ReactDOM.render(dom, div);
        setTimeout(() => {
            this.hideToast()
        }, duartion);
    },
    info(msg, duartion = 3000) {
        const div = createDom();
        const dom = IconDom(msg, 'info')
        ReactDOM.render(dom, div);
        setTimeout(() => {
            this.hideToast()
        }, duartion);
    },
    error(msg = 'error', duartion = 1000) {
        const div = createDom();
        const dom = IconDom(msg, 'error')
        ReactDOM.render(dom, div);
        setTimeout(() => {
            this.hideToast()
        }, duartion);
    },
    loading(msg = '加载中...', duartion) {
        const div = createDom();
        const dom = IconDom(msg, 'loading')
        ReactDOM.render(dom, div);
        if (duartion) {
            setTimeout(() => {
                this.hideToast()
            }, duartion);
        }
    }
}

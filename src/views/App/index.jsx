import React, { useCallback } from 'react';
import Toast from '../../components/Toast';
import styles from './index.less';

const App = () => {
    // success
    const openToastSuccess = useCallback(() => {
        Toast.success('success')
    }, [])
    // info
    const openToastInfo = useCallback(() => {
        Toast.info('测试一下')
    }, []);
    // error
    const openToastError = useCallback(() => {
        Toast.error('出错了')
    }, []);
    // loading
    const openToastLoading = useCallback(() => {
        Toast.loading('加载中', 3000)
    }, []);
    return (
        <div style={{ textAlign: 'center'}}>
            <button onClick={openToastSuccess} className={styles.btn}>Success</button>
            <button onClick={openToastInfo} className={styles.btn}>Info</button>
            <button onClick={openToastError} className={styles.btn}>Error</button>
            <button onClick={openToastLoading} className={styles.btn}>Loading</button>
        </div>
    );
};

export default App;

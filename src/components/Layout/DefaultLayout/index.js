import Header from './Header';
import Slidebar from './Slidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Slidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;

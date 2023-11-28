import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';

const cx = classNames.bind(styles);
function Slidebar() {
    return <h1 className={cx('wrapper')}>SlideBar</h1>;
}

export default Slidebar;

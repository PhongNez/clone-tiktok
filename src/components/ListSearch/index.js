import classNames from 'classnames/bind';
import styles from './ListSearch.module.scss';

const cx = classNames.bind(styles);
function ListSearch({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default ListSearch;

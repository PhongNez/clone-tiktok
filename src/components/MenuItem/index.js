import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={data.icon} className={cx('item')}>
                {data.title}
            </Button>
        </div>
    );
};

export default MenuItem;

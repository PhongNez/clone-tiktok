import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    console.log('check ảnh: ', image);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Lỗi" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading */}
                    <div className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>Tải lên</div>
            </div>
        </header>
    );
}

export default Header;

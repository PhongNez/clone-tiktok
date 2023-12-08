import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import ListSearch from '../../../ListSearch';
import AccountItem from '../../../AccountItem';
import { useEffect, useState } from 'react';
import Button from '../../../Button';
const cx = classNames.bind(styles);

function Header() {
    console.log('check ảnh: ', image);
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setListSearch([1, 2, 3, 4]);
        }, 5000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Lỗi" />
                </div>
                <Tippy
                    interactive={true}
                    visible={listSearch.length > 0 ? true : false}
                    render={(attrs) => (
                        <ListSearch tabIndex="-1" {...attrs}>
                            <div className={cx('title-account')}>Tài khoản</div>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </ListSearch>
                    )}
                >
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
                </Tippy>
                <div className={cx('action')}>
                    <Button upload>Tải lên</Button>
                    <Button rounded>Tải ứng dụng</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;

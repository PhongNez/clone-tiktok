import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import MenuItem from '../MenuItem';
const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const render = () => {
        return items.map((item) => <MenuItem data={item} />);
    };

    return (
        <Tippy
            interactive={true}
            visible={true}
            placement="bottom-end"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx('menu-items')}>
                    {render()}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Button = ({
    children,
    to,
    href,
    primary,
    outline,
    small,
    large,
    upload,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
    onClick,
    ...propTaoLao
}) => {
    let Compo = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        upload,
        disabled,
        rounded,
    });

    const props = { onClick, ...propTaoLao };

    if (disabled) {
        //Cách 1
        // delete props.onClick; // Xóa 1 property trong object

        //Cách 2
        //Object.keys() trả về 1 cái mảng chứa tên các cái key

        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                console.log('on Click =', 'Phong ne');
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Compo = Link;
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }
    return (
        <Compo className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Compo>
    );
};

export default Button;

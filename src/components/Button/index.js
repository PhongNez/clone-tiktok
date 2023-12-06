import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Button = ({ children, to, href, primary, ...propTaoLao }) => {
    let Compo = 'button';
    const classes = cx('wrapper', {
        primary,
    });

    const props = { ...propTaoLao };

    if (to) {
        props.to = to;
        Compo = Link;
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }
    return (
        <Compo className={classes} {...props}>
            {children}
        </Compo>
    );
};

export default Button;

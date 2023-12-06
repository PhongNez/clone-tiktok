import classNames from 'classnames/bind';
import stlyes from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(stlyes);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1702018800&x-signature=UfzEzsy9h5Dmcc93dX7Rmm%2BuW%2Fc%3D"
            />
            <div className={cx('content')}>
                <div>
                    <span className={cx('username')}>tiger050794</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </div>
                <div className={cx('name')}>Son Tung M-TP</div>
            </div>
        </div>
    );
}

export default AccountItem;

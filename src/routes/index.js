import Following from '../components/Following';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Upload from '../components/Upload';
import HeaderUpload from '../components/Layout/HeaderUpload';
import Search from '../components/Search';

const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderUpload },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

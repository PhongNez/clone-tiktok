import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((item) => {
                    const Page = item.component;
                    let Layout = DefaultLayout;
                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

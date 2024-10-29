import Header from '../../components/global/Header';
import { Outlet, useParams } from 'react-router-dom';

const MainLayout = () => {
    const { cityName } = useParams();
    return (
        <div>
            <Header cityName={cityName}></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
           )
};

export default MainLayout;
import Header from '../templates/Header';
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';
import getHash from '../utils/GetHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes={
    '/':Home,
    '/:id':Characters,
    '/Contact': 'contact', 
};

const router= async()=>{
    const header= null || document.getElementById("Header");
    const content=null || document.getElementById("Content");
    
    header.innerHTML= await Header();

    let Hash= getHash();
    let route = await resolveRoutes(Hash);
    let render= routes[route] ? routes[route] : Error404;

    content.innerHTML= await render();
};

export default router;
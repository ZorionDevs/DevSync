import Navigation from '../../lib/Navigation';

//Pages
import Home from '../../pages/Home';
import Community from '../../pages/Community';
import Notify from '../../pages/Notify';
import Search from '../../pages/Search';

export default function BottomNavigation(){
  const Nav = new Navigation({ inicialPage: "Home" });
  Nav.Screen({ name: "Home", component: Home });
  Nav.Screen({ name: "Community", component: Community });
  Nav.Screen({ name: "Notify", component: Notify });
  Nav.Screen({ name: "Search", component: Search });
  
  return <Nav.View/>
}
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../HeaderTab';

//Selects Pages
import Todos from '../pages/Todos';
import Cursos from '../pages/Cursos';
import Livros from '../pages/Livros';
import Roadmaps from '../pages/Roadmaps';

class HeaderNavigation {
  constructor({ inicialPage }){
    const [selectPage, setSelectPage] = useState(inicialPage); global.selectHeader = selectPage;
    global.setSelectHeader = (pageName) => { setSelectPage(pageName); };
  }
  
  View(){
    const arraySelect = [
      {name: "Todos", component: Todos},
      {name: "Cursos", component: Cursos},
      {name: "Livros", component: Livros},
      {name: "Roadmaps", component: Roadmaps}
    ];
    const SelectComponents = arraySelect.find(select => select.name == global.selectHeader);
    
    return(
      <>
        <Header navigate={global.setSelectHeader}/>
        <SelectComponents.component/>
      </>
    )
  }
}
export default HeaderNavigation;
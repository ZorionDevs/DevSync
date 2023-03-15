import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import BottomTab, { Visible } from './BottomTab';

class Navigation {
  constructor({ inicialPage }){
    const [arrayPages, setArrayPages] = useState([]); global.arrayPages = arrayPages;
    const [selectPage, setSelectPage] = useState(inicialPage); global.selectPage = selectPage;
    
    this.setArrayPages = (array) => { useEffect(() => { setArrayPages(array) }, []); };
    global.setSelectPage = (pageName) => { setSelectPage(pageName); };
  }
  
  Screen({ name, component }){ this.setArrayPages(obj => [...obj, { name, component }]); }
  
  View(){
    if(global.arrayPages.length == 0) return;
    const PageComponets = global.arrayPages.find(page => page.name == global.selectPage);
    
    return (
      <>
        <PageComponets.component navigate={global.setSelectPage}/>
        <BottomTab navigate={global.setSelectPage}/>
      </>
    )
  }
}
export default Navigation;

export function Navigate(pageName){ global.setSelectPage(pageName) }
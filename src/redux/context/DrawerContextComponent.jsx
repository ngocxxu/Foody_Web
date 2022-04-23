import React, { createContext, useState } from 'react'
import { ItemsMenu } from '../../components/ItemsMenu/ItemsMenu'

const DrawerContext = createContext()

export const DrawerContextComponent = () => {

  const [drawerTable, setDrawerTable] = useState({
    visible: false,
    placement: "left",
  });

  const showDrawer = () => {
    setDrawerTable({
      visible: true,
    });
  };

  const onClose = () => {
    setDrawerTable({
      visible: false,
    });
  };

  return (
    <DrawerContext value={drawerTable}>
      <ItemsMenu/>
    </DrawerContext>
  )
}

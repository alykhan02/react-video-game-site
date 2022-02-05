import React from 'react';
import { SidebarContainer, Icon, 
    CloseIcon, SidebarMenu, 
    SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink>
                <a href="#consoles">Consoles</a>
            </SidebarLink>
            <SidebarLink>
                <a href="#games">Games</a>
            </SidebarLink>
            <SidebarLink>
                <a href="#accessories">Accessories</a>
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to ="/">Cart</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>

  )
};

export default Sidebar;
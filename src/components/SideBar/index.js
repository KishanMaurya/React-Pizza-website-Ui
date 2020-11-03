import React from 'react'
import { CloseIcon, Icon,  SidebarContainer,  SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './SideBarElement'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desserts </SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar

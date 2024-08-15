import { Outlet } from 'react-router-dom';
import { MobileMenu } from './MobileMenu/MobileMenu.tsx';
import { DesctopMenu } from './DesctopMenu/DesctopMenu.tsx';

export const Layout = () => {
  return (
    <>
      <DesctopMenu />
      <MobileMenu />
      <Outlet />
    </>
  )
}

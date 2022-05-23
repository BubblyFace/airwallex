import React, { useContext } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Content } from './Content';
import './index.scss'

export const Component = () => {

    return <div className='main-page-container'>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
}
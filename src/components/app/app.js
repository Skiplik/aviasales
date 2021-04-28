import React from 'react';

import Logo from '../logo';
import Filter from '../filter';
import Tickets from '../tickets';

import './app.scss';

export default function App() {
    return (
        <>
            <header>
                <Logo classes={['app__logo']} />
            </header>
            <main className="app__main">
                <section className="app__filter">
                    <Filter />
                </section>
                <section className="app__tickets">
                    <Tickets />
                </section>
            </main>
        </>
    );
}

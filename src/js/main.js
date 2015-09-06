'use strict';
import React from 'react';
import Header from './header';

main();

function main(){
    React.render(
        <Header />,
        document.getElementById('header')
    );
}

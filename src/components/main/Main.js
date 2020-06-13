import React from 'react';
import Form from './form/SearchForm';
import ArticlesContainer from './articles/ArticlesContainer';

function Main() {
    return ( 
        <main>
            <Form />
            <ArticlesContainer />
        </main>
    );
}

export default Main;
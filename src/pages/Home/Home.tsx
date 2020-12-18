import React, { ReactElement } from 'react';
import { Button } from 'src/components/Button/Button';

export const Home = (): ReactElement => {
    return (
        <div style={{ textAlign: 'center' }}>
            Scalable React starter
            <br />
            <br />
            <Button
                label={'Visit Repository'}
                onClick={() => window.open('https://github.com/thayalangr', '__blank')}
            />
            <br />
            <br />
            Feel free to customize!
        </div>
    );
};

import * as React from 'react';

export default function WidgetCard({ children }) {

    return (
        <div className='tw-container'>
            <div className='tw-red-box'>
            </div>
            <div className='tw-blue-box'>
            </div>

            {children}
        </div>
    );
}
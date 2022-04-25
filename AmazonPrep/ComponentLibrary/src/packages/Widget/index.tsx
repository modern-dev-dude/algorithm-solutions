import * as React from 'react';

export default function WidgetCard(props: WidgetProps): JSX.Element {

    return (
        <div className='tw-container'>
            <div className='tw-red-box'>
            </div>
            <div className='tw-blue-box'>
            </div>
            {props.children}
        </div>
    );
}
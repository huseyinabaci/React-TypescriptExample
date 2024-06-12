import React from 'react';

type RequestProps = {
    status: 'Loading' | 'Success' | 'Error';
}

function Request(props: RequestProps) {
    let message = '';
    if(props.status === 'Loading') {
        message = 'Yükleniyor';
    }
    if(props.status === 'Success') {
        message = 'Başarılı';
    }
    if(props.status === 'Error') {
        message = 'Hata';
    }
    return (  
        <div>{message}</div>
    );
}

export default Request;
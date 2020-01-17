import React from 'react'

export default (
    {
        color = 'white',
        indent = 0,
        nospace = false,
        terminate,
        children,
    }
) => (
    <span className={['code', color].join(' ')}>
        {[...new Array(indent).keys()].map((i) => (
            <span key={i} className="indent">&nbsp;</span>
        ))}
        {children}
        {!!terminate && (
            <span className="code orange">{terminate}</span>
        )}
        {!nospace && '\u00A0'}
    </span>
)

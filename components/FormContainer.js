

import React from 'react'

export default function FormContainer({children}) {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}



import React from 'react'

export default function BodyContainer({children}) {
    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    {children}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

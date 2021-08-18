import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Newsletter from 'components/Newsletter'

import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <figure className="image is-16by9">
                  <img src="images/first-post.png" alt="" />
                </figure>
              </div>
            </div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">December 25, 2018</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">December 25, 2018</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

      <Newsletter />

      


      <section className="hero ">
        <div className="hero-body">
          <div className="container">

            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1 ">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 23, 2018</h2>
                    <h1 className="title has-text-black is-3">Custom 404 Pages</h1>
                    <p className="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                      /source/404.blade.php.
                      To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Fuse Search</h1>
                    <p className="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
                      pre-built Vue.js
                      component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Getting Started</h1>
                    <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Getting Started</h1>
                    <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

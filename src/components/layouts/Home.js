	    // <Sidebar selectElement={this.selectElement.bind(this)} />

import React from 'react'
import { Map } from '../custom'
import { Sidebar, Form, Feature, Footer, Table, Box, Dropdown, Pricing } from '../../theme'

// images:
const promo1 = require('../../../assets/images/promo-1.jpg')
const blog1 = require('../../../assets/images/blog-1.jpg')
const blog2 = require('../../../assets/images/blog-2.jpg')

export default (props) => {

  return(

  	<div>
	    <div className="nav-container nav-container--sidebar">
		  <div className="nav-sidebar-column" style={{padding:0}}>
		    <Map 
              containerElement={<div style={{height:100+'%'}} />} mapElement={<div style={{height:100+'%'}} />} />
		  </div>
		</div>
	    <div className="main-container">

          <section className="text-center">
            <div className="container">
              <div className="row">
                <h2 className="type--uppercase">
                  <em>
                    <strong>T</strong>
                  </em>
                </h2>
                  <Form />
              </div>
            </div>

          </section>

	        <section className="imagebg image--light cover cover-blocks bg--secondary">
	            <div className="background-image-holder hidden-xs">
	                <img alt="background" src={promo1} />
	            </div>
	            <div className="container">
	                <div className="row">
	                    <div className="col-sm-6 col-md-5 col-md-offset-1">
	                        <div>
	                            <h1>Welcome to Turbo</h1>
	                            <p className="lead">
	                                Stack includes support for a sidebar column navigation the left, or right of the page
	                            </p>
	                            <hr className="short" />
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>

	        <section id="elements">
	            <div className="container">
	                <div className="row">
	                    <div className="col-sm-12 col-md-8 col-md-offset-2">
	                        
	                    </div>
	                </div>
	            </div>
	        </section>

	        <Footer />
	    </div>

  	</div>

  )

}
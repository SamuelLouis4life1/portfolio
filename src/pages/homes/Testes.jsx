import React, { Component } from 'react';
import './home.css'
import { withTranslation } from "react-i18next";


export function Testes(props) {
    const { t } = props;

    

    return (
        <section className="experiences-section" id='experiences'>

            <div>
                <h1 className="title">{t("experiences.title")} </h1>
            </div>

            <section class="">
    <div class="">
    
         <div class="">
           <div class="">
             <div id="testimonials-list" class="owl-carousel">
    
               <div class="item">
                 <div class="shadow-effect">
                   <img class="imgPlaceholder" src="https://webdevtrick.com/wp-content/uploads/shaan.jpg" alt=""/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget suscipit sem. Vivamus convallis vulputate leo non ultricies.</p>
                 </div>
                 <div class="testimonial-name">First Person</div>
               </div>
           
               <div class="item">
                 <div class="shadow-effect">
                   <img class="imgPlaceholder" src="https://webdevtrick.com/wp-content/uploads/shaan.jpg" alt=""/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget suscipit sem. Vivamus convallis vulputate leo non ultricies.</p>
                 </div>
                 <div class="testimonial-name">Second Person</div>
               </div>
    
    
               <div class="item">
                 <div class="shadow-effect">
                   <img class="imgPlaceholder" src="https://webdevtrick.com/wp-content/uploads/shaan.jpg" alt=""/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget suscipit sem. Vivamus convallis vulputate leo non ultricies.</p>
                 </div>
                 <div class="testimonial-name">Third Person</div>
               </div>
    
    
               <div class="item">
                 <div class="shadow-effect">
                   <img class="imgPlaceholder" src="https://webdevtrick.com/wp-content/uploads/shaan.jpg" alt=""/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget suscipit sem. Vivamus convallis vulputate leo non ultricies.</p>
                 </div>
                 <div class="testimonial-name">Fourth Person</div>
               </div>
    
    
               <div class="item">
                 <div class="shadow-effect">
                   <img class="imgPlaceholder" src="https://webdevtrick.com/wp-content/uploads/shaan.jpg" alt=""/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget suscipit sem. Vivamus convallis vulputate leo non ultricies.</p>
                 </div>
                 <div class="testimonial-name">Fifth Person</div>
               </div>
    
             </div>
           </div>
         </div>
         </div>
       </section>

        </section>
    );
}

export default withTranslation()(Testes);
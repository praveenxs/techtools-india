import React, { useEffect } from 'react';
import './Product.css';
import product_1 from '../../assets/all-inserts.png';
import product_2 from '../../assets/hand-tool.png';
import product_3 from '../../assets/power-tools.png';
import product_4 from '../../assets/safety_p.png';
import product_5 from '../../assets/all-stationery.png';
import product_6 from '../../assets/cleaning_tab.png';
import product_7 from '../../assets/adhes.png';
import product_8 from '../../assets/abris.png';
import product_9 from '../../assets/fast.png';
import product_10 from '../../assets/bear.png';
import product_11 from '../../assets/wed.png';
import product_12 from '../../assets/measuring.png';
import product_13 from '../../assets/materil-handling.png';
import product_14 from '../../assets/custom.png';
import product_15 from '../../assets/uniform.png';
import product_icon_1 from '../../assets/product_icon_1.png';
import product_icon_2 from '../../assets/support.png';
import product_icon_3 from '../../assets/drill.png';
import product_icon_4 from '../../assets/product_icon_2.png';
import product_icon_5 from '../../assets/product_icon_3.png';
import product_icon_6 from '../../assets/vacuum.png';
import product_icon_7 from '../../assets/adhesives.png';
import product_icon_8 from '../../assets/mechanic.png';
import product_icon_9 from '../../assets/fastener.png';
import product_icon_10 from '../../assets/product_icon_2.png';
import product_icon_11 from '../../assets/welding-mask.png';
import product_icon_12 from '../../assets/performance.png';
import product_icon_13 from '../../assets/handle-with-care.png';
import product_icon_14 from '../../assets/flexible.png';
import product_icon_15 from '../../assets/shirt.png';
import white_arrow from '../../assets/white_arrow.png';

function Products() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    const productElements = document.querySelectorAll('.product');
    productElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      productElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <div className='products container1'>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_1} alt="" />
            <div className="caption">
              <img src={product_icon_1} alt="" />
              <p>Cutting Tools</p>
            </div>
          </div>
          <div className='tool-cnt'>
            <h4 className='text-uppercase'>Cutting Tools</h4>
            <h6>
              Equip your team with top-notch 
              cutting tools for precision.
            </h6>
            <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_2} alt="" />
            <div className="caption">
              <img src={product_icon_2} alt="" />
              <p>Hand Tools</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Hand Tools</h4>
              <h6>
                Enhance office efficiency with our 
                productivity-boosting tools.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_3} alt="" />
            <div className="caption">
              <img src={product_icon_3} alt="" />
              <p>Power Tools</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Power Tools</h4>
              <h6>
                Enhance workshop efficiency with 
                cutting-edge power tools.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_4} alt="" />
            <div className="caption">
              <img src={product_icon_4} alt="" />
              <p>Safety Gears</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Safety Gears</h4>
              <h6>
                Durable safety gear for ultimate
                protection and comfort.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_5} alt="" />
            <div className="caption">
              <img src={product_icon_5} alt="" />
              <p>Office Supplies</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Office Supplies</h4>
              <h6>
                Office productivity with our efficient
                tools. Perfect solutions
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_6} alt="" />
            <div className="caption">
              <img src={product_icon_6} alt="" />
              <p>Cleaning Essentials</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Cleanings</h4>
              <h6>
                Eco-friendly bathroom spray for effective
                cleaning and disinfecting.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_8} alt="" />
            <div className="caption">
              <img src={product_icon_8} alt="" />
              <p>Abrasives</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Abrasives</h4>
              <h6>
                Reliable abrasives for all your 
                industrial applications.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_7} alt="" />
            <div className="caption">
              <img src={product_icon_7} alt="" />
              <p>Adhesive </p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Adhesives</h4>
              <h6>
                Premium adhesive solution products
                you need for every project.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_9} alt="" />
            <div className="caption">
              <img src={product_icon_9} alt="" />
              <p>Fasteners</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Fasteners</h4>
              <h6>
                High-quality fasteners for secure
                and durable connections.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_10} alt="" />
            <div className="caption">
              <img src={product_icon_10} alt="" />
              <p>Bearings</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Bearings</h4>
              <h6>
                High-quality bearings for smooth and 
                precise motion in any use.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_11} alt="" />
            <div className="caption">
              <img src={product_icon_11} alt="" />
              <p>Welding</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Weldings</h4>
              <h6>
               Quality welding supplies and 
               excellent performance .
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_12} alt="" />
            <div className="caption">
              <img src={product_icon_12} alt="" />
              <p>Testing and Measuring Instrument</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Measurings</h4>
              <h6>
                Accuracy tools for professionals
                performance guaranteed.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_13} alt="" />
            <div className="caption">
              <img src={product_icon_13} alt="" />
              <p>Material Handling & Packaging</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Packaging</h4>
              <h6>
                Optimize efficiency with our material 
                handling and packaging solutions.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_15} alt="" />
            <div className="caption">
              <img src={product_icon_15} alt="" />
              <p>Uniforms</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Uniforms</h4>
              <h6>
               Durable uniforms solutions for 
               specific needs.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
        <div className="product">
          <div className='product_img_h'>
            <img src={product_14} alt="" />
            <div className="caption">
              <img src={product_icon_14} alt="" />
              <p>Customization</p>
            </div>
          </div>
          <div className='tool-cnt'>
              <h4 className='text-uppercase'>Customized</h4>
              <h6>
                We work closely to meet your 
                expectations and preferences.
              </h6>
              <button className='prd-btn'>View more</button>
          </div>
        </div>
      </div>
      <div className='btn-prd'>
      <button className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Products;

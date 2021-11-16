import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div className="blog-text m-5">
                <h1 className="text-center text-info">Blogs About MotorBike</h1>
            </div>
            <div className="blogs-section">
                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsCYCLEWORLD-1.jpg.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">1. Cycle World Magazine</h1>
                    <p class="blog-overview ">A true powerhouse in the moto-blogging world packed with as many areas of motorcycle coverage as you can ask for. Cycle World was a magazine initially founded in 1962 by Joe Parkhurst, who was later inducted into the Motorcycle Hall of Fame. CycleWorld features in-depth reviews conducted by experienced professionals who remain objective and are on the cutting edge of information within the industry.</p>
                </div>
                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsBIKEEXIF.jpg.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">2. Bike Exif</h1>
                    <p class="blog-overview">Bike Exif is one of my favorites for showcasing beautiful machinery. Cleanly presented and comprehensive with a niche in covering the latest cafe racers, bobbers, and scramblers, as well as some nifty how-to guides and apparel store. You can even find a cool little FAQ about the website and founder. Based in the UK, VisorDown has everything a motorcycle enthusiast would want. </p>
                </div>

                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsROTCR-1.jpg.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">3. Return of the Cafe Racers</h1>
                    <p class="blog-overview">Return of The Cafe Racers is a custom bike blog founded by Geoff Baldwin out of Australia. Return of The Cafe Racers is big in the custom-built bikes scene, providing helpful information and a platform for users to submit their bespoke motorcycles. They also provide a map of the locations of some of the best custom bike shops in the world.</p>
                </div>
                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsRIDEAPART.png.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">4. RideApart</h1>
                    <p class="blog-overview">RideApart has a wide variety of content including product reviews, buyer’s guides, and current events in motorcycle news. Their Ask RideApart section is also a great resource, however, some of the answers they’ve provided to questions seem short and/or vague. Regardless, this is still one of the best resources for information in the industry.</p>
                </div>
                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsASPHALTANDRUBBER.png.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">5. Asphalt and Rubber</h1>
                    <p class="blog-overview">Launched in 2008, Asphalt and Rubber has a unique touch on motorcycle journalism as it covers some of the more unique topics within the industry. Asphalt and Rubber has great podcast content and also provides the option to purchase.</p>
                </div>
                <div class="blog-card">
                    <img src="https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/09/TopBlogsDucaChica.jpg.webp" class="blog-image" alt="" />
                    <h1 className="blog-title">6. DucaChica</h1>
                    <p class="blog-overview">Initially created in 2018 as a motorcycle enthusiast blog for female riders, DucaChica provides unbiased product reviews, covers some of motorcycling’s current events, and is a voice for female riders worldwide. We’re excited to watch this blog grow and to see what DucaChica has in store for us in the future.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;
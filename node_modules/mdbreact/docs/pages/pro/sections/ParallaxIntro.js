import React, { Component } from 'react';
import { MDBParallax } from 'mdbreact';

class ParallaxIntro extends Component {
  render() {
    return (
      <>
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/img%20%2844%29.jpg'
          speed='0.8'
        >
          <div className='mask rgba-blue-slight' style={{ height: '100%' }}>
            <div className='container flex-center text-center'>
              <div className='row mt-5'>
                <div className='col-md-12 col-xl-8 mx-auto ow'>
                  <h1 className='font-weight-bold mb-2 '>MDBParallax</h1>
                </div>
              </div>
            </div>
          </div>
        </MDBParallax>

        <div className='container' style={{ backgroundColor: '#ffffffaa' }}>
          <div className='row my-5 py-4'>
            <div className='col-md-12 text-center'>
              <p align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>

              <p className='mb-0' align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
            </div>
          </div>
        </div>
        <MDBParallax
          image='http://mdbootstrap.com/img/Photos/Others/nature4.jpg'
          speed={0.3}
          height='50vh'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold indigo-text my-5 py-4'>
                Different MDBParallax speed
              </h2>
            </div>
          </div>
        </div>
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/city13.jpg'
          speed={0.8}
          height='50vh'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/images/92.jpg'
          speed={1.2}
          height='50vh'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(21).jpg'
          speed={0.2}
          height='50vh'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold pink-text my-5 py-4'>
                MDBParallax <i>keepImg</i> props
              </h2>
            </div>
          </div>
        </div>

        <div className='grey lighten-4'>
          <div className='container pt-5'>
            <p align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className='float-md-left mr-md-4 mb-4 mb-md-0'>
              <MDBParallax
                image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(60).jpg'
                keepImg
                speed={0.5}
                height='300px'
                width='300px'
              />
            </div>

            <p align='justify'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>

            <p align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              dolor in reprehenderit amet.
            </p>

            <div className='float-md-right ml-md-4 mb-4 mb-md-0'>
              <MDBParallax
                image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(26).jpg'
                speed={1.3}
                keepImg
                height='300px'
                width='300px'
              />
            </div>
            <p className='mb-0 pb-5' align='justify'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. Quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae. Agni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              quibusdam et voluptate velit esse quam nihil ex minus id quod.
            </p>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold pink-text my-5 py-4'>
                Different MDBParallax effects
              </h2>
            </div>
          </div>
        </div>

        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(19).jpg'
          speed={0.5}
          height='50vh'
          type='scale'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg'
          speed={2}
          height='50vh'
          type='opacity'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(20).jpg'
          speed={0.2}
          height='50vh'
          type='scroll-opacity'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(57).jpg'
          speed={0.2}
          height='50vh'
          type='scale-opacity'
        />

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center overflow-hidden'>
              <h2 className='h1 font-weight-bold cyan-text my-5 py-4'>
                Support Youtube &amp; Vimeo links
              </h2>
            </div>
          </div>
        </div>

        <MDBParallax
          video='https://youtu.be/lugard7P0nw'
          disableVideoLazyLoading
         />
        <MDBParallax
          video='https://player.vimeo.com/video/137857207'
          type='opacity'
          speed='0.1'
          disableVideoLazyLoading
        />

        <div className='container'>
          <div className='row my-5 py-4'>
            <div className='col-md-12 text-center'>
              <p align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
              <p className='mb-0' align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ParallaxIntro;

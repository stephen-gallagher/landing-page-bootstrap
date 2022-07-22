import React from 'react';
import Carousel from '../components/ImageCarousel';
import Fade from 'react-reveal/Fade';

export default function Homepage() {
  return (
    <div>
      <Carousel />
      <Fade bottom duration={1000} delay={600} distance="30px">
        <section className="col-6 offset-3 mt-5">
          <h1 className="mb-5" style={{ fontSize: '4rem' }}>
            Welcome
          </h1>
          <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit arcu dui, et imperdiet urna venenatis dignissim. Nulla
            efficitur lacus a est rhoncus hendrerit. Vivamus fermentum finibus
            sapien, vestibulum malesuada turpis. Nullam posuere tortor efficitur
            convallis convallis. Praesent tincidunt libero non tellus accumsan,
            vitae blandit felis viverra. Morbi nisl mauris, pellentesque nec
            neque ut, mattis blandit sapien. Sed nec ligula quis lectus bibendum
            euismod. Mauris sit amet erat quis ipsum commodo cursus eu non
            dolor. Quisque euismod imperdiet lobortis. Vivamus eget rhoncus
            erat, porta consectetur libero. Curabitur scelerisque ligula quis
            nisl commodo dictum. Donec id nisl a elit dictum consequat vitae sed
            leo. Donec viverra rhoncus tempor. Sed ligula urna, mattis gravida
            nulla a, convallis imperdiet diam. Nunc id leo ac diam pulvinar
            posuere. Aenean vehicula, justo maximus efficitur lacinia, lectus
            justo efficitur dui, quis semper diam ligula vitae arcu. Nullam
            luctus eget ipsum at ultrices. Aliquam erat volutpat. Sed eget
            consequat massa, nec pretium nunc. Nulla non pharetra nulla, a
            egestas purus. Suspendisse potenti. Pellentesque eget pellentesque
            ex, vitae ornare leo. Nam ex arcu, tincidunt at justo sed,
            pellentesque porta leo. Aliquam ornare maximus nisi vel porttitor.
            Suspendisse nisl nisi, mollis eget dapibus vel, aliquet at odio.
            <br />
            <br />
            Suspendisse quis iaculis dui. In sodales turpis nisi, sed aliquet
            turpis rutrum quis. Quisque vel posuere neque. Praesent porta dictum
            blandit. Nunc enim nisi, bibendum ut elit ultricies, hendrerit
            cursus ipsum. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Maecenas id viverra
            sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec et magna eu justo aliquet accumsan. Mauris egestas tortor
            orci, sit amet ultrices enim posuere eget. Aenean porta, turpis ut
            pharetra venenatis, enim nunc congue risus, vel rutrum justo urna eu
            libero. Proin justo tellus, mattis eu varius nec, feugiat cursus
            sem. Donec et porta sem. Vivamus at est a est scelerisque porttitor
            at non velit. Nunc congue metus condimentum tellus rutrum eleifend.
            Vivamus sagittis imperdiet finibus. Sed et hendrerit diam, eget
            aliquam nibh. Proin ultrices lacinia quam, at eleifend justo.
            Phasellus cursus elit a quam iaculis, rutrum dictum ex cursus. Nam
            dapibus tempus rutrum. Etiam vulputate enim sed vulputate rhoncus.
            Suspendisse molestie tellus augue, quis vehicula quam accumsan nec.
            Nam eget pulvinar ex. Fusce placerat et libero sed luctus.
            Vestibulum ornare aliquet nisi ac varius. Nam aliquet, tellus id
            cursus cursus, felis neque accumsan felis, quis tempus ante nunc et
            orci. Sed lobortis, odio et lobortis blandit, libero erat luctus
            felis, id ultrices ipsum lacus eu leo. Proin bibendum semper sapien
            tincidunt blandit. Nulla at magna eget justo vehicula consectetur.
            Ut dictum sem nec tortor condimentum consectetur.. Suspendisse
            potenti. Pellentesque eget pellentesque ex, vitae ornare leo. Nam ex
            arcu, tincidunt at justo sed, pellentesque porta leo. Aliquam ornare
            maximus nisi vel porttitor. Suspendisse nisl nisi, mollis eget
            dapibus vel, aliquet at odio. Suspendisse quis iaculis dui. In
            sodales turpis nisi, sed aliquet turpis rutrum quis. Quisque vel
            posuere neque. Praesent porta dictum blandit. Nunc enim nisi,
            bibendum ut elit ultricies, hendrerit cursus ipsum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas id viverra sapien. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec et magna eu justo aliquet
            accumsan. Mauris egestas tortor orci, sit amet ultrices enim posuere
            eget. Aenean porta, turpis ut pharetra venenatis, enim nunc congue
            risus, vel rutrum justo urna eu libero. Proin justo tellus, mattis
            eu varius nec, feugiat cursus sem. Donec et porta sem. Vivamus at
            est a est scelerisque porttitor at non velit. Nunc congue metus
            condimentum tellus rutrum eleifend. Vivamus sagittis imperdiet
            finibus. Sed et hendrerit diam, eget aliquam nibh. Proin ultrices
            lacinia quam, at eleifend justo. Phasellus cursus elit a quam
            iaculis, rutrum dictum ex cursus. Nam dapibus tempus rutrum. Etiam
            vulputate enim sed vulputate rhoncus. Suspendisse molestie tellus
            augue,
          </p>
        </section>
      </Fade>
    </div>
  );
}

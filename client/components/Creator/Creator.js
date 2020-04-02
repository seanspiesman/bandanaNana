import React from "react";

const Creator = ({ show }) => {
  if (show) {
    return (
      <div className="comp-creator">
        <img
          className="col-sm-4 all-images"
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/50948192_10155799602815966_3547993696345522176_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQkp8aPCkBTjrDbHQTgALbfHnjv4ra6cZF4NUYeIqJ_xKdvsAzAkBGzbhV5cU4Pw80U&_nc_ht=scontent-dfw5-2.xx&oh=94fb27fe26febc9fd1883dffcc3c943d&oe=5EA6982C"
        ></img>
        <h3>Lyn Mehe'ula</h3>
        <p>
          Proud fur Mama! Modeling my creations are my fur babies - Penny
          Louise, Mara Maywho, Juniper Marie, and Layla Belle
        </p>
        <h4>How it all began</h4>
        <p>
          I was sitting at work one day, staring at picutres of my children when
          I realize they needed some extra pizzaz! They are goodest girls, and
          they want to show off their products to the world!
        </p>
        <h4>All proceeds go to Austin Pets Alive! </h4>
        <img
          className="col-sm-4 float-right all-images"
          src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69253112_10156229876015966_6130868259429285888_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_oc=AQmjqigmQukjVJWRN8hR3W9szqbKaA0Z_QXtyt5u4vnogT_nzWIjqRm8-6hcYYgLp1o&_nc_ht=scontent-dfw5-1.xx&oh=79814481fe44bf356f2c3cdd42754aa9&oe=5EA8A5C8"
        ></img>
      </div>
    );
  } else {
    return null;
  }
};

export default Creator;

// "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69253112_10156229876015966_6130868259429285888_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_oc=AQmjqigmQukjVJWRN8hR3W9szqbKaA0Z_QXtyt5u4vnogT_nzWIjqRm8-6hcYYgLp1o&_nc_ht=scontent-dfw5-1.xx&oh=79814481fe44bf356f2c3cdd42754aa9&oe=5EA8A5C8"

// "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/50948192_10155799602815966_3547993696345522176_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQkp8aPCkBTjrDbHQTgALbfHnjv4ra6cZF4NUYeIqJ_xKdvsAzAkBGzbhV5cU4Pw80U&_nc_ht=scontent-dfw5-2.xx&oh=94fb27fe26febc9fd1883dffcc3c943d&oe=5EA6982C"

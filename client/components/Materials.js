import React from "react";

const Materials = ({ show }) => {
  if (show) {
    return (
      <div>
        {" "}
        <div className="material-image">
          <img
            className="all-images"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69607568_10156226606220966_870509318787563520_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_oc=AQn_aqjJdRCKdnAtLE6k2cBFfSGE6G4k9Us0qQvTNMcJ22YW39YdkWRoM7S9TWa9f14&_nc_ht=scontent-dfw5-2.xx&oh=9b3aa497162048adb99896c6aa55b46f&oe=5EA7072B"
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Materials;

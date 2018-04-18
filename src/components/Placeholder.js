import React, { Component } from "react";
import ContentLoader from 'react-content-loader';

const Placeholder = (props) => {
    return (
      <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
       <rect x="0" y="0" rx="5" ry="5" width="400" height="6" />
       <rect x="0" y="20" rx="5" ry="5" width="400" height="6" />
       <rect x="0" y="40" rx="5" ry="5" width="400" height="6" />
       <rect x="0" y="60" rx="5" ry="5" width="400" height="6" />
       <rect x="0" y="80" rx="5" ry="5" width="400" height="6" />
       <rect x="0" y="100" rx="5" ry="5" width="400" height="6" />
     </ContentLoader>
    );
}

export default Placeholder;

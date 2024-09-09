import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SponsoringPackages = ({ onLoad }) => {
    useEffect(() => {
        const img = new Image();
        img.onload = onLoad;
        img.src = "/img/sponsoring-packages.webp";
    }, [onLoad]);

    return (
        <img
            src="/img/sponsoring-packages.webp"
            alt="sponsoring package"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
};

SponsoringPackages.propTypes = {
    onLoad: PropTypes.func.isRequired,
};

export default SponsoringPackages;
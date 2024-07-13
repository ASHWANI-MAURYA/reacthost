import React from 'react';
import { Link } from "react-router-dom";

const promos = [
    { discount: '30% off Deal', details: 'Media / Live Darshan  ', img: 'https://shrikashiprasadam.com/thumbnail.php?src=https://shrikashiprasadam.com/upload/products_images/41/41_11_Mukhi_Rudrakshacopy_Photoroom_08052024170617.jpg&w=226&h=230' },
    { discount: '30% off Deal', details: 'Other Services', img: 'https://shrikashiprasadam.com/thumbnail.php?src=https://shrikashiprasadam.com/upload/products_images/46/46_RUDRAKSHMALAIMAGE_Photoroom1_15052024160936.jpg&w=226&h=230' },
    { discount: '30% off Deal', details: 'Other Services', img: 'https://shrikashiprasadam.com/thumbnail.php?src=https://shrikashiprasadam.com/upload/products_images/41/41_11_Mukhi_Rudrakshacopy_Photoroom_08052024170617.jpg&w=226&h=230' },
];

const SpecialPromo = () => {
    return (
        <div className="p-4 border-2 bg-white mb-5 Card bg-cover bg-center" style={{ marginRight: 10, marginLeft: 10, borderRadius: 15, }}>
            <h2 className="text-sm font-bold mb-4 text-left">Souvenir Items</h2>
            <div className="grid grid-cols-3 gap-4">
                {promos.map((promo, index) => (
                    <Link to="/b" key={index}>
                        <div className="border-2 SouveniriconBox rounded-lg flex flex-col items-center" style={{ overflow: 'hidden' }}>
                            <img className='Souveniricon mb-2' src={promo.img} alt={promo.details} />
                            {/* <p className='text-xs text-center '>{promo.details}</p> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialPromo;

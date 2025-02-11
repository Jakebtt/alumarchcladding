import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './styles.css';


//Cladding Models
import{ Model as Model4c} from './Model4cladding';
import{ Model as Model425c} from './Model425c';

import{ Model as Model6c} from './Model6cladding2';
import{ Model as Model625c} from './Model625cladding4';

import{ Model as Model8c} from './Model8cladding';
import{ Model as Model825c} from './Model825cladding2';



import TextureButton from './TextureButton';
import DropdownMenu from './DropdownMenu';
import './styles.css';


const slatSizes = ['4inch Cladding', '6inch Cladding', '8inch Cladding'];
const spacerSizes = ['No Reveal', 'Horizontal Reveal'];

const modelMapping = {
  "4inch Cladding": {
    "No Reveal": Model4c,
   "Horizontal Reveal": Model425c,
  },
  "6inch Cladding": {
    "No Reveal": Model6c,
    "Horizontal Reveal": Model625c,
  },
  "8inch Cladding": {
    "No Reveal": Model8c,
    "Horizontal Reveal": Model825c,
  }
};

const categories = [
  'Standard Woodgrains',
  'Non-standard Woodgrains',
  'Colors of Aus',
  'Solid Colors',
];

const textures = [
  // Standard Woodgrains to add - spotted gum
  { url: '/alumarchcladding/Atlantic_Cedar.jpg', name: 'Atlantic Cedar', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Blackbutt.jpg', name: 'Blackbutt', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Bush_Cherry.jpg', name: 'Bush Cherry', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Chestnut.jpg', name: 'Chestnut', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Eastern_Mahogany.jpg', name: 'Eastern Mahogany', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Hickory.jpg', name: 'Hickory', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Iroko.jpg', name: 'Iroko', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Knotty_Pine.jpg', name: 'Knotty Pine', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Kwila.jpg', name: 'Kwila', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Light_Oak.jpg', name: 'Light Oak', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Maple.png', name: 'Maple', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Royal_Oak.jpg', name: 'Royal Oak', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Tassie_Oak.jpg', name: 'Tassie Oak', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Teak_Brown.jpg', name: 'Teak Brown', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/White_Ash.jpg', name: 'White Ash', category: 'Standard Woodgrains' },
  { url: '/alumarchcladding/Western_Red_Cedar.jpg', name: 'Western Red Cedar', category: 'Standard Woodgrains' },

  // Non-standard Woodgrains
  { url: '/alumarchcladding/Australian_Cedar.jpg', name: 'Australian Cedar', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Black_Ash.jpg', name: 'Black Ash', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Black_Walnut.jpg', name: 'Black Walnut', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Charcoal_Ash.jpg', name: 'Charcoal Ash', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Concrete.png', name: 'Concrete', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/English_Chestnut.jpg', name: 'English Chestnut', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Iron_Bark.jpg', name: 'Iron Bark', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Koa.jpg', name: 'Koa', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Red_Gum.jpg', name: 'Red Gum', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Tiger_Wood.jpg', name: 'Tiger Wood', category: 'Non-standard Woodgrains' },
  { url: '/alumarchcladding/Wenge.jpg', name: 'Wenge', category: 'Non-standard Woodgrains' },

  // Solid Colors
  { url: '/alumarchcladding/Admiral_Blue.jpg', name: 'Admiral Blue', category: 'Solid Colors' },
  { url: '/alumarchcladding/Carbon.jpg', name: 'Carbon', category: 'Solid Colors' },
  { url: '/alumarchcladding/Mistr.jpg', name: 'Mist', category: 'Solid Colors' },
  { url: '/alumarchcladding/Midnight_Black.jpg', name: 'Midnight Black', category: 'Solid Colors' },
  { url: '/alumarchcladding/Sandstone.jpg', name: 'Sandstone', category: 'Solid Colors' },
  { url: '/alumarchcladding/Slate_Grey.jpg', name: 'Slate Grey', category: 'Solid Colors' },
  { url: '/alumarchcladding/Smoke.jpg', name: 'Smoke', category: 'Solid Colors' },
  { url: '/alumarchcladding/White.jpg', name: 'White', category: 'Solid Colors' },
  { url: '/alumarchcladding/Vapor_Grey.jpg', name: 'Vapor Grey', category: 'Solid Colors' },
  { url: '/alumarchcladding/Sterling.jpg', name: 'Sterling', category: 'Solid Colors' },

  // Colors of Aus colors - Driftwood, Merbau, Black Wattle
  { url: '/alumarchcladding/Black_Cedar.jpg', name: 'Black Cedar', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Driftwood.png', name: 'Driftwood', category: 'Colors of Aus' },
  { url: '/alumarchcladding/French_Walnut.jpg', name: 'French Walnut', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Grey_Ash.jpg', name: 'Grey Ash', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Hamptons_Cedar.jpg', name: 'Hamptons Cedar', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Hinoki.jpg', name: 'Hinoki', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Merbau.png', name: 'Merbau', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Nordic_Oak.jpg', name: 'Nordic Oak', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Norwegian_Beech.jpg', name: 'Norwegian Beech', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Pacific_Teak.jpg', name: 'Pacific Teak', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Queensland_Walnut.jpg', name: 'Queensland Walnut', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Red_Wood.jpg', name: 'Red Wood', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Shou_Sugi_Ban.jpg', name: 'Shou Sugi Ban', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Silver_Wattle.jpg', name: 'Silver Wattle', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Spruce.jpg', name: 'Spruce', category: 'Colors of Aus' },
  { url: '/alumarchcladding/Sycamore.jpg', name: 'Sycamore', category: 'Colors of Aus' },
  { url: '/alumarchcladding/White_Ash.jpg', name: 'White Ash', category: 'Colors of Aus' },


];


const App = () => {
  const [textureUrl, setTextureUrl] = useState('/alumarchcladding/Light_Oak.jpg'); // Default texture URL
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSlatSize, setSelectedSlatSize] = useState('8inch Cladding');
  const [selectedSpacerSize, setSelectedSpacerSize] = useState('Horizontal Reveal');
  const [viewType, setViewType] = useState('Fencing');

  const [selectedTexture, setSelectedTexture] = useState("Light Oak"); // For highlighting the selected texture
  

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleSlatSizeChange = (event) => setSelectedSlatSize(event.target.value);
  const handleSpacerSizeChange = (event) => setSelectedSpacerSize(event.target.value);
  

  const ModelComponent = modelMapping[selectedSlatSize]?.[selectedSpacerSize] || null;

  const handleTextureClick = (texture) => {
    setTextureUrl(texture.url);
    setSelectedTexture(texture.name);
  };

  const filteredTextures = textures.filter((texture) => texture.category === selectedCategory);

  return (
    <div className="container">
      {/* Logo */}
      <img src="Alumarch.jpg" alt="Logo" className="logo" />

      {/* Dropdowns */}
      <select className="dropdown category-dropdown" onChange={handleCategoryChange} value={selectedCategory}>
  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>

<select className="dropdown slat-size-dropdown" onChange={handleSlatSizeChange} value={selectedSlatSize}>
  {slatSizes.map((size) => (
    <option key={size} value={size}>
      {size}
    </option>
  ))}
</select>

<select className="dropdown spacer-size-dropdown" onChange={handleSpacerSizeChange} value={selectedSpacerSize}>
  {spacerSizes.map((size) => (
    <option key={size} value={size}>
      {size}
    </option>
  ))}
</select>


      {/* Buttons for Textures */}
      <div className="button-container">
        {filteredTextures.map((texture) => (
          <TextureButton
            key={texture.name}
            textureUrl={texture.url}
            colorName={texture.name}
            isSelected={selectedTexture === texture.name}
            onClick={() => handleTextureClick(texture)}
          />
        ))}
      </div>

      <div className="instructions-box">
      <p>Hold left click to rotate the cladding</p>
      <p>Scroll to zoom in and out</p>
      <p>*Models roughly 10ft tall*</p>
    </div>

      {/* Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ fov: 55, position: [8, 0, 0] }}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} />
          {ModelComponent && <ModelComponent textureUrl={textureUrl} rotation={[0, Math.PI / 2, 0]} />}
        </Canvas>
      </div>
    </div>
  );
};

export default App;







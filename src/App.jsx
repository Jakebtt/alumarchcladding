import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './styles.css';

import { Model as Modela } from './Modela';
import { Model as Modelb } from './Modelb';
import { Model as Modelc } from './Modelc';
import { Model as Modeld } from './Modeld';
import { Model as Modele } from './Modele';
import { Model as Modelf } from './Modelf';
import { Model as Modelg } from './Modelg';
import { Model as Modelh } from './Modelh';
import { Model as Modeli } from './Modeli';
import { Model as Modelj } from './Modelj';
import { Model as Modelk } from './Modelk';
import { Model as Modell } from './Modell';
import { Model as Modeltest } from './Modeltest';
import{ Model as Modelz} from './Modelz';

//2.5inch Slat Models 
import{ Model as Model2500} from "./Model2500";
import{ Model as Model2500v3} from "./Model2500v3";
import{ Model as Model25025} from "./Model25025";
import{ Model as Model2505} from "./Model2505";
import{ Model as Model2501} from "./Model2501";

//4inch Slat Models 
import{ Model as Model400} from "./Model400";
import{ Model as Model400v2} from "./Model400v2";
import{ Model as Model4025} from "./Model4025";
import{ Model as Model405} from "./Model405";
import{ Model as Model401} from "./Model401";


//6inch Slat Models 
import{ Model as Model600} from './Model600';
import{ Model as Model6025} from './Model6025';
import{ Model as Model605} from './Model605';
import{ Model as Model61} from './Model61';

//Cladding Models
import{ Model as Modelclad8} from './Modelclad8';

import TextureButton from './TextureButton';
import DropdownMenu from './DropdownMenu';
import './styles.css';


const slatSizes = ['2.5inch slat', '4inch slat', '6inch slat'];
const spacerSizes = ['No Space', '0.25inch spacing', '0.5inch spacing', "'1inch spacing", ];

const modelMapping = {
  '1.5inch slat': {
    '0.25inch spacing': Modela,
    '0.5inch spacing': Modelb,
    '1inch spacing': Modelc,
  },
  '2.5inch slat': {
    "No Space": Model2500v3,
    '0.25inch spacing': Model25025,
    '0.5inch spacing': Model2505,
    '1inch spacing': Model2501,
  },
  '4inch slat': {
    "No Space": Model400v2,
    '0.25inch spacing': Model4025,
    '0.5inch spacing': Model405,
    '1inch spacing': Model401,
  },
  '6inch slat': {
    "No Space": Model600,
    '0.25inch spacing': Model6025,
    '0.5inch spacing': Model605,
    '1inch spacing': Model61,
  },
  "claddingtest": {
    "No Space": Model600,
    "claddingtest": Modelclad8,
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
  { url: '/fencefinal/Atlantic_Cedar.jpg', name: 'Atlantic Cedar', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Blackbutt.jpg', name: 'Blackbutt', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Bush_Cherry.jpg', name: 'Bush Cherry', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Chestnut.jpg', name: 'Chestnut', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Eastern_Mahogany.jpg', name: 'Eastern Mahogany', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Hickory.jpg', name: 'Hickory', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Iroko.jpg', name: 'Iroko', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Knotty_Pine.jpg', name: 'Knotty Pine', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Kwila.jpg', name: 'Kwila', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Light_Oak.jpg', name: 'Light Oak', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Maple.png', name: 'Maple', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Royal_Oak.jpg', name: 'Royal Oak', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Tassie_Oak.jpg', name: 'Tassie Oak', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Teak_Brown.jpg', name: 'Teak Brown', category: 'Standard Woodgrains' },
  { url: '/fencefinal/White_Ash.jpg', name: 'White Ash', category: 'Standard Woodgrains' },
  { url: '/fencefinal/Western_Red_Cedar.jpg', name: 'Western Red Cedar', category: 'Standard Woodgrains' },

  // Non-standard Woodgrains
  { url: '/fencefinal/Australian_Cedar.jpg', name: 'Australian Cedar', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Black_Ash.jpg', name: 'Black Ash', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Black_Walnut.jpg', name: 'Black Walnut', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Charcoal_Ash.jpg', name: 'Charcoal Ash', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Concrete.png', name: 'Concrete', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/English_Chestnut.jpg', name: 'English Chestnut', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Iron_Bark.jpg', name: 'Iron Bark', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Koa.jpg', name: 'Koa', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Red_Gum.jpg', name: 'Red Gum', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Tiger_Wood.jpg', name: 'Tiger Wood', category: 'Non-standard Woodgrains' },
  { url: '/fencefinal/Wenge.jpg', name: 'Wenge', category: 'Non-standard Woodgrains' },

  // Solid Colors
  { url: '/fencefinal/Admiral_Blue.jpg', name: 'Admiral Blue', category: 'Solid Colors' },
  { url: '/fencefinal/Carbon.jpg', name: 'Carbon', category: 'Solid Colors' },
  { url: '/fencefinal/Mistr.jpg', name: 'Mist', category: 'Solid Colors' },
  { url: '/fencefinal/Midnight_Black.jpg', name: 'Midnight Black', category: 'Solid Colors' },
  { url: '/fencefinal/Sandstone.jpg', name: 'Sandstone', category: 'Solid Colors' },
  { url: '/fencefinal/Slate_Grey.jpg', name: 'Slate Grey', category: 'Solid Colors' },
  { url: '/fencefinal/Smoke.jpg', name: 'Smoke', category: 'Solid Colors' },
  { url: '/fencefinal/White.jpg', name: 'White', category: 'Solid Colors' },
  { url: '/fencefinal/Vapor_Grey.jpg', name: 'Vapor Grey', category: 'Solid Colors' },
  { url: '/fencefinal/Sterling.jpg', name: 'Sterling', category: 'Solid Colors' },

  // Colors of Aus colors - Driftwood, Merbau, Black Wattle
  { url: '/fencefinal/Black_Cedar.jpg', name: 'Black Cedar', category: 'Colors of Aus' },
  { url: '/fencefinal/Driftwood.png', name: 'Driftwood', category: 'Colors of Aus' },
  { url: '/fencefinal/French_Walnut.jpg', name: 'French Walnut', category: 'Colors of Aus' },
  { url: '/fencefinal/Grey_Ash.jpg', name: 'Grey Ash', category: 'Colors of Aus' },
  { url: '/fencefinal/Hamptons_Cedar.jpg', name: 'Hamptons Cedar', category: 'Colors of Aus' },
  { url: '/fencefinal/Hinoki.jpg', name: 'Hinoki', category: 'Colors of Aus' },
  { url: '/fencefinal/Merbau.png', name: 'Merbau', category: 'Colors of Aus' },
  { url: '/fencefinal/Nordic_Oak.jpg', name: 'Nordic Oak', category: 'Colors of Aus' },
  { url: '/fencefinal/Norwegian_Beech.jpg', name: 'Norwegian Beech', category: 'Colors of Aus' },
  { url: '/fencefinal/Pacific_Teak.jpg', name: 'Pacific Teak', category: 'Colors of Aus' },
  { url: '/fencefinal/Queensland_Walnut.jpg', name: 'Queensland Walnut', category: 'Colors of Aus' },
  { url: '/fencefinal/Red_Wood.jpg', name: 'Red Wood', category: 'Colors of Aus' },
  { url: '/fencefinal/Shou_Sugi_Ban.jpg', name: 'Shou Sugi Ban', category: 'Colors of Aus' },
  { url: '/fencefinal/Silver_Wattle.jpg', name: 'Silver Wattle', category: 'Colors of Aus' },
  { url: '/fencefinal/Spruce.jpg', name: 'Spruce', category: 'Colors of Aus' },
  { url: '/fencefinal/Sycamore.jpg', name: 'Sycamore', category: 'Colors of Aus' },
  { url: '/fencefinal/White_Ash.jpg', name: 'White Ash', category: 'Colors of Aus' },


];


const App = () => {
  const [textureUrl, setTextureUrl] = useState('/fencefinal/Light_Oak.jpg'); // Default texture URL
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSlatSize, setSelectedSlatSize] = useState('4inch slat');
  const [selectedSpacerSize, setSelectedSpacerSize] = useState('1inch spacing');
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
      <p>Hold left click to rotate the fence</p>
      <p>Scroll to zoom in and out</p>
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







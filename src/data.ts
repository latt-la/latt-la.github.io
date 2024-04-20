import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArtstation, faDeviantart, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface Data {
  contact: Button[];
}

interface Button {
  title: string;
  icon: IconProp;
  color: string;
  link: string;
  tooltip?: string;
}

const data: Data = {
  "contact": [
    {
      "title": "DeviantArt",
      "icon": faDeviantart,
      "link": "https://www.deviantart.com/latt-la",
      "color": "bg-[#98971a]",
      "tooltip": "latt-la"
    },
    {
      "title": "Instagram",
      "icon": faInstagram,
      "link": "https://z-p42.www.instagram.com/latt_la/?hl=hu",
      "color": "bg-[#b16286]",
      "tooltip": "latt_la"
    },{
      "title": "Artstation",
      "icon": faArtstation,
      "link": "https://www.artstation.com/lattla",
      "color": "bg-[#458588]",
      "tooltip": "lattla"
    }
  ]
}

export default data;
import { Product, ProductCategory } from './types';

export const EXPO_BOOTH = "Stand A-45";
export const COMPANY_NAME = "PowerMe Energy";
export const TAGLINE = "Distribuidor Maestro EcoFlow";

export const PRODUCTS: Product[] = [
  // --- DELTA SERIES ---
  {
    id: 'delta-pro-ultra',
    name: 'DELTA Pro Ultra',
    tagline: 'Independencia energética total',
    category: ProductCategory.DELTA,
    description: 'El sistema de respaldo doméstico más potente. Capacidad escalable de 6kWh a 90kWh y salida masiva capaz de alimentar toda tu casa, incluidos aires acondicionados centrales (240V). Funcionamiento silencioso 0dB.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/DPU_03.webp',
    specs: [
      { label: 'Capacidad', value: '6 kWh - 90 kWh' },
      { label: 'Potencia Salida', value: '6900 W (Exp. 21.6 kW)' },
      { label: 'Entrada Solar', value: '5.6 kW (Max 16.8 kW)' },
      { label: 'Química', value: 'LFP (LiFePO4)' },
      { label: 'Carga Rápida', value: '80% en 1 hora' },
      { label: 'Peso Inversor', value: '31.75 kg' },
      { label: 'Peso Batería', value: '52.8 kg' }
    ],
    features: [
      { icon: 'bolt', text: 'Salida 7200W Máx' },
      { icon: 'battery', text: 'Escalable 90kWh' },
      { icon: 'sun', text: 'Solar 5.6kW' },
      { icon: 'wifi', text: 'Silencioso 0dB' }
    ]
  },
  {
    id: 'delta-3',
    name: 'DELTA 3',
    tagline: 'Respaldo, movilidad y control',
    category: ProductCategory.DELTA,
    description: 'Potencia fiable para tu hogar y aventuras. Capacidad ampliable hasta 5 kWh con carga rápida y compatibilidad total con el ecosistema EcoFlow.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/D3_Main.webp',
    specs: [
      { label: 'Capacidad', value: '1024 Wh (Ampliable 5kWh)' },
      { label: 'Salida AC', value: '1800 W (Pico 3600 W)' },
      { label: 'Puertos', value: '13 salidas' },
      { label: 'Carga AC', value: '1500 W (56 min)' },
      { label: 'Carga Solar', value: '500 W (2.3 h)' },
      { label: 'Carga Auto', value: '800 W (1.3 h)' },
      { label: 'Peso', value: '~12.52 kg' }
    ],
    features: [
      { icon: 'bolt', text: 'Sobretensión 3600W' },
      { icon: 'battery', text: 'Capacidad Expandible' },
      { icon: 'wifi', text: 'Control por App' },
      { icon: 'clock', text: 'Carga Rápida 56min' }
    ]
  },

  // --- RIVER 3 SERIES ---
  {
    id: 'river-3-ups',
    name: 'RIVER 3 UPS',
    tagline: 'Energía ininterrumpida',
    category: ProductCategory.RIVER,
    description: 'Diseñada para la continuidad. Con un tiempo de conmutación UPS de 10ms, mantiene tus dispositivos críticos funcionando sin interrupciones.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/R3UPS_Main.webp',
    specs: [
      { label: 'Capacidad', value: '245 Wh' },
      { label: 'Salida AC', value: '300 W (Pico 600 W)' },
      { label: 'UPS', value: '10 ms' },
      { label: 'Puertos', value: '6 salidas' },
      { label: 'Peso', value: '3.55 kg' }
    ],
    features: [
      { icon: 'clock', text: 'UPS < 10ms' },
      { icon: 'weight', text: 'Ultraligera 3.55kg' },
      { icon: 'bolt', text: 'Protección de sobretensión' }
    ]
  },
  {
    id: 'river-3-plus',
    name: 'RIVER 3 Plus',
    tagline: 'Potencia compacta',
    category: ProductCategory.RIVER,
    description: 'El equilibrio ideal. Ofrece mayor potencia de salida y una recarga AC rápida de 60 minutos en un formato fácil de transportar.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/R3P_Main.webp',
    specs: [
      { label: 'Capacidad', value: '286 Wh' },
      { label: 'Salida AC', value: '600 W (Pico 1200 W)' },
      { label: 'UPS', value: '10 ms' },
      { label: 'Puertos', value: '7 salidas' },
      { label: 'Carga AC', value: '360 W (60 min)' },
      { label: 'Carga Solar', value: '220 W (1.5 h)' },
      { label: 'Peso', value: '4.7 kg' }
    ],
    features: [
      { icon: 'bolt', text: 'Salida de 600W' },
      { icon: 'clock', text: 'Carga completa en 1h' },
      { icon: 'sun', text: 'Carga solar rápida' }
    ]
  },
  {
    id: 'river-3-max',
    name: 'RIVER 3 Max',
    tagline: 'Mayor autonomía',
    category: ProductCategory.RIVER,
    description: 'Doble de capacidad para quienes necesitan más energía durante más tiempo, manteniendo la portabilidad característica de la serie RIVER.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/R3M_Main.webp',
    specs: [
      { label: 'Capacidad', value: '572 Wh' },
      { label: 'Salida AC', value: '600 W (Pico 1200 W)' },
      { label: 'UPS', value: '10 ms' },
      { label: 'Puertos', value: '8 salidas' },
      { label: 'Carga AC', value: '360 W (1.5 h)' },
      { label: 'Carga Solar', value: '220 W (3.2 h)' },
      { label: 'Peso', value: '7.98 kg' }
    ],
    features: [
      { icon: 'battery', text: '572 Wh Capacidad' },
      { icon: 'bolt', text: '8 puertos de salida' },
      { icon: 'weight', text: 'Diseño robusto' }
    ]
  },
  {
    id: 'river-3-max-plus',
    name: 'RIVER 3 Max Plus',
    tagline: 'Máximo rendimiento portátil',
    category: ProductCategory.RIVER,
    description: 'La versión más potente de la serie compacta. Gran capacidad de 858Wh para viajes largos y respaldo extendido.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/R3MP_Main.webp',
    specs: [
      { label: 'Capacidad', value: '858 Wh' },
      { label: 'Salida AC', value: '600 W (Pico 1200 W)' },
      { label: 'UPS', value: '10 ms' },
      { label: 'Puertos', value: '8 salidas' },
      { label: 'Carga AC', value: '360 W (2.3 h)' },
      { label: 'Carga Solar', value: '220 W (4.5 h)' },
      { label: 'Peso', value: '10.8 kg' }
    ],
    features: [
      { icon: 'battery', text: 'Máxima capacidad 858Wh' },
      { icon: 'bolt', text: 'Respaldo UPS fiable' },
      { icon: 'sun', text: 'Autonomía extendida' }
    ]
  },

  // --- TRAIL SERIES ---
  {
    id: 'trail-200',
    name: 'Trail 200',
    tagline: 'Energía para compartir',
    category: ProductCategory.TRAIL,
    description: 'Hecho para durar en cualquier sendero. Con un diseño 60% más compacto y ultraligero (1.83kg), ofrece 192Wh de capacidad para alimentar tus aventuras. Cuenta con recarga rápida en 1 hora y sistema de protección BMS para máxima seguridad.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/12/DP3_Trail_200_Main.webp',
    specs: [
      { label: 'Capacidad', value: '192 Wh (60,000 mAh)' },
      { label: 'Potencia DC', value: '220 W' },
      { label: 'Peso', value: '1.83 kg' },
      { label: 'Carga Rápida', value: '1 Hora' },
      { label: 'Puertos', value: '4 Salidas' },
      { label: 'Protección', value: 'BMS Avanzado' }
    ],
    features: [
      { icon: 'weight', text: 'Ultraligero 1.83kg' },
      { icon: 'clock', text: 'Carga en 1 hora' },
      { icon: 'bolt', text: 'Potencia 220W' },
      { icon: 'check', text: 'Protección BMS' }
    ]
  },
  {
    id: 'trail-300',
    name: 'Trail 300',
    tagline: 'Comparte energía, comparte momentos',
    category: ProductCategory.TRAIL,
    description: 'Potencia todo tu equipo, siempre. Con una capacidad de 288Wh (90,000mAh) y 5 puertos de salida, mantén todos tus dispositivos cargados. Diseño portátil 60% más compacto y ultraligero (2.58kg) para cualquier aventura.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/12/DP3_Trail_300_Main.webp',
    specs: [
      { label: 'Capacidad', value: '288 Wh (90,000 mAh)' },
      { label: 'Potencia DC', value: '300 W' },
      { label: 'Peso', value: '2.58 kg' },
      { label: 'Puertos', value: '5 Salidas' },
      { label: 'Protección', value: 'BMS Avanzado' },
      { label: 'Carga Solar', value: 'Compatible' }
    ],
    features: [
      { icon: 'battery', text: '288Wh (90k mAh)' },
      { icon: 'bolt', text: 'Salida 300W DC' },
      { icon: 'weight', text: 'Ligero 2.58kg' },
      { icon: 'check', text: '5 Puertos' }
    ]
  },

  // --- SOLAR SERIES ---
  {
    id: 'panel-solar-160w',
    name: 'Panel Solar 160W',
    tagline: 'Tu energía, tu futuro',
    category: ProductCategory.SOLAR,
    description: 'Panel solar portátil de alta eficiencia con tecnología TOPcon tipo N. Impermeable (IP68) y diseñado para capturar la máxima energía solar.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/PS_160_Main.webp',
    specs: [
      { label: 'Potencia', value: '160 W' },
      { label: 'Eficiencia', value: '25%' },
      { label: 'Tecnología', value: 'TOPcon tipo N' },
      { label: 'Voc', value: '21.4 V' },
      { label: 'Dimensiones', value: '167.7 x 59.8 cm' },
      { label: 'Impermeabilidad', value: 'IP68' },
      { label: 'Peso', value: '~3.8 kg' }
    ],
    features: [
      { icon: 'sun', text: 'Eficiencia 25%' },
      { icon: 'bolt', text: 'Tecnología TOPcon' },
      { icon: 'weight', text: 'A prueba de agua IP68' }
    ]
  },

  // --- ACCESSORIES ---
  {
    id: 'smart-home-panel-2',
    name: 'Smart Home Panel 2',
    tagline: 'El centro de tu sistema de respaldo',
    category: ProductCategory.ACCESSORIES,
    description: 'El corazón de tu ecosistema energético. Conecta tu DELTA Pro Ultra a tu hogar para un respaldo automático en 20ms. Incluye la pantalla PowerInsight para monitorización visual y gestión inteligente de energía y circuitos.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/SMART_SHP2_Main.webp',
    specs: [
      { label: 'Conmutación', value: '20 ms (Automática)' },
      { label: 'Control', value: 'App / PowerInsight' },
      { label: 'Compatibilidad', value: 'DELTA Pro Ultra' },
      { label: 'Gestión', value: 'Control de Circuitos' },
      { label: 'Funciones', value: 'Storm Guard / Ahorro' }
    ],
    features: [
      { icon: 'bolt', text: 'Respaldo en 20ms' },
      { icon: 'wifi', text: 'Pantalla PowerInsight' },
      { icon: 'clock', text: 'Control Horario' },
      { icon: 'battery', text: 'Gestión Inteligente' }
    ]
  },
  {
    id: 'power-hat',
    name: 'EcoFlow Power Hat',
    tagline: 'Carga solar wearable',
    category: ProductCategory.ACCESSORIES,
    description: 'Innovación que puedes llevar puesta. Un sombrero con paneles solares integrados de 360° que carga tus dispositivos mientras te protege del sol. Ideal para pesca, senderismo y vida al aire libre.',
    image: 'https://ecoflow.powerme.mx/wp-content/uploads/2025/09/PowerHat_Main.webp',
    specs: [
      { label: 'Paneles', value: '360° Sin puntos ciegos' },
      { label: 'Puertos', value: 'USB-A y USB-C' },
      { label: 'Protección', value: 'UPF 50+' },
      { label: 'Tipo', value: 'Wearable Solar' }
    ],
    features: [
      { icon: 'sun', text: 'Solar 360°' },
      { icon: 'bolt', text: 'Puertos USB Duales' },
      { icon: 'check', text: 'Protección UPF 50+' }
    ]
  }
];

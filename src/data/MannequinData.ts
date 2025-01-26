// Your mannequin data
interface MannequinData {
  id: number;
  position: number[];
  rotation?: number[];
  modelPath: string;
  scale: number;
  allowCopy: boolean;
  isMainItem?: boolean;
}

const mannequinData: MannequinData[] = [

  //Side 1
  {
    id: 9012475265269,
    position: [-0.90, 0.535, 1.25],
    modelPath: "/models/New_Arrivals/CucumberBathBar_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012475265269,
    position: [-0.90, 0.535, 1.25 - 0.20],
    modelPath: "/models/New_Arrivals/CucumberBathBar_optimized.glb",
    scale: 0.02,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012475265269,
    position: [-0.90, 0.535, 1.25 - 0.42],
    modelPath: "/models/New_Arrivals/CucumberBathBar_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },


  {
    id: 9003886477557,
    position: [-0.90, 0.312, 1.25],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003886477557,
    position: [-0.90, 0.312, 1.25 - 0.42],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    scale: 0.015,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003886477557,
    position: [-0.90, 0.312, 1.25 - 0.20],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    scale: 0.015,
    allowCopy: true,
  },

  {
    id: 9003875696885,
    position: [-0.90, 0.457, 1.25],
    modelPath: "/models/New_Arrivals/HairGrowthOil_optimized.glb",
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003875696885,
    position: [-0.90, 0.457, 1.25 - 0.42],
    modelPath: "/models/New_Arrivals/HairGrowthOil_optimized.glb",
    scale: 0.015,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003875696885,
    position: [-0.90, 0.457, 1.25 - 0.20],
    modelPath: "/models/New_Arrivals/HairGrowthOil_optimized.glb",
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9012464976117,
    position: [-0.90, 0.54, 1.25 - 2.07],
    modelPath: "/models/Hair/HairButter_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012464976117,
    position: [-0.90, 0.54, 1.25 - 2.27],
    modelPath: "/models/Hair/HairButter_optimized.glb",
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012464976117,
    position: [-0.90, 0.54, 1.25 - 2.47],
    modelPath: "/models/Hair/HairButter_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012446003445,
    position: [-0.90, 0.455, 1.527 - 2.07],
    modelPath: "/models/Hair/RiceWaterShampoo_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012446003445,
    position: [-0.90, 0.455, 1.527 - 2.27],
    modelPath: "/models/Hair/RiceWaterShampoo_optimized.glb",
    scale: 0.02,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012446003445,
    position: [-0.90, 0.455, 1.527 - 2.47],
    modelPath: "/models/Hair/RiceWaterShampoo_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },

  {
    id: 9012496138485,
    position: [-0.90, 0.315, 1.25 - 2.07],
    modelPath: "/models/Hair/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012496138485,
    position: [-0.90, 0.315, 1.25 - 2.27],
    modelPath: "/models/Hair/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012496138485,
    position: [-0.90, 0.315, 1.25 - 2.47],
    modelPath: "/models/Hair/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
  },

  //Side 2

  {
    id: 9012478705909,
    position: [0.96, 0.565, 1.25],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012478705909,
    position: [0.96, 0.565, 1.25 - 0.20],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    scale: 0.02,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012478705909,
    position: [0.96, 0.565, 1.25 - 0.42],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    scale: 0.02,
    allowCopy: true,
  },


  {
    id: 9012478771445,
    position: [0.96, 0.323, 1.25],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/AloeVeraGel_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012478771445,
    position: [0.96, 0.323, 1.25 - 0.42],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/AloeVeraGel_optimized.glb",
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012478771445,
    position: [0.96, 0.323, 1.25 - 0.20],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/AloeVeraGel_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012496138485,
    position: [0.96, 0.423, 1.25],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012496138485,
    position: [0.96, 0.423, 1.25 - 0.42],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012496138485,
    position: [0.96, 0.423, 1.25 - 0.20],
    rotation: [0, 180, 0],
    modelPath: "/models/Best_Sellers/HairSerum_optimized.glb",
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012432994549,
    position: [0.96, 0.54, 1.25 - 2.07],
    rotation: [0, 180, 0],
    modelPath: "/models/Hair/HerbalHairPack_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012432994549,
    position: [0.96, 0.54, 1.25 - 2.27],
    rotation: [0, 180, 0],
    modelPath: "/models/Hair/HerbalHairPack_optimized.glb",
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012432994549,
    position: [0.96, 0.54, 1.25 - 2.47],
    rotation: [0, 180, 0],
    modelPath: "/models/Hair/HerbalHairPack_optimized.glb",
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },

  {
    id: 9003875696885,
    position: [0.96, 0.47, 1.25 - 2.07],
    modelPath: "/models/Hair/HairGrowthOil_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.018,
    allowCopy: true,
  },
  {
    id: 9003875696885,
    position: [0.96, 0.47, 1.25 - 2.27],
    modelPath: "/models/Hair/HairGrowthOil_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.018,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003875696885,
    position: [0.96, 0.47, 1.25 - 2.47],
    modelPath: "/models/Hair/HairGrowthOil_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.018,
    allowCopy: true,
  },

  {
    id: 9012450984181,
    position: [0.96, 0.325, 1.25 - 2.07],
    modelPath: "/models/Hair/ShampooBar_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012450984181,
    position: [0.96, 0.325, 1.25 - 2.27],
    modelPath: "/models/Hair/ShampooBar_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012450984181,
    position: [0.96, 0.325, 1.25 - 2.47],
    modelPath: "/models/Hair/ShampooBar_optimized.glb",
    rotation: [0, 180, 0],
    scale: 0.025,
    allowCopy: true,
  },

  //Side 3 - Lotta
  {
    id: 9003817894133,
    position: [0.3+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003817894133,
    position: [0.38+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003817894133,
    position: [0.46+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9003817894133,
    position: [0.54+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003817894133,
    position: [0.62+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003817894133,
    position: [0.70+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003817894133,
    position: [0.78+0.03, 0.42, 1.25 - 5.1],
    modelPath: "/models/Face/BrighteningPack_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },


  {
    id: 9003881496821,
    position: [0.3+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003881496821,
    position: [0.38+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003881496821,
    position: [0.46+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9003881496821,
    position: [0.54+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003881496821,
    position: [0.62+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003881496821,
    position: [0.70+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003881496821,
    position: [0.78+0.03, 0.33, 1.25 - 5.1],
    modelPath: "/models/Face/LipBalm_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },


  {
    id: 9012478771445,
    position: [0.3+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012478771445,
    position: [0.38+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012478771445,
    position: [0.46+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012478771445,
    position: [0.54+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012478771445,
    position: [0.62+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012478771445,
    position: [0.70+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012478771445,
    position: [0.78+0.03, 0.24, 1.25 - 5.1],
    modelPath: "/models/Face/AloeVeraGel_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },





  {
    id: 9003888214261,
    position: [0.3+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003888214261,
    position: [0.38+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003888214261,
    position: [0.46+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },

  {
    id: 9003888214261,
    position: [0.54+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003888214261,
    position: [0.62+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003888214261,
    position: [0.70+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9003888214261,
    position: [0.78+0.03, 0.528, 1.25 - 5.1],
    modelPath: "/models/Face/Toner_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.015,
    allowCopy: true,
  },

  //Side 4 - Lotta
  {
    id: 9012516618485,
    position: [0.3 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012516618485,
    position: [0.38 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012516618485,
    position: [0.46 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012516618485,
    position: [0.54 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012516618485,
    position: [0.62 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012516618485,
    position: [0.70 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012516618485,
    position: [0.78 - 1, 0.42 - 0.025, 1.25 - 5.1],
    modelPath: "/models/Face/ExfoliatorScrub_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },


  {
    id: 9003865899253,
    position: [0.3 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9003865899253,
    position: [0.38 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9003865899253,
    position: [0.46 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },

  {
    id: 9003865899253,
    position: [0.54 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003865899253,
    position: [0.62 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9003865899253,
    position: [0.70 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9003865899253,
    position: [0.78 - 1, 0.33 - 0.005, 1.25 - 5.1],
    modelPath: "/models/Face/CharcoalFaceWash_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.02,
    allowCopy: true,
  },


  {
    id: 9012514095349,
    position: [0.3 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012514095349,
    position: [0.38 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012514095349,
    position: [0.46 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012514095349,
    position: [0.54 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012514095349,
    position: [0.62 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012514095349,
    position: [0.70 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012514095349,
    position: [0.78 - 1, 0.24 - 0.05, 1.25 - 5.1],
    modelPath: "/models/Face/UnderEyeCream_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.025,
    allowCopy: true,
  },





  {
    id: 9003886477557,
    position: [0.3 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9003886477557,
    position: [0.38 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9003886477557,
    position: [0.46 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },

  {
    id: 9003886477557,
    position: [0.54 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003886477557,
    position: [0.62 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9003886477557,
    position: [0.70 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9003886477557,
    position: [0.78 - 1, 0.5, 1.25 - 5.1],
    modelPath: "/models/Face/BeautifyingSerum_optimized.glb",
    rotation: [0, -90, 0],
    scale: 0.017,
    allowCopy: true,
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //Side 3 - Lotta
  {
    id: 9012510720245,
    position: [0.3+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012510720245,
    position: [0.38+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012510720245,
    position: [0.46+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012510720245,
    position: [0.54+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012510720245,
    position: [0.62+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012510720245,
    position: [0.70+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012510720245,
    position: [0.78+0.03, 0.425, 1.25 + 2.6],
    modelPath: "/models/Body/BodyButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },


  {
    id: 9012509704437,
    position: [0.3+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9012509704437,
    position: [0.38+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9012509704437,
    position: [0.46+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },

  {
    id: 9012509704437,
    position: [0.54+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012509704437,
    position: [0.62+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9012509704437,
    position: [0.70+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },
  {
    id: 9012509704437,
    position: [0.78+0.03, 0.35, 1.25 + 2.6],
    modelPath: "/models/Body/BabyBodyLotion_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.015,
    allowCopy: true,
  },


  {
    id: 9003787223285,
    position: [0.3+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003787223285,
    position: [0.38+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003787223285,
    position: [0.46+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9003787223285,
    position: [0.54+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9003787223285,
    position: [0.62+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003787223285,
    position: [0.70+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9003787223285,
    position: [0.78+0.03, 0.24, 1.25 + 2.6],
    modelPath: "/models/Body/CharcoalBathBar_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },





  {
    id: 9012513177845,
    position: [0.3+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012513177845,
    position: [0.38+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012513177845,
    position: [0.46+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },

  {
    id: 9012513177845,
    position: [0.54+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012513177845,
    position: [0.62+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012513177845,
    position: [0.70+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012513177845,
    position: [0.78+0.03, 0.48, 1.25 + 2.6],
    modelPath: "/models/Body/BodyPowder_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },

  //Side 4 - Lotta
  {
    id: 9012509769973,
    position: [0.3 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012509769973,
    position: [0.38 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012509769973,
    position: [0.46 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012509769973,
    position: [0.54 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012509769973,
    position: [0.62 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012509769973,
    position: [0.70 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012509769973,
    position: [0.78 - 1, 0.42 - 0.025, 1.25 + 2.6],
    modelPath: "/models/Body/ExfoliatorScrub_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },


  {
    id: 9012519600373,
    position: [0.3 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012519600373,
    position: [0.38 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012519600373,
    position: [0.46 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },

  {
    id: 9012519600373,
    position: [0.54 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012519600373,
    position: [0.62 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012519600373,
    position: [0.70 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },
  {
    id: 9012519600373,
    position: [0.78 - 1, 0.33 - 0.01, 1.25 + 2.6],
    modelPath: "/models/Body/WildBerryBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.02,
    allowCopy: true,
  },


  {
    id: 9012518748405,
    position: [0.3 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012518748405,
    position: [0.38 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012518748405,
    position: [0.46 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },

  {
    id: 9012518748405,
    position: [0.54 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012518748405,
    position: [0.62 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012518748405,
    position: [0.70 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },
  {
    id: 9012518748405,
    position: [0.78 - 1, 0.24 - 0.05, 1.25 + 2.6],
    modelPath: "/models/Body/FootButter_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.025,
    allowCopy: true,
  },





  {
    id: 9012478705909,
    position: [0.3 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012478705909,
    position: [0.38 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012478705909,
    position: [0.46 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },

  {
    id: 9012478705909,
    position: [0.54 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9012478705909,
    position: [0.62 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012478705909,
    position: [0.70 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },
  {
    id: 9012478705909,
    position: [0.78 - 1, 0.52, 1.25 + 2.6],
    modelPath: "/models/Best_Sellers/CharcoalBodyWash_optimized.glb",
    rotation: [0, 90, 0],
    scale: 0.017,
    allowCopy: true,
  },


  //Combos
  {
    id: 9013136556277,
    position: [0.2, 0.15, 0.48],
    modelPath: "/models/Combo/BodyComboO.glb",
    rotation: [0, -100, 0],
    scale: 0.012,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9013134852341,
    position: [0, 0.15, 0.48],
    modelPath: "/models/Combo/FaceComboO.glb",
    rotation: [0, -80, 0],
    scale: 0.012,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9013134196981,
    position: [-0.15, 0.15, 0.48],
    modelPath: "/models/Combo/GiftStack1O.glb",
    rotation: [0, 0, 0],
    scale: 0.012,
    allowCopy: true
  },

  {
    id: 9013138096373,
    position: [0.2, 0.15, -0.47],
    modelPath: "/models/Combo/MultiComboO.glb",
    rotation: [0, 100, 0],
    scale: 0.012,
    allowCopy: true
  },
  {
    id: 9013134196981,
    position: [0, 0.15, -0.47],
    modelPath: "/models/Combo/HairComboO.glb",
    rotation: [0,80, 0],
    scale: 0.012,
    allowCopy: true,
    isMainItem: true
  },
  {
    id: 9013134196981,
    position: [-0.12, 0.15, -0.47],
    modelPath: "/models/Combo/GiftStack2O.glb",
    rotation: [0, 0, 0],
    scale: 0.012, allowCopy: true
  },



];


export type { MannequinData };
export default mannequinData;

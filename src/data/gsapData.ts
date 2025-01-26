interface GsapData {
  ids: number[];
  position: number[];
  rotation: number[];
}

const gsapData: GsapData[] = [
  // Skin Care 1
  {
    ids: [9003886477557, 9012516618485, 9003865899253, 9012514095349],
    position: [-0.45, 0.35, -3.3],
    rotation: [0, 0, 0]
  },

  // Skin Care 2
  {
    ids: [9003888214261, 9003817894133, 9003881496821, 9012478771445],
    position: [0.54, 0.35, -3.3],
    rotation: [0, 0, 0]
  },

  // Body Care 2
  {
    ids: [9012513177845, 9012510720245, 9012509704437, 9003787223285],
    position: [0.54, 0.35, 3.3],
    rotation: [0, Math.PI, 0]
  },

  // Body Care 1
  {
    ids: [9012478705909, 9012516618485, 9012519600373, 9012518748405],
    position: [-0.45, 0.35, 3.3],
    rotation: [0, Math.PI, 0]
  },

  // Hair Care 1
  {
    ids: [9012464976117, 9012446003445, 9012496138485],
    position: [-0.3, 0.35, -1],
    rotation: [0, Math.PI/2, 0]
  },

  // Hair Care 2
  {
    ids: [9012432994549, 9003875696885, 9012450984181],
    position: [0.37, 0.35, -1],
    rotation: [0, -Math.PI/2, 0]
  },

  // Best Sellers
  {
    ids: [9012478705909, 9012496138485, 9012478771445],
    position: [0.37, 0.35, 1.05],
    rotation: [0, -Math.PI/2, 0]
  },

  // New Arrivals
  {
    ids: [9003875696885, 9012475265269, 9003886477557],
    position: [-0.3, 0.35, 1.05],
    rotation: [0, Math.PI/2, 0]
  },

  // Table 1
  {
    ids: [9013134196981, 9013138096373],
    position: [0.07, 0.35, -1],
    rotation: [0, Math.PI, 0]
  },

  // Table 2
  {
    ids: [9013136556277, 9013134852341],
    position: [0.07, 0.35, 1],
    rotation: [0, 0, 0]
  }
];

export type {GsapData};
export default gsapData;


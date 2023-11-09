import { type Map } from "../store/map";

export interface LevelGameData {
  map: Map;
  player: {
    x: number;
    y: number;
  };
  cargos: { x: number; y: number }[];
  targets: { x: number; y: number }[];
}

export type GameData = LevelGameData[];

export const levelGameData: LevelGameData = {
  player: {
    x: 1,
    y: 1,
  },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  cargos: [
    {
      x: 2,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ],
  targets: [
    {
      x: 4,
      y: 3,
    },
    {
      x: 6,
      y: 3,
    },
  ],
};

export const gameData: GameData = [
  levelGameData,
  {
    player: {
      x: 1,
      y: 1,
    },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    cargos: [
      {
        x: 2,
        y: 2,
      },
      {
        x: 3,
        y: 3,
      },
    ],
    targets: [
      {
        x: 4,
        y: 3,
      },
      {
        x: 6,
        y: 3,
      },
    ],
  },

  {
    player: {
      x: 1,
      y: 1,
    },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    cargos: [
      {
        x: 2,
        y: 2,
      },
      {
        x: 3,
        y: 3,
      },
    ],
    targets: [
      {
        x: 4,
        y: 3,
      },
      {
        x: 6,
        y: 3,
      },
    ],
  },
];

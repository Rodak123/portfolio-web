import type { Project } from './utils/project';

import { BeachCleanup } from './projects/java/beach-cleanup';
import { SlimeHoops } from './projects/java/slime-hoops';
import { Termitaire } from './projects/java/termitaire';
import { Modelab } from './projects/tsjs/modelab';
import { P5WebpackKit } from './projects/tsjs/p5-webpack-kit';
import { Quarkup } from './projects/tsjs/quarkup';
import { WordleArena } from './projects/tsjs/wordle-arena';
import { ChronoLabEscape } from './projects/unity/chrono-lab-escape';
import { DeepIgnition } from './projects/unity/deep-ignition';
import { InfiniteRacer } from './projects/unity/infinite-racer';
import { JustHexagons } from './projects/unity/just-hexagons';
import { SpacePirate } from './projects/unity/space-pirate';
import { TankTrouble } from './projects/unity/tank-troubles';
import { TimeLordsLegacy } from './projects/unity/time-lords-legacy';
import { SnapColor } from './projects/unity/snap-color';
import { ExRouter } from './projects/php/exrouter';
import { BeThere } from './projects/tsjs/be-there';
import { Canvas } from './projects/tsjs/canvas';
import { BannerAnimation } from './projects/tsjs/banner-animation';

export const ORDERED_PROJECTS: Project[] = [
  TimeLordsLegacy,
  DeepIgnition,
  JustHexagons,
  Termitaire,
  BeachCleanup,
  Quarkup,
  WordleArena,
  ChronoLabEscape,
  TankTrouble,
  P5WebpackKit,
  SnapColor,
  Modelab,
  SlimeHoops,
  ExRouter,
  InfiniteRacer,
  Canvas,
  BeThere,
  SpacePirate,
  BannerAnimation,
];

export const PROJECT_MAP = ORDERED_PROJECTS.reduce<Record<string, Project>>(
  (acc, project) => {
    acc[project.slug] = project;
    return acc;
  },
  {},
);

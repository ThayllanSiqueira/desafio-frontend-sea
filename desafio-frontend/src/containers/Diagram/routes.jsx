import Diagram from './DiagramScreen';

export const DiagramRoutesEnum = {
  DIAGRAM: '/diagram',
};


export const diagramRoutes = [
 {
  path: DiagramRoutesEnum.DIAGRAM,
  element: <Diagram />,
 },
];

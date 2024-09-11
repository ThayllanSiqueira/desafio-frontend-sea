import SVGStepsDisabled from '../../components/SVGs/SVGStepsDisabled';
import SVGStepsActived from '../../components/SVGs/SVGStepsActived';
import ComingSoon from '../../components/ComingSoon';
import StepOneContent from '../../containers/Edit/components/EmployeeSteps/components/StepOneContent';
import { Icon } from '../../components/Icons/Icons.styles';

const StepsDisabledIcon = (props) => <Icon component={SVGStepsDisabled} {...props} />;
const StepsActivedIcon = (props) => <Icon component={SVGStepsActived} {...props} />;

export const steps = [
  {
   title: 'Item 1',
   description: '',
   icon: <StepsActivedIcon />,
   content: <StepOneContent />,
  },
  {
   title: 'Item 2',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 3',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 4',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 5',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 6',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 7',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 8',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
  {
   title: 'Item 9',
   description: '',
   icon: <StepsDisabledIcon />,
   content: <ComingSoon />,
  },
 ];

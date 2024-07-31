import { useState, useEffect, useCallback, useMemo } from 'react';
import Icon from '@ant-design/icons';
import { Button, theme } from 'antd';

import ComingSoon from '../../../../components/ComingSoon';
import StepOneContent from './components/StepOneContent';
import SVGStepsActived from './components/SVGStepsActived';
import SVGStepsEnabled from './components/SVGStepsEnabled';
import SVGStepsDisabled from './components/SVGStepsDisabled';

import { useEditContext } from '../../hooks/useEditEmployeeContext';

import { StyledSteps } from './Steps.styles';


const StepsActivedIcon = (props) => <Icon component={SVGStepsActived} {...props} />;
const StepsEnabledIcon = (props) => <Icon component={SVGStepsEnabled} {...props} />;
const StepsDisabledIcon = (props) => <Icon component={SVGStepsDisabled} {...props} />;

const steps = [
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

const EmployeeSteps = () => {
 const initialItems = useMemo(() => steps.map((item) => ({
  key: item.title,
  title: item.title,
  description: '',
  icon: item.icon,
  content: item.content,
 })), []);

 const { editData, setEditData } = useEditContext();
 const [current, setCurrent] = useState(0);
 const [items, setItems] = useState(initialItems);

 const [stepsClickable, setStepsClickable] = useState(false);

 const enableIcons = useCallback(() => {
  setStepsClickable(true);
  setItems((allItems) =>
   allItems.map((item, index) => {
    if (index !== 0) {
     item.icon = <StepsEnabledIcon />;
    }
    return item;
   })
  );
 }, []);

 const stepConcluded = useCallback(() => {
  setStepsClickable(true);
  setItems((allItems) =>
   allItems.map((item, index) => {
    if (index === 0) {
     return {
      ...item,
      description: 'Concluido',
     };
    }
    return {
     ...item,
     icon: <StepsEnabledIcon />,
    };
   })
  );
 }, []);

 const next = useCallback(() => {
  const itemCurrent = current + 1;
  setCurrent(itemCurrent);
  setItems((allItems) =>
   allItems.map((item, index) => {
    if (index === itemCurrent) {
     item.icon = <StepsActivedIcon />;
    }

    if (index < itemCurrent) {
     item.icon = <StepsEnabledIcon />;
     item.description = 'Concluido';
    }
    return item;
   })
  );
 }, [current]);

 const prev = useCallback(() => {
  const itemCurrent = current - 1;
  if (itemCurrent === 0) {
   editData.setCurrent(itemCurrent);
   editData.setItems(initialItems);
   editData.setIsButtonNextStepDisabled((prev) => !prev);
   setStepsClickable(false);
  } else {
   setCurrent(itemCurrent);
   setItems((allItems) =>
    allItems.map((item, index) => {
     if (index === itemCurrent) {
      item.icon = <StepsActivedIcon />;
      item.description = '';
     }

     if (index > itemCurrent) {
      item.icon = <StepsEnabledIcon />;
      item.description = '';
     }
     return item;
    })
   );
  }

 }, [current]);

 const onChange = (value) => {
  if (stepsClickable) {
   if (value === 0) {
    editData.setCurrent(value);
    editData.setItems(initialItems);
    editData.setIsButtonNextStepDisabled((prev) => !prev);
    setStepsClickable(false);
   } else {
    setCurrent(value);
    setItems((allItems) =>
     allItems.map((item, index) => {
      if (index === value) {
       item.icon = <StepsActivedIcon />;
      }

      if (index < value) {
       item.icon = <StepsEnabledIcon />;
       item.description = 'Concluido';
      }

      if (index > value) {
       item.icon = <StepsEnabledIcon />;
       item.description = '';
      }
      return item;
     })
    );
   }

  }
 };

 const contextValue = useMemo(() => ({
  enableIcons,
  stepConcluded,
  next,
  prev,
  setItems,
  setCurrent,
  current,
  steps,
 }), [enableIcons, stepConcluded, next, prev, setItems, setCurrent, current, steps]);

 useEffect(() => {
  setEditData(contextValue);
 }, [contextValue, setEditData]);

 return (
  <StyledSteps
   onChange={onChange}
   current={current}
   items={items}
  />
 );
};

export default EmployeeSteps;


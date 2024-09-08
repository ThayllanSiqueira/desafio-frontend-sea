import { useMemo, useState, useEffect, useCallback  } from 'react';

import { steps } from '../../../../utils/constants/steps';
import { useEditContext } from '../../hooks/useEditEmployeeContext';
import { Icon } from '../../../../components/Icons/Icons.styles';
import SVGStepsActived from '../../../../components/SVGs/SVGStepsActived';
import SVGStepsEnabled from '../../../../components/SVGs/SVGStepsEnabled';

const StepsActivedIcon = (props) => <Icon component={SVGStepsActived} {...props} />;
const StepsEnabledIcon = (props) => <Icon component={SVGStepsEnabled} {...props} />;

export const useEmployeeSteps = () => {
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

  return {
    onChange,
    current,
    items,
  }
}

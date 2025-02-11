import React, { JSX,  } from 'react';
import { Tabs, Typography } from 'antd';
import { default as UseMemoExample } from '../components/bestPractices/useMemo';
import { default as UseCallbackExample } from '../components/bestPractices/useCallback';
import VirtualizedListExample from '../components/bestPractices/virtualization';
import UseTransitionExample from '../components/bestPractices/useTransition';
import UseOptimisticExample from '../components/bestPractices/useOptimistic';
import { useFormStatus } from 'react-dom';
import UseFormStatusExample from '../components/bestPractices/useFormStatus';


const { Title } = Typography;
const { TabPane } = Tabs;

const hooks = ['useMemo', 'useCallback', 'Virtualization','useTransition','useOptimistic','useFormStatus'];


const TabComponents: Record<string, JSX.Element> = {
  useMemo: <UseMemoExample />,
  useCallback: <UseCallbackExample />,
  Virtualization: <VirtualizedListExample/>,
  useTransition:<UseTransitionExample />,
  useOptimistic: <UseOptimisticExample/>,
  useFormStatus: <UseFormStatusExample/>
};

const BestPractices: React.FC = () => {
  return (
    <div>
      <Title>Best Practices</Title>
      <Tabs defaultActiveKey="useMemo">
        {hooks.map((hook) => (
          <TabPane tab={hook} key={hook}>
            {TabComponents[hook] || <div>No content available</div>}
          </TabPane>
        ))}
      </Tabs>
      <p style={{textAlign:'center'}} ><u>Note: Check browser console for clear understanding of the concept</u></p>
    </div>
  );
};

export default BestPractices;

import React, { JSX,  } from 'react';
import { Tabs, Typography } from 'antd';
import { default as UseMemoExample } from '../components/bestPractices/useMemo';
import { default as UseCallbackExample } from '../components/bestPractices/useCallback';
import VirtualizedListExample from '../components/bestPractices/virtualization';
import LazyLoadingExample from '../components/concepts/lazyLoading';


const { Title } = Typography;
const { TabPane } = Tabs;

const hooks = ['useMemo', 'useCallback', 'virtualization','lazyLoading',];


const TabComponents: Record<string, JSX.Element> = {
  useMemo: <UseMemoExample />,
  useCallback: <UseCallbackExample />,
  virtualization: <VirtualizedListExample/>,
  lazyLoading: <LazyLoadingExample/>,  

};

const BestPractices: React.FC = () => {
  return (
    <div>
      <Title>Best Practices</Title>
      <Tabs defaultActiveKey="lazyLoading">
        {hooks.map((hook) => (
          <TabPane tab={hook} key={hook}>
            {TabComponents[hook] || <div>No content available</div>}
            {['useMemo', 'useCallback', 'virtualization'].includes(hook)&&(<p style={{textAlign:'center'}} ><u>Note: Check browser console for clear understanding of the concept</u></p>)}
          </TabPane>
        ))}
      </Tabs>
      
    </div>
  );
};

export default BestPractices;

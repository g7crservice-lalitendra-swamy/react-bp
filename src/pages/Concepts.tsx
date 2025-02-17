import React, { JSX,  } from 'react';
import { Tabs, Typography } from 'antd';
import UseTransitionExample from '../components/concepts/useTransition';
import UseOptimisticExample from '../components/concepts/useOptimistic';
import UseFormStatusExample from '../components/concepts/useFormStatus';
import UseExample from '../components/concepts/use/PostsList.server';
import ThreeJs from '../components/concepts/threeJs';




const { Title } = Typography;
const { TabPane } = Tabs;

const hooks = ['useTransition', 'useOptimistic', 'useFormStatus','threeJs'];


const TabComponents: Record<string, JSX.Element> = {

  useTransition:<UseTransitionExample />,
  useOptimistic: <UseOptimisticExample/>,
  useFormStatus: <UseFormStatusExample/>,
  threeJs:<ThreeJs/>
  // 'use( )':<UseExample/>  

};

const Concepts: React.FC = () => {
  return (
    <div>
      <Title>Concepts</Title>
      <Tabs defaultActiveKey="threeJs">
        {hooks.map((hook) => (
          <TabPane tab={hook} key={hook}>
            {TabComponents[hook] || <div>No content available</div>}    
            
          </TabPane>
        ))}
      
      </Tabs>
    </div>
  );
};

export default Concepts;

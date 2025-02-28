import React from "react";
import { Row, Col, Card } from "antd";

import Cylinder from "./Cylinder";
import CoffeeCup from "./CoffeeCup";

const models = [
  { title: "Cylinder", component: <Cylinder /> },
  { title: "CoffeeCup", component: <CoffeeCup /> },
  { title: "Cylinder", component: <Cylinder /> },
 
  
];

const ThreeJs: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {models.map((model, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8}>
            <Card
              title={model.title}
              bordered={true}
              style={{  }}
              bodyStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ width: "100%", position: "relative" }}>
                {model.component}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
  );
};

export default ThreeJs;

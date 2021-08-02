import { Row, Col } from "react-bootstrap";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList({ itemList }) {
  return (
    <>
      <Row className="item-list-container">
        {itemList.map((item) => (
          <Col xs={12} sm={6} md={4} lg={3} >
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              pictureUrl={item.pictureUrl}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ItemList;

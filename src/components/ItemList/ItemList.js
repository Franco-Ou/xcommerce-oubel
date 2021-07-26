import { Row } from "react-bootstrap";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList({ itemList }) {
  return (
    <>
      <Row className="item-list-container">
        {itemList.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        ))}
      </Row>
    </>
  );
}

export default ItemList;

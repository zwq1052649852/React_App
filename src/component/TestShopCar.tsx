// 这篇简单测试商品列表，带增删，学习useState的使用
import { useState } from "react";

function testShopCar(props?: { products?: Array<never> }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProduct] = useState(() => {
        const defaultProduct = props?.products ? props.products : [{
            id: 1,
            name: "iphone",
            price: 10000,
            count: 1
        }, {id: 2, name: "ipad", price: 20000, count: 1}, {id: 3, name: "mac", price: 30000, count: 1}];
        const initialProducts = new Map();
        defaultProduct.forEach((item) => {
            initialProducts.set(item.id, item);
        });
        return initialProducts;
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shopCar, setShopCar] = useState([]);

    return (<div>
        <div style={{ display: 'inline-block'}}>
            我是购物车：目前购物车内存在：{...shopCar.map((item: { id: string, name: string }) => (
                <div style={{marginRight: '4px;'}}
                     key={item.id}>
                    {item.name}
                    <span onClick={() => {
                        setProduct((products) => {
                            const newProducts = new Map(products);
                            newProducts.set(item.id, item);
                            return newProducts;
                        })
                        setShopCar((shopCar) => shopCar.filter((cur: { id: string, name: string }) => cur.id !== item.id))
                    }}>移除</span>
                </div>
        ))}
        </div>
        <div style={{ display: 'inline-block'}}>
            我是商城，目前商场内有：{Array.from(products).map(([productId, product]) => (
            <div key={productId} className="user-card">
                <h3>{product.name}</h3>
                <p>ID: {productId}</p>
                <p onClick={() => {
                    setProduct((products) => {
                        const newProducts = new Map(products);
                        newProducts.delete(productId);
                        return newProducts;
                    });
                    setShopCar((ShopCar) => ShopCar.concat(product));
                }}>添加+</p>
            </div>
        ))}
        </div>
    </div>)
}

export default testShopCar;
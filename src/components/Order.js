import React from "react";



class Order extends React.Component{
    render(){
        const orderIds = Object.keys(this.props.order)
        return (
            <div className="order-wrap">
             <h2>Ваш заказ</h2>   
            </div>
        )
    }
}
export default Order;
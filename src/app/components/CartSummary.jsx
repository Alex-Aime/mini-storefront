'use client';

export default function CartSummary({cartItems, onDecrement, onReset}) {
    const items = Object.value(cartItems);

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return(
        <div>
            <h3>
                Cart Summary
            </h3>
            {items.length === 0 ? (<p>Your Cart is Empty</p>):
            (
                <>
                    <ul>
                        {items.map((item) => (
                            <li key= {item.id}>
                                <span>{item.name}</span>
                                <div>
                                    <span>${item.price}</span>
                                    <button onClick={() => onDecrement(item.id)}>Remove</button>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                    <div>Total:${totalPrice}</div>
                    <button onClick={onReset}>Reset</button>
                </>
            )}
        </div>
    )

};
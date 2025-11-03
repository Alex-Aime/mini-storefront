'use client';

export default function CartSummary({cartItems, onDecrement, onReset}) {
    const items = Object.value(cartItems);

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return(
        <div>
            <h3>
                Cart Summary
            </h3>
        </div>
    )
}
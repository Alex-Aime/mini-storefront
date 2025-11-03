'use client';

export default function StatusMessage({loading, error, count}) {
    if (loading){
        return (
            <div>
                loading products....
            </div>
        )
    };

    if (error){
        return (
            <div>
                {error}
            </div>
        )
    };

    if (count === 0){
        return (
            <div>
                No products match the filters
            </div>
        )
    };



    return null;
}

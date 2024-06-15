import React from 'react';

function Cards({ item }) {
    return (
        <div className="mt-4 my-3 px-6 py-7">
            <div className="card w-80 h-90 bg-base-100 shadow-2xl transition-transform transform hover:scale-105 duration-300 dark:bg-slate-800 dark:text-white">
                <figure className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body   flex flex-col justify-between h-60"> 
                    <div>
                        <h2 className="card-title text-lg font-bold">
                            {item.title}
                            <div className="badge badge-warning ml-2">{item.category}</div>
                        </h2>
                        <p className="truncate">{item.description}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-yellow-400 hover:text-black ml-2 duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;

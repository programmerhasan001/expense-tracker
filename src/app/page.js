"use client"

import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    { name: "Coffee", price: "3.4" },
    { name: "Burger", price: "2.4" },
    { name: "Pizza", price: "4.4" },
  ])

  const [total, setTotal] = useState(0);
  return (
    <main>
      <div className="expense__container h-screen w-screen bg-black flex flex-col items-center py-4">
        <h2 className="text-white text-3xl font-mono">Expense Tracker</h2>

        <div className="form__container mt-4 bg-slate-600 rounded-md">
          <form>
            <div className="grid grid-cols-6 gap-3 py-3 px-4">
              <input className="col-span-3 py-2 px-3 rounded-lg outline-none" type="text" name="item" id="item" placeholder="Enter Item" />
              <input className="col-span-2 py-2 px-3 rounded-lg outline-none" type="number" name="price" id="price" placeholder="$" />
              <input className="col-span-1 text-white text-3xl bg-slate-950 rounded-lg cursor-pointer hover:bg-slate-900 duration-150" type="submit" value="+" />
            </div>
          </form>

          <ul className="py-4 px-5 grid gap-3">
            {
              items.length > 0 && items.map(itm => {
                return (
                  <li className="grid grid-cols-5 bg-slate-950 text-white p-3">
                    <div className="col-span-3 flex justify-between items-center mr-7">
                      <span>{itm.name}</span>
                      <span>{itm.price}</span>
                    </div>
                    <div className="col-span-1 border-l-2 border-slate-500">
                      <button className="mx-auto block w-10 hover:bg-slate-900 py-2 px-8">X</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>

          {
            items.length > 0 &&
            <div className="px-5 pb-3 text-xl text-white">
              <span>Total</span>
              <span className="ml-2">${total}</span>
            </div>
          }
        </div>
      </div>
    </main>
  );
}

import React from "react";

function PurchaseHistory() {
  const purchaseHistory = [
    { id: 1, productName: "Ürün 1", price: 50, purchaseDate: "2024-02-17" },
    { id: 2, productName: "Ürün 2", price: 70, purchaseDate: "2024-02-16" },
    { id: 3, productName: "Ürün 3", price: 100, purchaseDate: "2024-02-15" },
    { id: 4, productName: "Ürün 4", price: 120, purchaseDate: "2024-02-14" },
    { id: 5, productName: "Ürün 5", price: 90, purchaseDate: "2024-02-13" },
  ];

  return (
    <div>
      <h2>Satın Alma Geçmişi</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>Satın Alma Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.price} TL</td>
              <td>{item.purchaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseHistory;

'use strict';
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'warehouse-table';

module.exports.createItem = async (event) => {
  const data = JSON.parse(event.body);
  const id = uuidv4();
  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: id,
      name: data.name,
      quantity: data.quantity,
        // 🏷️ Identificación y categorización
      sku: data.sku, // Código interno o SKU
      category: data.category, // Categoría (ej. 'Electrónica', 'Alimentos')
      brand: data.brand, // Marca del producto
      model: data.model, // Modelo o referencia
      // 📦 Información de inventario
      minStock: data.minStock, // Nivel mínimo de inventario permitido
      maxStock: data.maxStock, // Nivel máximo de inventario
      unit: data.unit, // Unidad de medida (ej. 'kg', 'unidad', 'litro')
      location: data.location, // Ubicación física dentro del almacén (estantería, pasillo, etc.)
      // 💰 Información financiera
      costPrice: data.costPrice, // Precio de compra
      salePrice: data.salePrice, // Precio de venta
      currency: data.currency || "COP", // Moneda (por defecto peso colombiano)
       // 📅 Trazabilidad
      supplier: data.supplier, // Proveedor principal
      purchaseDate: data.purchaseDate, // Fecha de compra
      expiryDate: data.expiryDate, // Fecha de vencimiento (si aplica)
      lastUpdated: new Date().toISOString(), // Fecha de última actualización
      // 🧾 Estado y control
      status: data.status || "activo", // Estado del producto: activo, agotado, descontinuado
      description: data.description, // Descripción o notas del producto
      barcode: data.barcode, // Código de barras o QR

      // ... otros campos del almacén
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Item creado', id: id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al crear el item', error }),
    };
  }
};
